---
theme: default
title: Shai-Hulud
favicon: /favicon.svg
canvasWidth: 960
aspectRatio: 4/3
colorSchema: dark
shiki:
  theme: dark-plus
mermaid:
  theme: dark
---

<!-- https://pnpm.io/blog/2025/12/05/newsroom-npm-supply-chain-security -->

<style>
@import './styles/font.css';
@import './styles/ovhcloud-slidev-theme.css';
</style>

<div class="cover-grid">
  <div class="content-left">
    <div class="ovh-logo">
      <img src="/images/ovhcloud-logo.svg" width="140" alt="OVHcloud" />
    </div>
    <h1>Dans les entrailles d'une supply chain attack : REX de Shai-Hulud 2.0 et enseignements</h1>
    <div class="speaker-block">
        <p class="speaker-name">Maxime Dupont</p>
        <p class="speaker-name">OVHcloud</p>
    </div>
  </div>

  <div class="content-right">
    <img class="tri-blue"      src="/images/triangle-blue.svg"       alt="" aria-hidden="true" />
    <img class="tri-light-blue" src="/images/triangle-light-blue.svg" alt="" aria-hidden="true" />
    <img class="speaker-woman" src="/images/woman.png" alt="Speaker" />
    <img class="speaker-man"   src="/images/man.png"   alt="Speaker" />
  </div>
</div>

<style>
  h1 {
    font-size: 2rem !important;
  }
</style>

---

# Agenda

| #   | Partie                                | Durée |
| --- | ------------------------------------- | ----- |
| 1   | **L'attaque** — Contexte, chronologie et mécanisme technique | ~10 min |
| 2   | **Les enseignements** — Détection, remédiation et comment se protéger | ~10 min |
| 3   | **Questions / Réponses** | ~5 min |

---
layout: section
---

# Partie 1 — L'attaque

---

# C'est quoi une supply chain attack ?

Vous n'attaquez pas la cible directement. Vous compromettez **un de ses fournisseurs**.

1. Un attaquant compromet un paquet npm populaire
2. Le paquet npm populaire est installé par un développeur / une CI
3. Cela donne accès aux secrets, aux tokens et aux infra cloud

**Analogie** : empoisonner l'eau à la source plutôt que cibler chaque maison.

> **npm**  
> le plus grand registre de paquets JavaScript  
> 2,5 millions de paquets  
> des milliards de téléchargements par semaine

---

# Shai-Hulud 2.0 — "The Second Coming"

