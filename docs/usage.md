---
title: usage 
--- 

`chartscii` accepts an array of data objects, with optional labels, and outputs an ascii bar chart.   

# example
```js
const Chartscii = require('chartscii');


// generate random chart data
const data = [];

for (let i = 1; i <= 20; i++) {
    data.push(Math.floor(Math.random() * 1000) + 1);
}

// create chart
const chart = new Chartscii(data, {
    label: 'Example Chart',
    width: 500,
    sort: true,
    reverse: true,
    color: 'pink'
});

//print chart
console.log(chart.create());
```

outputs:
![](https://tool3.github.io/chartscii/img/example.png)

you can customize the acsii character for the bar chart using the `char` option. for example:   
```js
const chart = new Chartscii(data, {
    label: 'Example Chart',
    width: 500,
    char: '■',
    sort: true,
    reverse: true,
    color: 'green'
});

console.log(chart.create());
```

outputs:   
![](https://tool3.github.io/chartscii/img/example_char.png)

## typescript usage example
example usage in typescript:   
```ts
import Chartscii, {ChartData} from 'chartscii';

const data: Array<ChartData> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chart: Chartscii = new Chartscii(data, { naked: true });
console.log(chart.create());
```
 