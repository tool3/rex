---
title: shellfie 
--- 
 🤳🏽

beautiful progremattic terminal screenshots
# install
```bash
yarn add shellfie
```

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
```

outputs:   
![](/img/shellfie.png)


 