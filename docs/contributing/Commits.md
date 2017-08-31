# Commits

We are adopting precise rules over how our git commit messages can be formatted.  This leads to **more readable messages** that are easy to follow when looking through the **project history**.

The commit message formatting can be added using a typical git workflow or through the use of a CLI wizard ([Commitizen](https://github.com/commitizen/cz-cli)).

Setting up and using the commit wizard globally is just a case of running the following.

```bash
yarn global add commitizen # Because all the cool kids use yarn
npm install -g cz-conventional-changelog # Because sometimes we forget 😕
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc

git cz # Create a commit using the wizard.
git cz --retry # If the previous commit fails.
```

Full documentation of this setup can be found on the [Commitzen GitHub](https://github.com/commitizen/).

An alternative is to use the wizard without installing `commitizen` globally simply use `npm run cz` in your terminal after staging your changes in git. Retries can be triggered using `npm run cz -- --retry`.

If you are using VScode you can install [vscode-commitizen](https://marketplace.visualstudio.com/items?itemName=KnisterPeter.vscode-commitizen) and follow the instructions outlined there.