<!--{ "title": "Welcome", "category": "About" }-->

# d.rex

docusaurus based README docs generator.  
seperate your readme to different pages using `<!-- {json metadata} -->`.  
see this README in edit mode.

# use JSON

use HTML comments with json to structure your doces.  
For example:
`<!-- { "title": "d.rex", "category": "About" } -->` will generate a doc with title d.rex and a new sidebar dropdown will be created with the name About.

<!--{ "title": "Run", "category": "Getting Started" }-->

# Getting started

The easiest way to get started with `d.rex` is to clone the repo, and copy your README file to the root directory.
Once done, run the `create.js` file:

```bash
node create.js
```

The steps performed in `create.js` include:

- create documents in the `docs/` directory from your README.
- map category to documents.
- update `sidebars.js` with the doc to category mapping.

:::danger
Running `create.js` will replace all of the content in the `docs/` directory,  
as well as blindly override the `sidebars.js` file.
:::
