---
title: Fancy 
--- 

## fancy example

fancy example, using labels with colors

<img width="1000" src="https://tool3.github.io/chartscii/img/fancy.svg" />

```js
const Chartscii = require('chartscii');


const createAsciiCharts = () => {
    let color = '';

    const colors = ['green',
        'red',
        'cyan',
        'pink',
        'blue',
        'yellow'
    ];

    // generate random chart data
    const data = [];

    for (let i = 1; i <= 20; i++) {
        color = colors[Math.floor(Math.random() * colors.length)];
        data.push({ value: Math.floor(Math.random() * 1000) + 1, color });
    }

    // create chart
    const chart = new Chartscii(data, {
        label: 'Example Chart',
        width: 500,
        sort: true,
        reverse: true,
        colorLabels: true
        color: color
    });

    //print chart
    process.stdout.write('\033c');
    process.stdout.write(`${chart.create()}\n`);

};


setInterval(() => createAsciiCharts(), 500);
```

 