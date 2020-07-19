---
title: Intro 
--- 

# Examples

## intro example

intro example, using no labels (value of bar is the default label)

<img width="1000" src="https://tool3.github.io/chartscii/img/example.svg" />

```js
const Chartscii = require("chartscii");

const createAsciiCharts = () => {
  let color = "";

  const colors = ["green", "red", "cyan", "pink", "blue", "yellow"];

  // generate random chart data
  const data = [];

  for (let i = 1; i <= 20; i++) {
    color = colors[Math.floor(Math.random() * colors.length)];
    data.push(Math.floor(Math.random() * 1000) + 1);
  }

  // create chart
  const chart = new Chartscii(data, {
    label: "Example Chart",
    width: 500,
    sort: true,
    reverse: true,
    color,
  });

  //print chart
  process.stdout.write("\033c");
  process.stdout.write(`${chart.create()}\n`);
};

setInterval(() => createAsciiCharts(), 500);
```

 