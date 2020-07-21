<!--{ "title": "Welcome", "category": "About" }-->

# rex

[![](https://img.shields.io/static/v1?label=created%20with%20rex&message=%F0%9F%A6%96&color=green)](https://tool3.github.io/rex)

docusaurus based README docs generator.  
seperate your readme to different pages using `<!-- {json metadata} -->`.  
see this README in edit mode.

# use JSON

use HTML comments with json to structure your doces.  
For example:
`<!-- { "title": "rex", "category": "About" } -->` will generate a doc with title rex and a new sidebar dropdown will be created with the name About.

<!--{ "title": "Run", "category": "Getting Started" }-->

# Getting started

The easiest way to get started with `rex` is to clone the repo, and copy your README file to the root directory.
Once done, run the `create.js` file:

```bash
node create.js
```

The steps performed in `create.js` include:

- create documents in the `docs/` directory from your README.
- map category to documents.
- update `sidebars.js` with the doc to category mapping.

<!--
:::danger
Running `create.js` will replace all of the content in the `docs/` directory,
as well as blindly override the `sidebars.js` file.
:::

-->

<!--{ "title": "Post Actions", "category": "Getting Started" }-->

# Post Actions

after running the `create.js` file, new docs will now be located under the `docs` directory.  
here are some steps to consider after running `create`:

- update logos and title in `docusaurus.config.js` file
- update the `homePageId` in `docusaurus.config.js` under `plugins -> @docusaurus/preset-classic -> docs`;
