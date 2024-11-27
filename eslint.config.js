import prettier from 'eslint-config-prettier';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import ts from 'typescript-eslint';

export default ts.config(
	js.configs.recommended,
	...ts.configs.recommended,
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
				parser: ts.parser
			}
		}
	},
	{
		files: ['*.svelte', '*.ts'],
		rules: {
			// https://typescript-eslint.io/troubleshooting/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
			// typescript-eslint recommend that you do not use the no-undef lint rule on TypeScript projects.
			// The checks it provides are already provided by TypeScript without the need for configuration
			// TypeScript just does this significantly better.
			'no-undef': 'off'
		}
	},
	{
		rules: {
			// https://stackoverflow.com/a/64067915/11320442
			// allows unused variable if they start with _
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_'
				}
			],
			// https://eslint.org/docs/latest/rules/no-console
			// disallows the use of console.info() and console.log()
			'no-console': [
				'error',
				{
					allow: ['warn', 'error']
				}
			],
			// https://eslint.org/docs/latest/rules/no-control-regex
			// allows to write new RegExp("\t") which is normally only possible with /\t/
			'no-control-regex': 0
		}
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/']
	}
);
