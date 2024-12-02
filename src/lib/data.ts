const experiences = [
    {
        period: "2025",
        job: "Développeur Front Senior",
        company: "OVHCloud",
        logo: "ovh-cloud.webp",
        tools: ["ReactJs"]
    },
    {
        period: "2023",
        job: "Lead dev Full-stack",
        company: "Alcyconie",
        logo: "alcyconie.webp",
        tools: ["Svelte", "Typescript", "PostgreSQL", "Playwright", "Scaleway"]
    },
    {
        period: "2023",
        job: "Développeur Front Senior",
        company: "SlowLettuce",
        logo: "slowlettuce.svg",
        tools: ["Svelte", "Typescript", "TailwindCss", "Netlify"]
    },
    {
        period: "2022",
        job: "Co-fondateur / CTO",
        company: "Trouve Ton Sport",
        logo: "trouvetonsport.svg",
        tools: ["Svelte", "Typescript", "MongoDB", "Scaleway"],
    },
    {
        period: "2021",
        job: "Tech Lead Front",
        company: "Jamespot",
        logo: "jamespot.webp",
        tools: ["ReactJs", "Redux Toolkit", "Typescript", "NodeJs", "MySQL", "Cypress", "Kunernetes"],
    },
    {
        period: "2020",
        job: "Développeur Fullstack Senior",
        company: "Foodologic",
        logo: "foodologic.webp",
        tools: ["Svelte", "Typescript", "NodeJs", "Express", "MongoDB"]
    },
    {
        period: "2017",
        job: "Développeur Fullstack",
        company: "Sopra Steria",
        logo: "soprasteria.webp",
        tools: ["Java 7", "Angular 4+", "Typescript", "Oracle SQL", "Jenkins"],
    }
];

const projects = [
    {
        year: 2024,
        description: `Site <a href="https://www.veilleecologique.fr/">↗&nbsp;Veille écologique.fr</a> (14'000 📃)`
    },
    {
        year: 2023,
        description: `Librairie <a href="https://github.com/Ennoriel/svelte-reveal.js">↗&nbsp;svelte-reveal.js</a>`
    },
    {
        year: 2022,
        description: `Serveur <a href="https://discord.gg/N3UTWGt7">↗&nbsp;Discord Svelte Francophone</a>`
    },
    {
        year: 2021,
        description: `Librairie <a href="https://github.com/Ennoriel/svelte-awesome-color-picker">↗&nbsp;svelte-awesome-color-picker</a> (135 ⭐)`
    }
];

const furtherProjects = [
    {
        year: 2024,
        name: "librairie ts de scraping",
        repo: "https://github.com/Ennoriel/chymy"
    },
    {
        year: 2023,
        name: "Dataviz de Hacker News",
        app: "https://y-combinator-news-trends.vercel.app/"
    },
    {
        year: 2023,
        name: "Librairie de slider personnalisable en Svelte",
        repo: "https://github.com/Ennoriel/svelte-awesome-slider",
        app: "https://svelte-awesome-slider.vercel.app/"
    },
    {
        year: 2022,
        name: "Librairie d'affichage de liens de réseaux sociaux (Facebook, Instagram, etc.)",
        repo: "https://github.com/Ennoriel/social-links",
        app: "https://share-links-site.vercel.app/"
    },
    {
        year: 2021,
        name: "librairie ts de calcul de force de mot de passe (mainteneur)",
        repo: "https://github.com/Ennoriel/check-password-strength"
    },
    {
        year: 2021,
        name: "Projet de dataviz des amendements pour la député Paula Caterino",
        repo: "https://github.com/Ennoriel/data-viz-amendements"
    },
    {
        year: 2021,
        name: "moteur de recherche des émoji unicode",
        repo: "https://github.com/Ennoriel/unicode-emoji-search-engine",
        app: "https://ennoriel.github.io/unicode-emoji-search-engine/"
    },
    {
        year: 2021,
        name: "librairie d'utilitaires ts",
        repo: "https://github.com/Ennoriel/chyme"
    },
    {
        year: 2020,
        name: "Application pour concevoir des motifs de bracelet ou broche en perle",
        repo: "https://github.com/Ennoriel/bead-pattern",
        app: "https://ennoriel.github.io/bead-pattern/"
    },
    {
        year: 2019,
        name: "Coding dojo java pour construire son noeud de blockchain",
        repo: "https://github.com/Ennoriel/blockchain-demo"
    },
]

const talks = [
    {
        year: 2024,
        event: "Breizh Camp",
        title: "Comment faire une bonne campagne de Green Washing Solutioniste ?",
        link: {
            text: "replay youtube",
            src: "https://www.youtube.com/watch?v=mhM4PvZDQUE"
        }
    },
    {
        year: 2024,
        event: "INSA Rennes",
        title: "L’effet rebond du numérique sur l’environnement"
    },
    {
        year: 2023,
        event: "Breizh Camp",
        title: "Workshop : SvelteKit à l'attaque des dinosaures",
        link: {
            text: "replay youtube",
            src: "https://www.youtube.com/watch?v=COXZ78AJVns"
        }
    },
    {
        year: 2023,
        event: "Bdx.io",
        title: "Workshop : Pokedex avec SvelteKit",
        link: {
            text: "repository",
            src: "https://github.com/sveltefr/kit-demo"
        }
    },
]

export const data = {
    experiences,
    projects,
    furtherProjects,
    talks
}
