// TASK 1: Take the above code and package it as function called "createRect".
// The function should take in two params: a tag name AND an object

var Rect1 = {"x":50, "y":50, "width":40,"height":40}
var Rect2 = {"x":100, "y":50, "width":50,"height":50}

createRect(tag, object) {
var svg = d3.select(".rect").append("svg")
  .attr("height",100).attr("width",400)
var rect = svg.append("rect").data([Rect1])
    .attr("x",function(d) { return d.x })
    .attr("y",function(d) { return d.y })
    .attr("width", function(d) { return d.width})
    .attr("height", function(d) { return d.height})
    .attr("fill","green")
}
createRect('.rect', Rect1);
