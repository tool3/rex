---
title: options  
--- 

## data options
`chartscii` accepts data in objects or simply an array of numeric values
```js
[{ value: 2, label: 'some_label' }, { value: 2, label: 'some_label' }] 
```

```js
[3, 34, 45]
```

### label (string)
a label for the data point   
display in color if `color: true`  
displays a unique color if provided in data array. (e.g `{ value: 3, color: 'red' }`)

### value (number)
a value for the bar chart

### color (string)
a color to paint the bar, and label if `colorLabel: true`   
color should correspond to the [supported colors](#supported-colors)

## chart options

### label (string)
a label for the chart. display in color if `color: true`   

### width (number)
the width of the chart, scales values accordingly   
default: `100`

### sort (boolean)
sort data   
default: `false`

### reverse (boolean)
reverse chart values order   
default: `false`

### char (string)
ascii char for bars   
default: `█`

### fill (string)
fill chart with ascii character.   
no default.   
recommended: `░`

### color (string)
color bars in chart and label if provided.     
see [supported colors](#supported-colors)

### percentage (boolean)
show percentage of each bar, using the highest value in the provided data array   
default `false`

### colorLabels (boolean)
color labels as well   
default `false`

### naked (boolean)
don't print chart ascii structure
default `false`

## supported colors
these are the currently supported colors for `chartscii`, provided as string in the data object (e.g `{ value: 3, color: 'green' }`)
 - green
 - red
 - pink
 - cyan
 - blue
 - yellow

 > NOTE: you can also provide a string formatted color: '\x1b[32;1m'
 > see: https://misc.flogisoft.com/bash/tip_colors_and_formatting
 