# DOM manipulation and event handling lab

When the first button is clicked, set the background colors of the divs to a different color.

Hint: you can use the style property of an HTML element to set specific styles:

`myElement.style.backgroundColor = 'blue';`

Use a for-of loop for this event handler.

Bonus: pass the addEventListener method an anonymous function directly rather than defining the function outside the method call.

---

When the second button is clicked, set the background color of the divs to a different color each. Use an array of three colors and set the backgroundColor of each div to a color in the array.

For example (pseudocode):

```
set div1.bgColor to colors[0];
set div2.bgColor to colors[1];
set div3.bgColor to colors[2];
```

Use a for loop or the array forEach() method so you can access the index of the current item and use that to select the color.
