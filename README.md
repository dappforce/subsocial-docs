# Subsocial docs

### Prerequisites

You need to have installed:
- [NodeJS](https://nodejs.org/uk/download/) >= 14.x
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)

And then run:

```
$ yarn
```

This command fetches all required dependencies for this project.

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### CI/CD

Some useful notes:
- By default, CI [configured to deploy](.github/workflows/delpoy.yml) to dappforce/dappforce.github.io.
- You have to [create the deployment key](https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-create-ssh-deploy-key) to be able to deploy to external repository.
- Public SSH key should be set up in the base deploy repository (in settings "Deploy keys" tab).
- Private SSH key should be set up in this exact repository (in settings "Secrets" tab).
