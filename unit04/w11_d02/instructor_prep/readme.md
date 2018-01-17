# D3

## Learning Objectives

- Manipulate the DOM using D3
- Bind data to DOM elements
- Scales: Linear & Ordinal
- Use D3 helper methods like `min` and `max`

### What Is D3?

D3 stands for Data-Driven Documents. The word "document" in D3 refers to the DOM. Javascript can manipulate the DOM, creating and deleting pieces of it. Building data visualizations, however, with tools that are suited for GUI programming is difficult and verbose. Enter D3.

### What It's Not

D3 doesn't come with any prebuilt visualizations. D3 aims to be low-level and flexible. There are many excellent charting libraries out there, several of them built with D3. If your goal is to render a few standard charts as quickly as possible, you may want to consider using a library instead of writing D3 code by hand. Check out [highchartJS](http://www.highcharts.com/), [chartJS](http://www.chartjs.org/) or [dygraphs](http://dygraphs.com/). 

### The Possibilities Are Endless

* http://www.jasondavies.com/animated-bezier/
* http://animateddata.co.uk/lab/d3-tree/
* http://d3tetris.herokuapp.com/
* http://tributary.io/s/6094415?user=enjalot

### Best Learning Resources
[D3 Noob](https://leanpub.com/D3-Tips-and-Tricks)
[Dashing D3](https://www.dashingd3js.com/)
[ZeroViscocity](http://zeroviscosity.com/)

## Installation

All you need to do is link to a CDN and you're good to go!. D3 recently released v4 which included some major changes and will be at times incompatible with code written in v3. 

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.2.2/d3.js" charset="utf-8"></script>
```

> D3 allows you to bind arbitrary data to  the DOM and then apply data-driven transformations to the document. For example, you can use D3 to generate an HTML table from an array of numbers. Or, use the same data to create an interactive SVG bar chart with smooth transitions.

D3 is also available as an [NPM](https://www.npmjs.com/package/d3)
```javascript
var d3 = require("d3");
```

But the easiest way to start working with D3 is to use `CodePen` and just include the D3 library.

## D3..jQuery's Data Viz Cousin
It can help to think of D3 as jQuery for data visualization.  Anyone that has used jQuery knows it's the number one library for DOM manipulation.  Now D3 can do most, if not all, of what jQuery can do, but it has some built in methods specific to generating charts, graphs, and a variety of other data visualizations that you might not see on a regular basis. 

Let's take a look at the following `jQuery` code:

```javascript
  var data = [15, 25, 35, 45];
  data.forEach(function(num, index ){
    var div = $('<div>').html(num)
      .css('display',"inline-block")
      .css("margin","0 10px")
      .css("padding",'10');
    $('body').append(div);
  })
```

It's looping through an array of data and appending a series of divs.  Now looking at the way D3 accomplishes the same thing we can see some similarities.

```javascript
var data = [15, 25, 35, 45];
 data.forEach(function(num, index){
   var div = d3.select('body').append('div')
    .html(num)
      .style('display',"inline-block")
      .style("margin","0 10px")
      .style("padding",'10px');
 })
```

What's going on in the above example?

* D3 selects the body using the .select() method 
* It appends a div using the .append() method
* It adds inner html using the .html() method
* And finally adds css using the .style() method

## D3 Data Binding, Enter & Update
D3 has a more efficient methodology of, not only looping through data, but also keeping track of the state of data. First D3 `binds` to the data and creates placeholder div's using the `.data()` method.  Once that's done it passes the data to the `.enter()` method to create the div's.  After that it adds html content as part of the `Update`.  Below is a further breakdown of these steps. 

#### Data Binding

We want to be able to incorporate our dataset into these D3 methods. Rather than have to reference the `data` variable at the top of our script, we can bring it into our D3 code for quick reference later using the `.data` method...
```javascript
var body = d3.select('body').selectAll('div').data(data)
```
#### Enter `.enter`

In order for us to be able to add new "data-bound" elements to our chart, we need to use D3's `.enter` method. You'll need to use `.enter` when you have a piece(s) of data but it's not yet currently represented in the DOM. [[Documentation](https://github.com/d3/d3-selection/blob/master/README.md#selection_enter)]

```javascript
var divs = body.enter().append('div')
```

#### Update 

Now we need to tell D3 how we want to represent our data in the DOM. In this case we want to generate some HTML that looks similar to the code we had at the start. 

```javascript
divs.html(function(d) { return d })
  .style('display',"inline-block")
  .style("margin","0 10px")
  .style("padding",'10px')
```

The **`.html`** method takes one argument: a callback.

## Converting jQuery To D3 Exercise (20 minutes)
Follow the instructions in this [CodePen](http://codepen.io/jkeohan/pen/NdoqrY?editors=0010) to convert existing jQuery to D3 using D3's Data Binding. 


## D3 Shapes
D3 wasn't meant to replace jQuery and is more so focused on using `SVG's` to create shapes. `SVG` stands for ``Scalable Vector Graphics` and are used to create scalable visualizations that maintain their pixel quality when scaled up or down. `SVG` also uses a grid and positions elements based on an x & y axis. 

Here we have an example of D3 rendering a single circle
```javascript
// create an svg with a defined width\height
var svg = d3.select('body').append('svg').attr("width",200).attr("height",200)
// create single cirlce
var circle = svg.append('circle')
  .attr("cx",20 )
  .attr("cy",50)
  .attr("r", 10)
```

We can extend this using Data Binding, Enter and Update to create multiple circles.
```javascript
// create an svg with a defined width\height
var svg = d3.select('body').append('svg').attr("width",200).attr("height",200)
// DATA BIND
var circles = svg.selectAll('circle').data(data)
// Enter
circles.enter().append('circle')
  .attr("cx",function(d,i) { return i * 50 + 30 })
  .attr("cy", 50)
  .attr("r", 10)
```

Another popular shape is a rectangle which is used in bar charts. 
```javascript
var data = [10,20,30]
var svg = d3.select('body').append('svg').attr("width",400).attr("height",200)
var rects = svg.selectAll('rect').data(data)
rects.enter().append('rect')
  .attr("x",0 )
  .attr("y",function(d,i) { return i * 40 })
  .attr("width", function(d) { return d * 10 })
  .attr("height",20)
```
## A Horizonal Bar Chart 

Here's how we would go about creating a horizonal bar bar which is one of the most popular D3 charts. 

Our html will only need an inital starting div to create our svg and render the chart. 
```html 
<div class="barchart"></div>
```

Here is the data we will use for our chart. 
```javascript
var data = [
  { class: "wdi", numStudents: 23 },
  { class: "ux", numStudents: 30 },
  { class: "dsi", numStudents: 42 },
  { class: "mobile", numStudents: 8 },
  { class: "product", numStudents: 12 }
]
```

#### Creating an SVG
As we want our SVG to fit the dimensions of the parent div we can use D3 to grab the current widht\height of .barchart via the `.style()` method.  Since it returns 
```javascript
var width = d3.select('.barchart').node().clientWidth
var height = d3.select('.barchart').node().clientHeight
// append an svg to .barchart with a width and height
var svg = d3.select('.barchart').append('svg').attr("width",width).attr("height",height)

// NOTE: What other method could be used to obtain the width and height? 
```

#### Creating the Rects
As before we will use the data bind, enter, update methodology to create our rects. 
```javascript
// data bind all rects
var rects = svg.selectAll('rects').data(data)
// enter data and create individual rect's
var rect = rects.enter().append('rect')
// assign attributes to the rects (widht,height,x,y,fill)
 rect.attr("width", function(d) { return d.numStudents} )
    .attr("height", "20px")
    .attr('x',0)
    .attr('y', function(d,i) { return i * 40 } )
    .attr("fill", 'steelblue')  
```

Our chart works, but the bar widths are hard-coded to pixel values. Instead, it'd be nice if those widths were defined as percentages that correspond to the chart's domain. We can accomplish this using **scaling**.

### Scaling

For this example, we are going to display our data according to a **linear scale** and add color to our data using an **ordinal scale**

* The domain of our graph will be all numbers between and including the min and max values in our dataset
* The range will be from 0 to 100, meaning that the lowest possible data value will be represented as 0% in our graph, the highest 100%

##### Linear Scale

```js
var xScale = d3.scaleLinear()
    .domain([0,42])
    .range([0,100])
```

This allows us to now use `linearScale` as a function. Whatever value we pass into this function will get converted to a different number based on the domain and range passed in.

In the above case, numbers passed in would be divided by 42 then multiplied by 100...

```js
xScale(0) = 0
xScale(42) = 100
xScale(21) = 50
xScale(1) = 2.38
xScale(43) = 102.38
```

For this particular data visualization, we used linear scales max domain to be 42, because thats the highest number in our data set. In addition to that, we convert it to a range of 100 because we'll just use the return value to be a percentage width of its container.

Let's use this scale to replace the code that currently generates pixel widths with percentage widths...

```js
rect.style("width", function(d) { return linearScale(d.numStudents)})
```

We may not always know what the max value of a dataset might be. In that case, you can use D3's `.max` method to figure it out for you...

```js
var max = d3.max(data)
var linearScale = d3.scale.linear()
  .domain([0, max])
  .range([0, 100])
```

#### Color Scale
We can use the Linear scale to create colors. Since the domain is used as it's reference point were going to map it to the length of data objects.
```javascript
var colorScaleLinear = d3.scaleLinear()
  .domain([0, data.length-1])
  .range(['lightblue','lightgreen'])
```
We could then use the items position in the array to assign the color.
```javascript
rect.attr("fill", function(d,i) {return colorScaleLinear(i)})
```

Another scale we could use is an Ordinal scale.  This scale is a one to one mapping of domain value to range value. Since it's a one to one mapping were going to use the objects key to as the mapped value. 
```javascript
var colorScaleOrdinal = d3.scaleOrdinal()
  .domain(data.map(function(d) { return d.class}))
  .range(['pink','lightblue','lightgreen','yellow'])
```

We would then assing the colors as such:
```javascript
rect.attr("fill", function(d,i) {return colorScaleOrdinal(d.class)})
```

#### Exercise:  Create A Horizonal Bar Chart (30 minutes)

You must use this exact dataset...

```js
var data =  [ 
  {'key':'Protein', 'value': 10},
  {'key':'Carbs', 'value': 20},
  {'key':'Sodium', 'value': 50}, 
  {'key':'Fat', 'value': 70} 
  ];
```

#### Exercise Review
Lets review the full solution together.


#### Scaling the y Axis
It seems we forgot to scale out the y axis.  We can do that using an ordinal scale as were doing a one to one data mapping.  D3v4 created a new type of ordinal scale called the `.scaleBand()`. We can use it to adjust the height of the rects, position them on the y axis and add some padding between them. 
```javascript
var yScale = d3.scaleBand().range([height, 0])
.domain(data.map(function(d) { return d.key; }))
.padding(0.1);

```

This also requires that we scale the height and y axis.
```javascript
 rect.attr("width",function(d) { return xScale(d.value) } )
    .attr("height", yScale.bandwidth())
    .attr('y', function(d,i) { return yScale(d.key)} )
```
## Improving the Bar Chart


### More Styling with D3

Transitions are a cool effect in any visualization.  Give this

```js
.style("width", "0px")
.transition()
  .delay((d, i) => i * 100)
  .duration(1000)
.style("width", d => linearScale(d))
.style("padding-right", "3px")
```

We're barely scratching the surface of D3 here, if you're interested check out the API docs. There are some really cool things you can do with D3.

## Exercise: Add Transitions (20min)

Update the chart from the earlier exercise so that...

* Each bar's height and y postition are calculated a linear scale
* Each bar is rendered using an animation upon page load

> Because of this particular dataset, we'll have to use certain methods differently than in the in-class exercise. [First step to figuring that out is looking through the documentation.](https://github.com/d3/d3/blob/master/API.md)

#### Bonus

Try adding the following: 

* Try adding the values as text and place them inside and at the begining of the rect
* Tooltip to your graph. When the user hovers over a bar, a small window should open next to the cursor that displays the class name and number of students. See how it's done in this [codepen](http://codepen.io/jkeohan/pen/ygGdRV?editors=0010)

#### Exercise Review
Lets review the full solution together.

#### If Time Provides
Demo responsiveness in D3

## Some Other Things To Try

* More charts: [line](https://bl.ocks.org/mbostock/3883245), [pie](http://zeroviscosity.com/d3-js-step-by-step/step-1-a-basic-pie-chart), [scatterplot](http://bl.ocks.org/weiglemc/6185069)
* [SVGs and D3](https://www.dashingd3js.com/lessons/creating-svg-elements-from-data)
* [Maps and D3](https://maptimeboston.github.io/d3-maptime/)

## Closing / Questions

-------

## Additional Resources

* [D3 Documentation](https://github.com/d3/d3/blob/master/API.md)
