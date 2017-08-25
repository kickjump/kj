<p align="center">
  <a href="https://github.com/kickjump/kj"><img width="500" src="./assets/logo.png"></a>
</p>

<p align="center">
  A beautiful starter for universal applications.
</p>

<p align="center">
  <a href="http://travis-ci.org/kickjump/kj"><img src="https://secure.travis-ci.org/kickjump/kj.svg?branch=master" alt="Build Status"></a>
</p>

**kj** is a starter kit for your next universal application. By universal we mean, it provides a core structure for an application that can run in the following environments.

- Web (with Server Side Rendering)
- iOS
- Android
- Windows Desktop
- Mac OS
- Linux Desktop
- Browser Extension (Chrome, Firefox and Safari)
- GraphQL API Server

<br>

### Getting Started

To get started, run:

```bash
npm install --global @kj/cli
```

or with `yarn`:

```bash
yarn global add @kj/cli
```

We can now run:

```bash
kj init universal
cd universal
kj start ios # For running iOS.
kj start android # For running Android
kj start desktop # For running the desktop app
```

### Structure

The `init` command has created a project with this structure.

```bash
root
├─ @<app>
│  ├─ mobile
│  ├─ server
│  ├─ web
│  ├─ desktop
│  ├─ extensions
│  └─ common
├─ package.json
├─ README.md
├─ lerna.json
├─ .gitignore
└─ yarn.lock
```