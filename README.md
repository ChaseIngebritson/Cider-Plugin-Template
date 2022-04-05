# Cider Plugin Template

This is a [Cider Music](https://github.com/ciderapp/Cider) plugin template designed to streamline the plugin creation process while using Typescript. The template attempts to adhere to the [Cider Music v2 plugin schema](https://github.com/ciderapp/plugin-schema-poc/tree/main/v2_plugin).

## Building

This template utilizes [rollup.js](https://rollupjs.org/guide/en/) to compile the Typescript and package all required files.

### Installation

```bash
yarn
```

### Development

Running in development mode will allow hot reloading on the build.

```bash
yarn start
```

### Production

```bash
yarn build
```

### Deployment

**IMPORTANT NOTE BEFORE USING THE DEPLOY FUNCTION:**

The Cider plugin system requires the plugin deployment files to be contained the in the `main` branch. As such, the deploy function will create a commit on the `main` branch with the production files.

I would highly recommend using a seperately named branch, such as `dev-main` or something similar, to do development on.

```bash
yarn deploy
```

## Resources

* [Cider Music Plugin Schema](https://github.com/ciderapp/plugin-schema-poc)
* [Apple Music API](https://developer.apple.com/documentation/applemusicapi)
* [rollup.js](https://rollupjs.org/guide/en/)
