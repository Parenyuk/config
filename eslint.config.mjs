import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import unusedImports from 'eslint-plugin-unused-imports';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
      'no-unused-vars': [
        'warn',
        {
          args: 'after-used',
        },
      ],
      'prefer-const': 'warn',
      'jsx-quotes': ['error', 'prefer-double'],
      'no-var': 'error',
      'object-shorthand': 'warn',
      'prefer-object-spread': 'error',
      'no-array-constructor': 'error',
      'prefer-destructuring': 'warn',
      'prefer-template': 'error',
      'template-curly-spacing': 'error',
      'wrap-iife': ['error', 'outside'],
      'no-loop-func': 'error',
      'prefer-rest-params': 'error',
      'space-before-blocks': 'error',
      'prefer-spread': 'error',
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],
      'prefer-arrow-callback': 'warn',
      'arrow-spacing': [
        'error',
        {
          before: true,
          after: true,
        },
      ],
      'no-duplicate-imports': 'error',
      'generator-star-spacing': [
        'error',
        {
          before: false,
          after: true,
        },
      ],
      'dot-notation': 'warn',
      'one-var': ['error', 'never'],
      'no-case-declarations': 'error',
      'no-nested-ternary': 'error',
      'no-unneeded-ternary': [
        'error',
        {
          defaultAssignment: false,
        },
      ],
      'no-mixed-operators': 'error',
      'nonblock-statement-body-position': ['error', 'beside'],
      'brace-style': 'error',
      'no-else-return': 'error',
      indent: [
        'error',
        2,
        {
          VariableDeclarator: 1,
          SwitchCase: 1,
        },
      ],
      'space-infix-ops': 'error',
      'eol-last': 'error',
      'no-whitespace-before-property': 'error',
      'padded-blocks': ['error', 'never'],
      'no-multiple-empty-lines': 'error',
      'space-in-parens': ['error', 'never'],
      'array-bracket-spacing': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'key-spacing': [
        'error',
        {
          beforeColon: false,
        },
      ],
      'no-trailing-spaces': 'error',
      'comma-style': ['error', 'last'],
      'comma-dangle': ['error', 'only-multiline'],
      'no-new-wrappers': 'error',
      'react/no-unescaped-entities': 'off',
      'id-length': [
        'warn',
        {
          exceptions: ['e', '_', 't'],
        },
      ],
      'new-cap': [
        'error',
        {
          capIsNew: false,
        },
      ],
      camelcase: [
        'warn',
        {
          properties: 'never',
          ignoreDestructuring: true,
          ignoreGlobals: true,
          ignoreImports: true,
        },
      ],
      'import/no-unresolved': [
        0,
        {
          commonjs: true,
          amd: true,
        },
      ],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
          warnOnUnassignedImports: true,
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
];

export default eslintConfig;
