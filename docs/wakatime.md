---
title: WakaTime 
--- 

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
 