---
title: Run 
--- 



The easiest way to get started with `rex` is to clone the repo, and copy your README file to the root directory.
Once done, run the `create.js` file:

```bash
node create.js
```

The steps performed in `create.js` include:

- create documents in the `docs/` directory from your README.
- map category to documents.
- update `sidebars.js` with the doc to category mapping.
- update `docusaurus.config.js` with the main docs page (defaults to the first page).

<!--
:::danger
Running `create.js` will replace all of the content in the `docs/` directory,
as well as blindly override the `sidebars.js` file.
:::

-->

 