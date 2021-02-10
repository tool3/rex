---
title: options 
--- 

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
 #### `background`
  **type**: `string`   
  **description**: css color for terminal background   
  **default**: `{ background: '#151515' }`
 #### `forground`
  **type**: `string`   
  **description**: css color for any unformatted string provided in `data`
### `style`
  **type**: `object`   
  **description**: css properties for terminal output
 #### `fontSize`
 **type**: `number`   
 **description**: font size
 #### `fontWeight`
 **type**: `string`   
 **description**: font weight
 #### `fontFamily`
  **type**: `string`   
  **description**: font family
### `viewport`
**type**: `object`   
**description**: viewport of terminal   
**default**: `{ width: 700, height: 600 }`
 #### `width`
 **type**: `number`   
 **description**: viewport width
 #### `height`
  **type**: `number`   
  **description**: viewport height
 