# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Commit

Before committing your code, run the following command in the terminal to format it:

```bash
pnpm run format
pnpm prettier --write ./src
```

## Using fullstacksjs/eslint-config

```bash
pnpm eslint .
pnpm eslint . --fix
```

## Static Check

Run TypeScript Type check

```bash
pnpm run type-check
```

Run Act-Cli with github-Cli

```bash
gh extension install https://github.com/nektos/gh-act
gh act pull_request
```
