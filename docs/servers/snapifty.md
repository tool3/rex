---
title: snapifyd
---

# snapifyd

[shellfie](https://github.com/tool3/shellfie) as a service.   
create beautiful terminal images from string input.   
![](https://github.com/tool3/shellfied/blob/master/lolcat.png?raw=true)

# API


## `/json`
- method: `POST`
- content-type: `application/json`

### body
#### `data`
**type**: `string` || `string[]`   
**description**: json does not support any escape code so you will have to escape them all.   
#### `style`
**type**: `object`   
**description**: the style object can be used to optionally format the terminal output.   
the available css properties are:
- `fontSize`: `number`
- `fontWeight`: `string`
- `fontFamily`: `string`

#### `theme`
**type**: `object`   
**description**: the theme object can be used to change color and background of the terminal.   
the available css properties are:   
- `background`: `string`
- `foreground`: `string`

> NOTE: any member of the `data` array which won't have its own formatting codes will be applied the color from the `foreground` property.

### example
request:
```json
{
    "style": {
        "fontSize": 15,
        "fontWeight": "bold",
        "fontFamily": "Fira Code"
    },
    "data": [
        "\\x1b[105mSHELLFIE\\x1b[0m🤳",
        "\\x1b[38;5;225mthe easiest way",
        "\\x1b[38;5;213mto create beautiful",
        "\\x1b[38;5;14mCLI screenshots 📸",
        "\\x1b[38;5;199mprogrammatically 🚀"
    ],
    "theme": {
        "background": "#1e1e1e"
    }
}
```

response:   
![](https://github.com/tool3/shellfie/blob/master/shellfies/shellfie.png?raw=true)

## `/text`
- method: `POST`
- content-type: `text/plain` || `application/text`

### body
raw text output with ANSI codes, for example:   

### example
`yarn test --colors > example.txt`

request:
```text
[2K[1G[1myarn run v1.22.5[22m
[2K[1G[2m$ mocha --no-timeouts tests/ --colors[22m

[0m[0m
[0m  shellfie[0m
  [32m  ✓[0m[90m should support array of string and output a png file[0m[31m (1246ms)[0m
  [32m  ✓[0m[90m should support complex string[0m[31m (1079ms)[0m
  [32m  ✓[0m[90m should support different font family[0m[31m (5415ms)[0m
  [32m  ✓[0m[90m should support chartscii fancy example[0m[31m (1102ms)[0m
  [32m  ✓[0m[90m should support string output[0m[31m (1080ms)[0m
  [32m  ✓[0m[90m should support string output[0m[31m (1015ms)[0m
  [32m  ✓[0m[90m should magically work with magic numbers[0m[31m (2086ms)[0m
  [32m  ✓[0m[90m should work with lolcat[0m[31m (1028ms)[0m


[92m [0m[32m 8 passing[0m[90m (14s)[0m

[2K[1GDone in 15.40s.
```

response:
![](https://github.com/tool3/shellfied/blob/master/test.png?raw=true)