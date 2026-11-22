# Rules vs Policies

Building decision logic? Always ask the user whether to use concrete rules or abstract principles.

## Install

Run from this directory.

```sh
claude plugin marketplace add .
claude plugin install rules-vs-policies@rules-vs-policies

codex plugin marketplace add .
codex plugin add rules-vs-policies@rules-vs-policies

cursor-agent --plugin-dir .

agy plugin install .
```

- OpenCode 2. Add this directory's absolute path to `plugins` in `opencode.json`.
- OpenCode 1.18.29+. Add the absolute path to `index.js` to `plugin` in `opencode.json`.
