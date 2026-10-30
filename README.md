# React.me @polpenaloza

## Setup

Requirements: [Node.js](https://nodejs.org/en/download/) v20 or newer and
[pnpm](https://pnpm.io/) v10.

Install dependencies from the repository root:

```sh
pnpm install
```

## Develop

Run either static React site from the repository root:

```sh
pnpm dev:me
pnpm dev:cv
```

## Build

Build both sites:

```sh
pnpm build
```

### Common Run Errors

If Git reports that the Husky commit hook is not executable, run:

```sh
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
```
