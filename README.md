# React.me @polpenaloza

## Setup

### Dependencies

- [node](https://nodejs.org/en/download/) v20x
- [nvm](https://github.com/nvm-sh/nvm/tree/master) v0.38.x
- [pnpm](https://pnpm.io/) v8.x
- [turborepo](https://turbo.build/) v1.x

### Pre-Requisites

- install pnpm <https://pnpm.io/installation>

### Command lines

```sh
pnpm install
```

## How to run

- At the root the app, find the `env.sample`.
- Copy the file [env.sample](./.env.sample) and rename that copy to `.env`
- Add your own env vars there

### Develop

To develop on the app

```sh
pnpm dev:me
```

### Build

To build the app

```sh
pnpm build:me
```

### Update Dependencies

To update the package dependencies

```sh
pnpm update --interactive
```

### Common Run Errors

If you get an error like this:

```sh
hint: The '.husky/commit-msg' hook was ignored because it's not set as executable.
```

You can fix it by running:

```sh
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
```
