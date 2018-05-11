This is the repo for the Business View refresh frontend application , component styleguide (pattern library), and project documentation.

## Getting Started

Make sure you have all the necessary [prerequisites](#prerequisites). They are common and you may already have them installed, or you may just need to upgrade your version of some of them.

Enter the following commands to start to get started working quickly.

```
git clone ssh://heartland-vsts@vs-ssh.visualstudio.com:22/DefaultCollection/BusinessView/_ssh/business-view-frontend
cd business-view-frontend
yarn install
```
(Note: you should not need to use `sudo` at any point in these instructions.)

## Running the Business View app

To run the application locally, and have it open in your default browser:

```
yarn start
```

In addition to starting the app, this command also runs the following tasks:

* checks node_modules for known security vulnerabilities
* runs Eslint on JavaScript and JSX files, and continues to lint in watch mode
* runs Stylelint on SASS files, and continues to lint in watch mode
* runs tests in watch mode

This task will continue to run and watch for development changes to the app. To stop it, simply press CTRL-C, and then CTRL-C again. (You must stop the watchers and the dev server separately.)

## Running the React components styleguide

In the terminal, run the following command:

```
yarn run styleguide
```

In addition to starting the styleguide, this command also runs the following tasks:

* runs Eslint on JavaScript and JSX files, and continues to lint in watch mode
* runs Stylelint on SASS files, and continues to lint in watch mode
* runs tests in watch mode

This task will continue to run and watch for development changes to the components. To stop it, simply press CTRL-C, and then CTRL-C again. (You must stop the watchers and the styleguide server separately.)

## (MVP phase only, deprecated) Running the documentation library

To run the documentation in watch mode:

```
yarn run lib:sync
```

This will start up a local Node server so you can view changes as you make them. The site can be viewed at `http://localhost:3000`.

## (MVP phase only, deprecated) Build the documentation library for deployment


```
yarn run lib:build
```

This will compile the pattern library down to static assets in the `/build` directory. Once the pattern library is synced to the central Git repository, the server automatically deploys the `/build` directory to the server.

## Adding React Components

- Components should be added to the `components` folder in the project root.
- Always run `yarn test` and ensure all test cases pass before committing any changes.

### Generating a scaffold for a new component

You can save time by using our custom script to scaffold out a new component, and then add or change any functionality you need.

```
yarn run generate:component <hyphenated-component-name>
```

For instance, if you need a component named `<FooBar />`, you would type `yarn run generate:component foo-bar`. This will create a new component directory called `foo-bar` in the `/components` directory with the following files:

* **FooBar.jsx** - the React component itself, with a basic render() function
* **FooBar.scss** - a skelton SASS stylesheet file which will be imported into the component
* **FooBar.spec.jsx** - a basic test file for the component
* **FooBar.doc.jsx** - a basic styleguide page ready to be included in the Catalog styleguide where you choose

Note: you still have to manually add an import statement and a config block in `styleguide/src/index.jsx` so that the component shows up where you want it to in the styleguide.

You also have to import and use it any app pages, but it will already be included in the dev and built versions of the app, ready to use, by default.

The templates for the generated component files can be found in `components/_component-template`.

```
├── components
│   ├── _component-template
│   │   ├── _component.doc.jsx
│   │   ├── _component.jsx
│   │   ├── _component.scss
│   │   └── _component.spec.jsx

```

The script which does the actually template duplication and string replacement is in `helpers/componentGenerator.js`.


## Syncing to changes with Git

To sync the pattern library and any documentation make sure you run the build command first.

1. Create a new branch with `git checkout -b <ticketnumber-short description>`
1. Check the status to see which files have been changed: `git status`
1. Stage your changes using `git add <file name>` for individual files, or `git add -A` for all files.
1. Commit your staged changes `git commit -m "<commit message>"`
1. Make sure you have any recent updates from the server `git pull origin master`
1. Sync your changes to the server `git push -u origin <ticketnumber-short description>`
1. Finally, when you would like to have your branch merged with Master, create a new pull request within Gitlab and wait for another contributor to review and accept.

If the command line isn't your preference consider downloading a Git desktop application. [https://git-scm.com/downloads/guis](https://git-scm.com/downloads/guis).

## Building the Business View app for production

To build the application for production:

```
yarn run build
```

Before it builds the app, this command also runs the following tasks:

* cleans out any existing `app/dist` directory
* runs Eslint on JavaScript and JSX files
* runs Stylelint on SASS files, and continues to lint in watch mode
* runs tests

After the app successfully builds, the command then runs a lightweight server on the build directory, `app/dist`, and opens that build directory in a browser window, so that you can verify the build visually.

The distribution server will continue to run, but it does not reflect any new changes to the source files. To stop it, simply press CTRL-C.

## Building the React components styleguide for production

To build the application for production:

```
yarn run build:styleguide
```

Before it builds the styleguide, this command also runs the following tasks:

* cleans out any existing `styleguide/dist` directory

After the styleguide successfully builds, the command then runs a lightweight server on the build directory, `styleguide/dist`, and opens that build directory in a browser window, so that you can verify the build visually.

The styleguide server will continue to run, but it does not reflect any new changes to the source files. To stop it, simply press CTRL-C.

## Prerequisites<a name="prerequisites"></a>

You need a basic knowledge of using a terminal application and Git.

### Node

You need a recent version of Node 6, at least 6.9.x, or the latest Long-Term Support (LTS) release of version 6. The build server still uses Node 6, so we do not want to build something locally that cannot then be built on the build server.

Install Node from [https://nodejs.org/en/](https://nodejs.org/en/).

To manage multiple versions of Node on your local machine, use a version of NVM appropriate for your operating system.

Mac or Linux: [https://github.com/creationix/nvm](https://github.com/creationix/nvm)

Windows: [https://github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)

### Yarn

Yarn is a package manager for JavaScript libraries. It is a drop-in replacement for *npm*, the package manager included with Node, but it adds a lockfile to ensure that everyone on a large project uses the same versions of all libraries. (If you're curious, see h[ttps://yarnpkg.com/lang/en/docs/migrating-from-npm/](https://yarnpkg.com/lang/en/docs/migrating-from-npm/).)

Install Yarn from [https://yarnpkg.com/en/docs/install](https://yarnpkg.com/en/docs/install).

### Git

Install Git from [https://git-scm.com/downloads](https://git-scm.com/downloads).

### Access to the central repository

Get access to the Git code repository in Heartland’s VSTS system. You will each need to have a heartland.us email addresses for this, if you don’t already have one.

If you do not have a Heartland email address and need access to the code, contact the Global payment's project manager.

### SSH key

This is required to sync changes.

You can use one of your existing **DSA-style** SSH keys, or generate a new one. (For instructions on generating an SSH key, see [https://git-scm.com/book/en/v2/Git-on-the-Server-Generating-Your-SSH-Public-Key](https://git-scm.com/book/en/v2/Git-on-the-Server-Generating-Your-SSH-Public-Key).)

Go to [https://heartland-vsts.visualstudio.com/_details/security/keys](https://heartland-vsts.visualstudio.com/_details/security/keys) and add a key-entry with the **public** portion of your SSH key.

(**Never** share the **private** portion of your SSH key with anyone, not even your grandparents.)

### Access to the Business View code repositories

Request access to the repository by emailing one of the contributors. You have to be a member of the project before you can clone the code or sync any changes.
