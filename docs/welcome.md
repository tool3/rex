---
title: Welcome 
--- 

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

 