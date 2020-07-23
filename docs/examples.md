---
title: Examples 
--- 



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

## conditional colors example

<img width="1000" src="https://tool3.github.io/chartscii/img/conditional_colors.svg" />

```js
const Chartscii = require("../index");

const createAsciiCharts = () => {
  // generate random chart data
  const data = [];
  let count = 0;

  for (let i = 1; i <= 20; i++) {
    const value = Math.floor(Math.random() * 1000) + 1;
    data.push({
      value,
      label: `label ${count++}`,
      color: value > 200 ? "green" : "red",
    });
  }

  // create chart
  const chart = new Chartscii(data, {
    label: "Conditional Colors",
    color: "green",
    width: 500,
    sort: false,
    reverse: false,
    char: "■",
    colorLabels: true,
    percentage: true,
    labels: true,
  });

  //print chart
  process.stdout.write("\x1Bc");
  process.stdout.write(`${chart.create()}\n`);
};

setInterval(() => createAsciiCharts(), 500);
```

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

## percentage example

using percentage, solid color with label colors

<img width="1000" src="https://tool3.github.io/chartscii/img/percentage.svg" />

```js
const Chartscii = require('chartscii');


const createAsciiCharts = () => {
    // generate random chart data
    const data = [];
    let count = 0;
    for (let i = 1; i <= 20; i++) {

        data.push({ value: Math.floor(Math.random() * 1000) + 1, label: `${count++}` });
    }

    // create chart
    const chart = new Chartscii(data, {
        label: 'Example Chart',
        width: 500,
        sort: true,
        reverse: true,
        color: colors[Math.floor(Math.random() * colors.length)];
        colorLabels: true,
        percentage: true
    });

    //print chart
    process.stdout.write('\033c');
    process.stdout.write(`${chart.create()}\n`);

};


setInterval(() => createAsciiCharts(), 500);
```

## waka time example

if you are using waka-time, then use this example to see your last 7 days coding stats with `chartscii`!

```js
const Chartscii = require("chartscii");

const waka =
  "your api call to get last 7 days waka stats: https://wakatime.com/developers/#stats";
const { languages } = waka.data;

const data = languages.map((lang) => {
  return { value: lang.total_seconds * 60, label: lang.name };
});

const chart = new Chartscii(data, {
  label: "Weekly Coding Stats",
  width: 65,
  sort: true,
  percentage: true,
  fill: "░",
  char: "█",
});

//print chart
console.log(chart.create());
```

outputs:

```text
Weekly Coding Stats
JavaScript (68.3%) ╢████████████████████████████████████████████
  Markdown (11.8%) ╢████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 TypeScript (5.7%) ╢████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
       HTML (5.3%) ╢███░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
       YAML (4.7%) ╢███░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
       Bash (3.3%) ╢██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
       JSON (0.8%) ╢█░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                   ╚════════════════════════════════════════════
```

or naked and no title:

```js
const chart = new Chartscii(data, {
  width: 65,
  sort: true,
  reverse: true,
  naked: true,
  fill: "░",
  char: "█",
  percentage: true,
});
```

```text
JavaScript (68.3%)  ████████████████████████████████████████████
  Markdown (11.8%)  ████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 TypeScript (5.7%)  ████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
       HTML (5.3%)  ███░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
       YAML (4.7%)  ███░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
       Bash (3.3%)  ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
       JSON (0.8%)  █░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
```
 