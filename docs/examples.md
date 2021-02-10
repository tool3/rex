---
title: examples 
--- 
  
  ```js
  await shellfie(["\x1b[32mGreen line", "\x1b[31;1mRED bold"], { name: 'small', viewport: { width: 200, height: 200 } });
  ```   
![](/img/small.png)    


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
![](/img/fira.png)   
 