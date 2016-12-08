_italics_ is the way to italicize in markdown
**two asterisks** will make your text bold
#This makes an h1
##This makes an h2
[] denotes a link, while () denotes the href

#MORNING LAB - CSS w/Joe

Codepen Emmet shortcut = div>ul>(li.clearfix)>img[https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97100&w=100&h=100]+h3{Title Text}+p(lorem))*3 TAB
--$ in Emmet will make numbered lists
--parentheses will group what you want duplicated
--[] for link

reminder: normalize & reset to set css to default

floating elements makes them block level
-Elem will only take up as much space as its content unless a width is set
-All other sibling text/images will recognize it although out of document flow
-Parent of floated element doesn't recognize floated childern
-Need to implement clearfix to correct

overflow: hidden; - fixed img inside floated div

chrome devtools "computed" tab will show element properties
"styles" tab can add css properties to page


((div.column)>(div.columncontent))*3
(div.row)>(div.rowcontent)*3

width: 10vw; = "viewport width" (responsive design option to resize elements)

joe's youtube channel > tutorials on fixed nav

---------------------------------------------------------------------------------
# AFTERNOON LECTURE - CLOSURES
[Closures](https://medium.com/written-in-code/practical-uses-for-closures-c65640ae7304#.j027f2nit)
-Intro
-This
-Apply and Call
-

Closure: Closures are functions that refer to independent (free) variables (variables that are used locally, but defined in an enclosing scope). In other words, these functions 'remember' the environment in which they were created. (MDN)

-An inner function that has access to the outer enclosing function's variable scope chain

cmd-alt-/ = multiline comments in sublime!!

_________________________________________________________________________________
# THIS
Keyword 'this' used to determine a function's calling context
-When called as a method, 'this'refers to the calling object
-in a standalone function invocation, 'this'is the global object
-if standalone, this refers to the window/global object
-'This' always refers to the OWNER of the 

in chrome console, this === window => true

The 'call' method calls a function with a given context
ex: myFunction.call(desiredContext);

















