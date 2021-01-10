<<<<<<< HEAD
<!--{"title": "Welcome", "main": true}-->

# rex

[![build](https://github.com/tool3/rex/workflows/build/badge.svg?branch=master)](https://github.com/tool3/rex/actions?query=workflow%3Abuild) [![](https://img.shields.io/static/v1?label=created%20with%20rex&message=%F0%9F%A6%96&color=1e1e1e)](https://drex.netlify.app)

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
=======
<!--{ "title": "shellfie", "main": true }-->
# shellfie🤳🏽
>>>>>>> db766f3... chore: shellfie docs

beautiful progremattic terminal screenshots
# install
```bash
yarn add shellfie
```
<<<<<<< HEAD

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
=======
# any way you want them
you can require `shellfie` as a library, use the `shellfie-cli`, or even make `POST` calls to the shellfie service - `shellfied`, allowing you to get your shellfies any way you want 'em.   
- [shellfie](https://github.com/tool3/shellfie)   
- [shellfie-cli](https://github.com/tool3/shellfie-cli)   
- [shellfied](https://github.com/tool3/shellfied)   

<!--{ "title": "usage" }-->
# usage
```js
const data = [
    '\x1b[105mSHELLFIE\\x1b[0m🤳',
    '\x1b[38;5;225mthe easiest way',
    '\x1b[38;5;213mto create beautiful',
    '\x1b[38;5;14mCLI screenshots 📸',
    '\x1b[38;5;199mprogrammatically 🚀'
];
const options = {
    name: 'shellfie',
    style: {
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Fira Code'
    },
    viewport: {
        width: 400,
        height: 300
    }
}
await shellfie(data, options);
>>>>>>> db766f3... chore: shellfie docs
```

outputs:   
![](https://github.com/tool3/shellfie/blob/master/shellfies/shellfie.png?raw=true)

<!--{ "title": "data" }-->
# data
**type**: `string[]` || `string`   
**description**: string data to output to the terminal
<!--{ "title": "options" }-->
# options
**type**: `object`   
**description**: optional config for `shellfie`
### `name`
**type**: `string`   
**description**: name of image   
### `location`
**type**: `string`   
**description**: relative path to save your shellfies   
### `puppeteerArgs`
**type**: `string[]`   
**description**: optional puppteer args    
**default**: `['--no-sandbox', '--disable-setuid-sandbox']`
### `mode`
**type**: `string`   
**description**: can allow raw string input. for example: `yarn test --colors > help.txt`, then copy the text and provide it to `shellfie` with this option set to `raw`.   
**default**: `default`
### `theme`
**type**: `object`   
**description**: optional theme style
- #### `background`
  **type**: `string`   
  **description**: css color for terminal background   
  **default**: `{ background: '#151515' }`
- #### `forground`
  **type**: `string`   
  **description**: css color for any unformatted string provided in `data`
### `style`
  **type**: `object`   
  **description**: css properties for terminal output
- #### `fontSize`
  **type**: `number`   
  **description**: font size
- #### `fontWeight`
  **type**: `string`   
  **description**: font weight
- #### `fontFamily`
  **type**: `string`   
  **description**: font family
### `viewport`
**type**: `object`   
**description**: viewport of terminal   
**default**: `{ width: 700, height: 600 }`
- #### `width`
  **type**: `number`   
  **description**: viewport width
- #### `height`
  **type**: `number`   
  **description**: viewport height
<!--{ "title": "examples" }-->
  # examples
  ```js
  await shellfie(["\x1b[32mGreen line", "\x1b[31;1mRED bold"], { name: 'small', viewport: { width: 200, height: 200 } });
  ```   
![](https://github.com/tool3/shellfie/blob/master/shellfies/small.png?raw=true)    


```js
const testResults = [
    "[2K[1G[1myarn run v1.22.5[22m",
    "[2K[1G[2m$ mocha --no-timeouts tests/ --colors[22m",
    "",
    "[0m[0m",
    "[0m  shellfie[0m",
    "  [32m  ✓[0m[90m should support array of string and output a png file[0m[31m (1106ms)[0m",
    "  [32m  ✓[0m[90m should show into img[0m[31m (983ms)[0m",
    "  [32m  ✓[0m[90m should support custom viewport[0m[31m (982ms)[0m",
    "  [32m  ✓[0m[90m should support long raw output[0m[31m (2287ms)[0m",
    "  [32m  ✓[0m[90m should support raw string[0m[31m (1087ms)[0m",
    "  [32m  ✓[0m[90m should support complex string[0m[31m (1079ms)[0m",
    "  [32m  ✓[0m[90m should support different font family[0m[31m (5541ms)[0m",
    "  [32m  ✓[0m[90m should support chartscii fancy example[0m[31m (1123ms)[0m",
    "  [32m  ✓[0m[90m should support fancy unsplitted[0m[31m (1082ms)[0m",
    "  [32m  ✓[0m[90m should support string output[0m[31m (947ms)[0m",
    "  [32m  ✓[0m[90m should magically work with magic numbers[0m[31m (1945ms)[0m",
    "  [32m  ✓[0m[90m should work with lolcat[0m[31m (1102ms)[0m",
    "",
    "",
    "[92m [0m[32m 12 passing[0m[90m (19s)[0m",
    "",
    "[2K[1GDone in 19.60s.",
];
await shellfie(testResults, { name: 'fira', style: { fontFamily: 'Fira Code', fontWeight: 'bold' } });
```   
![](https://github.com/tool3/shellfie/blob/master/shellfies/fira.png?raw=true)   