Une première attaque (v1) avait déjà frappé npm en **septembre 2025** via un `postinstall` script, compromettant 500+ paquets et causant **~50M$** de pertes de cryptomonnaies ([Check Point](https://blog.checkpoint.com/research/shai-hulud-2-0-inside-the-second-coming-the-most-aggressive-npm-supply-chain-attack-of-2025/)). Deux mois plus tard, une deuxième version voit le jour.

| Métrique | Valeur |
| --- | --- |
| Paquets npm compromis | **796** |
| Téléchargements hebdo cumulés | **20 millions+** |
| Repos GitHub exposés | **25 000+** |
| Secrets exfiltrés | **294 842** dont **3 760 valides** |
| Durée de l'attaque | **48h** (21-23 nov.) |

## Victimes notables

Zapier, PostHog, Postman, ENS Domains — des mainteneurs de paquets avec des millions d'utilisateurs.

---

# Anatomie technique — Stage 1

Le paquet compromis contient un **preinstall script** dans `package.json` :

```json
{
  "scripts": {
    "preinstall": "node setup_bun.js"
  }
}
```

## Pourquoi `preinstall` ?

- S'exécute **avant** l'installation, avant les tests, avant les checks de sécurité
- S'exécute **même si l'installation échoue**
- Le fichier `setup_bun.js` est volontairement **non obfusqué** et bien documenté — il se fait passer pour un installeur légitime du runtime **Bun**

> L'attaquant joue sur la confiance : le code a l'air normal à première vue.

---

# Anatomie technique — Stage 2

`setup_bun.js` télécharge et exécute `bun_environment.js` — un fichier de **10 Mo**, obfusqué.

## Ce qu'il fait :

1. **Énumère les variables d'environnement** : tokens npm, GitHub, AWS, Azure, GCP
2. **Scanne les fichiers SSH**, `.env`, configs git, historique
3. **Télécharge et exécute Trufflehog** (outil légitime de détection de secrets) pour scanner tout le répertoire home
4. **Collecte tout** dans des fichiers JSON structurés : `cloud.json`, `environment.json`, `actionsSecrets.json`

## Auto-réplication

S'il trouve un token npm valide → il **republie** les paquets accessibles avec le payload malicieux inclus. Le ver se propage.

---

# Exfiltration — Pas de C2, juste GitHub

Innovation majeure : **pas de serveur C2 (Command and Control) classique**.

1. Création d'un repo github public "Sha1-Hulud: The Second Coming"
2. Push les secrets volés

## Pourquoi c'est malin ?

- Le trafic vers `github.com` n'est **jamais bloqué** par les firewalls
- Pas de domaine suspect à détecter
- Les repos sont publics → les attaquants (et d'autres) récupèrent les secrets en temps réel

## Persistance

Le malware installe la machine victime comme **GitHub self-hosted runner** → exécution de workflows arbitraires à distance, même après suppression du paquet.

---

# Le payload destructif — "Nothing to steal? Let's wipe."

Si le malware ne trouve **ni token npm, ni token GitHub** :

- Destruction du répertoire home de l'utilisateur
- Écrasement sécurisé + suppression de chaque fichier accessible en écriture

**20% des machines compromises étaient des GitHub runners** → des pipelines CI/CD entières détruites.

> C'est la première supply chain attack npm avec un mécanisme de **sabotage punitif**.

---
layout: section
---

# Partie 2 — Les enseignements

---

# Pourquoi ça nous concerne ?

On utilise (tous) npm 😂 et si on n'utilise pas npm, on en utilise d'autres

> Luck isn't a security strategy.  
> Ryan Sobol — Principal Software Engineer at the Seattle Times

---

# Comment l'attaque a été détectée ?

## Ecosystème

Connaissez votre écosystème !

## Veille technique

Veillez ! -> [Hacker news](https://news.ycombinator.com/)

* site de partage social de liens (centré sur la Californie)
* veille multi-sujets

---

# Remédiation — Les premières heures

Si vous découvrez que vous êtes compromis :

| Action | Détail |
| --- | --- |
| **Ne pas supprimer** le repo malveillant | Le privatiser immédiatement pour stopper l'exposition (préserver les traces forensiques) |
| **Désactiver** les workflows malicieux | Vérifier tous les self-hosted runners |
| **Supprimer** les paquets infectés | Reverter aux versions saines connues, surtout sur les registres internes |
| **Révoquer TOUS les secrets** | Pas seulement ceux trouvés dans le repo — **tous** |
| **Auditer les accès** | Qui a installé quoi, quand, sur quelle machine |

> Révoquer uniquement les secrets trouvés ne suffit pas : Trufflehog a peut-être trouvé des secrets que vous n'avez pas vus.

---

# Se protéger — Les lifecycle scripts

Le vecteur d'entrée = `preinstall` / `postinstall`. Le choix du package manager est la **première ligne de défense**.

## Choix du manager de packets

| Package manager | Version | Date |
| --- | --- | --- |
| **Yarn** | v2.0 | Jan. 2020 |
| **Bun** | v1.0 | Sept. 2023 |
| **pnpm** | v10.0 | Jan. 2025 |
| **npm** | - | - |


---

# Se protéger — minimumReleaseAge

Bloquer l'installation de versions publiées trop récemment — le temps que la communauté détecte les paquets malicieux.

```yaml
# .npmrc (pnpm)
minimum-release-age=3d
minimum-release-age-exclude=my-org
```

> Les 796 paquets compromis ont été publiés et détectés en **48h** — un délai de 3 jours les aurait tous bloqués.

| Package manager | Feature | Disponible depuis |
| --- | --- | --- |
| **npm** | `minimum-release-age` | v11.11 (feb. 2026) |
| **pnpm** | `minimum-release-age` | v10.16 (sept. 2025) |
| **Yarn** | `npmMinimalAgeGate` | v4.10.0 (sept. 2025) |
| **Bun** | Support natif | v1.3 (oct. 2025) |

---

# Se protéger — npm et CI/CD

Si vous ne pouvez pas utiliser pnpm :

```bash
npm config set ignore-scripts true     # Désactive tous les lifecycle scripts
npm install --ignore-scripts           # Par installation
```

En CI/CD, toujours builder avec `--ignore-scripts` et exécuter les scripts nécessaires manuellement après audit.

---

# Se protéger — Les tokens et secrets

| Pratique | Pourquoi |
| --- | --- |
| **Tokens à durée de vie courte** | Un token npm volé expire avant d'être exploité |
| **Tokens scopés** | Limiter l'accès au strict nécessaire (publish sur 1 paquet, pas tous) |
| **MFA obligatoire** | sur npm ET GitHub — bloque la prise de contrôle de compte |
| **Pas de secrets en env vars en CI** | Utiliser un vault (HashiCorp, GitHub OIDC) |
| **Restreindre le réseau sortant** | Whitelist de domaines autorisés depuis les runners |

---

# Se protéger — Audit et monitoring

- **Lockfiles** : `package-lock.json` / `pnpm-lock.yaml` versionnés et revus en PR
- **`npm audit`** / **`pnpm audit`** dans la CI — bloquant en cas de vulnérabilité critique
- **Socket.dev** / **Snyk** / **GitGuardian** : alertes en temps réel sur les paquets compromis
- **Surveiller les publications npm** de vos paquets internes (alertes sur version bump inattendu)
- **Auditer les GitHub runners** : lister régulièrement les self-hosted runners et supprimer ceux non reconnus

---

# Résumé — Ce qu'il faut retenir

1. **npm est un vecteur d'attaque majeur** — la confiance dans l'écosystème est exploitée
2. **Les preinstall scripts sont dangereux** — les désactiver par défaut
3. **Les tokens sont la cible n°1** — courts, scopés, protégés par MFA
4. **La CI/CD est une surface d'attaque** — traiter les runners comme des machines sensibles
5. **Defense in depth** — pas une seule mesure, mais un empilement de protections
6. **Shai-Hulud 2.0 a introduit le sabotage** — l'attaquant détruit ce qu'il ne peut pas voler

---

# Pour aller plus loin

- [Microsoft — Guidance for detecting and defending](https://www.microsoft.com/en-us/security/blog/2025/12/09/shai-hulud-2-0-guidance-for-detecting-investigating-and-defending-against-the-supply-chain-attack/)
- [Wiz — 25K+ Repos Exposed](https://www.wiz.io/blog/shai-hulud-2-0-ongoing-supply-chain-attack)
- [Unit42 — npm Supply Chain Attack](https://unit42.paloaltonetworks.com/npm-supply-chain-attack/)
- [Check Point — Most Aggressive NPM Supply Chain Attack of 2025](https://blog.checkpoint.com/research/shai-hulud-2-0-inside-the-second-coming-the-most-aggressive-npm-supply-chain-attack-of-2025/)
- [Datadog Security Labs — npm worm analysis](https://securitylabs.datadoghq.com/articles/shai-hulud-2.0-npm-worm/)
- [Kaspersky Securelist — "Nothing to steal? Let's wipe."](https://securelist.com/shai-hulud-2-0/118214/)
- [JFrog — Protection & Response Guide](https://research.jfrog.com/post/shai-hulud-the-second-coming-remediation-guidance/)
- [Snyk — Building a Resilient Software Supply Chain](https://snyk.io/blog/shai-hulud-post-mortem/)

---

# Questions ?

Posez vos questions — sur l'attaque, les mesures de protection.
