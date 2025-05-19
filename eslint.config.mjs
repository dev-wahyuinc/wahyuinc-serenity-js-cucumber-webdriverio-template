import pluginJs from '@eslint/js';
import markdown from '@eslint/markdown';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { ignores: ['./eslint.config.mjs', '*.md', 'target/'] },
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...markdown.configs.recommended,
    eslintConfigPrettier,
    {
        plugins: {
            jsdoc,
            simpleImportSort,
            unusedImports,
            unicorn,
            importPlugin,
        },
        rules: {
            'simpleImportSort/imports': 'error',
            'simpleImportSort/exports': 'error',
            'unusedImports/no-unused-imports': 'error',
            'sort-imports': 'off',
            'import/order': 'off',

            'no-multiple-empty-lines': [
                'warn',
                {
                    max: 1,
                },
            ],
            '@/quotes': [
                'error',
                'single',
                {
                    allowTemplateLiterals: true,
                    avoidEscape: true,
                },
            ],
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            indent: 'off',
            '@/indent': [
                'error',
                4,
                {
                    MemberExpression: 'off',
                    SwitchCase: 1,
                },
            ],
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    args: 'none',
                    vars: 'all',
                    varsIgnorePattern: '^.*_$',
                },
            ],
            'unicorn/empty-brace-spaces': 'off',

            'unicorn/filename-case': [
                'error',
                {
                    cases: {
                        kebabCase: true,
                        pascalCase: true,
                        camelCase: true,
                    },
                },
            ],

            'unicorn/no-array-for-each': 'off',
            'unicorn/no-array-reduce': 'off',
            'unicorn/no-array-callback-reference': 'off',
            'unicorn/no-static-only-class': 'off',
            'unicorn/numeric-separators-style': 'off',
            'unicorn/prefer-module': 'off',
            'unicorn/prefer-node-protocol': 'off',
            'unicorn/prefer-spread': 'off',

            'unicorn/prevent-abbreviations': [
                'error',
                {
                    allowList: {
                        conf: true,
                        wdio: true,
                    },
                },
            ],
            'jsdoc/require-description': 'error',
            'jsdoc/check-values': 'error',
        },
    },
    {
        files: ['**/*.spec.ts'], // Berlaku hanya untuk file yang cocok dengan pola ini
        rules: {
            'unicorn/filename-case': 'off', // Matikan aturan filename-case
        },
    },
    {
        files: ['**/*.md'],
        plugins: {
            markdown: markdown,
            // Anda mungkin tidak memerlukan plugin JS/TS lainnya di sini
        },
        processor: 'markdown/markdown', // Jika @eslint/markdown menyediakan prosesor
        rules: {
            'no-irregular-whitespace': 'off', // Nonaktifkan aturan ini untuk Markdown
            // Anda mungkin ingin menambahkan aturan linting spesifik Markdown lainnya di sini
        },
    },
];
