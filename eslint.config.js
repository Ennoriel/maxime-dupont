import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
	js.configs.recommended,

	...tseslint.configs.recommended,

	...svelte.configs['flat/recommended'],

	prettier,
	...svelte.configs['flat/prettier'],

	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},

	{
		files: ['**/*.svelte'],

		languageOptions: {
			parserOptions: {
				parser: tseslint.parser
			}
		}
	},

	{
		files: ['**/*.svelte', '**/*.ts'],

		rules: {
			// TypeScript gère déjà ça mieux que ESLint
			'no-undef': 'off'
		}
	},

	{
		rules: {
			// Autorise les variables inutilisées préfixées par _
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_'
				}
			],

			// Autorise uniquement console.warn/error
			'no-console': [
				'error',
				{
					allow: ['warn', 'error']
				}
			],

			// Autorise new RegExp("\\t")
			'no-control-regex': 'off',

			// Pas besoin de key dans chaque block each
			'svelte/require-each-key': 'off'
		}
	},

	{
		ignores: ['build/', '.svelte-kit/', 'dist/']
	}
]);
