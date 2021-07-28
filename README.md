<!--{"title": "Welcome", "main": true}-->

# rex

[![](https://img.shields.io/static/v1?label=created%20with%20rex&message=%F0%9F%A6%96&color=1e1e1e)](https://drex.netlify.app)   

docusaurus based README docs generator.  
seperate your readme to different pages using `<!-- {json metadata} -->`.  
see this README in [edit](https://github.com/tool3/rex/edit/master/README.md) mode.

# automagic

rex can create the doc site without any manual editing of the `README` file.  
it defaults to a page per main header (e.g 1 `#`), 
without any grouping in the docs sidebar (flat).

# use JSON

use HTML comments with json to structure your doces.  
For example:
`<!-- { "title": "rex", "category": "About", "main": true } -->` will generate a doc with title rex and a new sidebar dropdown will be created with the name About.

> Note that when you write this in your `.md` files be sure to have no space between the `<!--` and `{` (same is true for `}` and `-->`)

<!--{"title": "Run", "category": "Getting Started"}-->

# Run

The easiest way to get started with `rex` is to clone the repo, and copy your `README` file to the root directory.
Once done, run the `create.js` file:

```bash
npm run create
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

<!--{"title": "Post Actions", "category": "Getting Started"}-->

# Post Actions

after running the `create.js` file, new docs will now be located under the `docs` directory.  
here are some steps to consider after running `create`:

- update logos and title in `docusaurus.config.js` file
- update theme color `--ifm-color-primary` in `./src/css/custom.css`
- add a rex badge to show your support: `[![](https://img.shields.io/static/v1?label=created%20with%20rex&message=%F0%9F%A6%96&color=1e1e1e)](https://drex.netlify.app)`
<!--{"title": "Options", "category": "Getting Started"}-->

# Options

the options you can supply `rex` are as follows:

### title

this will become the document title

### category

this will group together documents in the docs sidebar

### main

set this only once - the main docs page.  
defaults to the first page

for example:

```json
{ "title": "Welcome", "main": true }
```

will create the default page for the `Docs` tab.
