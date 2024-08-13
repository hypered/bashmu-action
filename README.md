# Pulpo

A GitHub action to implement something like

    cache + queued-build-hook + nix-eval-jobs / mini hydra

... well, this is mostly a starting point to learn how to write a GitHub
action.

## Example usage

```yaml
uses: hypered/bashmu-action
with:
  who-to-greet: 'Mona the Octocat'
```

## Development

```
$ npm install @actions/core
$ npm install @actions/github
```

```
$ npm install @vercel/ncc
$ node_modules/.bin/ncc build src/main.js
```

The actual action is `dist/index.js`.

## Release

```
git tag -a -m "bashmu-action v0.0" v0.0
```
