# Intro to Sass

## Learning Objectives
- Be able to explain what Sass is and why it's used
- Explain what a preprocessor is and what problem it solves
- Setting up our env to use Sass
- Use variables to make code more flexible
- Use color functions to create dynamic color schemes
- Explain what `&` is and why we use it
- Differentiate between `@extend`, `@import`, `@mixin` & `@include`, and `@function`

## Problems with CSS
- Not DRY: need to keep reusing values for things like colors and sizes even when they should all change at once
- Not modular or encapsulated: doesn't have a good way to namespace where things should be, everything is "global"
- white space

## What is Sass? 

![Sass Icon](http://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg)

---

### Syntactically Awesome Stylesheets

Sass is a superset of CSS that adds power and elegance to the basic language. You can do all the normal CSS things plus way more!
- You write a combination of CSS and SassScript, which compiles to proper CSS.
- It allows you to use variables, nested rules, mixins, inline imports and more, all with a fully CSS-compatible syntax.
- Sass helps keep large stylesheets well-organized, and helps get small stylesheets up and running quickly...

> Sass syntax originated from [Haml](http://haml.info/). Some developers didn't like a syntax that was so foreign from CSS and so the developers that created Sass introduced SCSS which is 'the new main syntax' for Sass.

## What is preprocessing?

Sass is a meta-language we write that compiles to CSS. It's like a DSL for CSS that allows us to use programming like features that are not natively available to CSS.

#### Demo: Using An Online Preprocessor - [precess.co](http://precess.co/)

## Explore Sass Examples 

Let's explore these Codepens. When you open them, you'll notice that the CSS column has a header of CSS (scss). This means that you're currently looking at Sass. Compare this to what you see when you click on the drop-down arrow at the top-right of the column and click "View Compiled CSS". Now you're looking at the CSS after it's been compiled from Sass.

Some things to consider...
* In what ways does Sass look different than Vanilla CSS?
* How might writing out Sass be easier / faster than writing out vanilla CSS?

#### Sass Examples

- [Boxes](http://codepen.io/jshawl/pen/nHDLz)
- [Bullseye](http://codepen.io/jshawl/pen/wpeit)
- [A Button](http://codepen.io/jshawl/pen/bcjyH)
- [Forest](http://codepen.io/jshawl/pen/cJjIm)

> We don't expect you to understand exactly what the Sass is doing in these examples. Just think about it on a higher level.

### Code Along: Setting Up Our Env To Use Sass

**Ruby Version**
Sass was written in Ruby and is installed as a ruby gem. First let's confirm that we have ruby installed and\or the sass gem.  
```javascript
// confirm ruby version
ruby -v 

// query all installed gems
gem query --local  
```
**Installing Sass**
Installing Sass via it's gem file simply type:
```javascript
// install gem
gem install sass
```
Installing this ruby gem provides up the ability to have sass compile a `.scss` file into `.css`

**Configure Sass To Compile**
Now that Sass is installed let's configure it to compile our source code. 
```javascript
// compile to css
sass style.scss:style.css

// we can also configure sass to watch and compile changes automatically
sass style.scss:style.css --watch
```

**Adding The SASS File Extentension To Sublime Text**
By default ST3 doesn't know how to interpret the .scss file extension and uses `plain text`, however by installing the ST3 `SASS` plugin provides us this missing file extension. 

**Possible Issues With Compiling**
Of course there maybe times when the compiler runs into a problem.  This is most often due to the following:
- Missing a closing `semicolon`
- Missing a closing `{`
- Undefined variable

#### CodeAlong: Setting sass to `--watch` for changes

**Resources**
[How To Install SASS](http://www.metropoliscreative.com/web-development/how-to-install-sass-an-easy-guide-for-developers/)
[Add Sass Support To Sublime](http://sublimetexttips.com/how-to-add-sass-support-in-sublime-text/)

### Variables

If there is one reason to use Sass it's `variables`.  Sass allows us to use variables which are defined with `$`. Variables can store strings, numbers, colors, arrays, and objects. Variable names should relate to their usage and not there value e.g. ✅`$brand` vs. ❌`$red`. One big
advantage to using variables it makes it easy to update properties.

```scss
$brand: #bada55;

.logo{
  color: $brand;
}
```
Since colors are an important factor to our site we can also leverage a few of the many builtin Sass `functions` to change the shades of a specific color.  

```scss
$brand: #bada55;
$brand-dark: darken($brand,10%);
$brand-light: lighten($brand,10%)
$brand-transparent: rgba($brand, .1)
```

#### Demo: Using variables To Define Colors - 5min
[CODEPEN - setup with materialize.css](http://codepen.io/jkeohan/pen/apEwWL)

#### Exercise: Apply new color scheme to materialize template - 20min
In the sass_labs folder there is an images folder with an updated version of our Materialize template called `materialize_colors` that we viewed last week. There is also an `adobe_color_scheme` image that contains the new colors that are being used in the new template.  

The `sass_starter` folder contains the full materialize template.  Note that the original `style.css` has been backed up to `style_original.css`.  Create a new style.scss file and copy the the contents of style.css.  Then from the command line configure sass to `--watch` the style.scss file for changes and compile them into the style.css file.  

Now at the very top of the style.scss file create the appropriate color variables for each of the hex colors defined in `adobe_color_scheme` and apply them where you can visually see them defined. 

For the `nav` use `rgba` and set the `#FFC007` color to an opacity of .3 

**NOTE**: you will need to remove some of the `materialize` color classes that have been defined in the html


#### Questions

* What are Sass variables? What problem do they solve?
* How do you define a variable?
* What values can you store in a variable?
* What are some common use cases?

#### Resources

* [Sass Documentation](http://sass-lang.com/guide)
* [Sass Variables](https://robots.thoughtbot.com/sass-variables)
* [Getting Started with Sass](http://alistapart.com/article/getting-started-with-sass)

### Nesting
Nesting allows developers the ability to create a more concise structure of nested classes with ease which then will be compiled into their individual css paths.  
```sass 
li{
  a{
    text-decoration:none;
    &:hover{
      background-color:lightblue;
    }
  }
}
```
In the above example an `anchor` tag is nested inside an `li`.  The anchor also has a `:hover` pseudo-class, however this tag is concatenated to `a` using the `&` symbol and once compiled translates into:

```css
li a {
  text-decoration: none;
}
li a:hover {
  background-color: lightblue;
}
```
General rule for nesting is to nest only 2 or 3 levels deep otherwise the rules generated by Sass will be incredibly long. 
#### Resources

* [Sass Documentation](http://sass-lang.com/guide)
* [The Inception Rule](http://thesassway.com/beginner/the-inception-rule)

### Extends & Inheritance
The `@extend` directive in Sass is a powerful directive that facilitates the sharing of rules and relationships between selector. It acts similiar to how JS inherits from another object, either via `Cat.prototype = new Mammal)` or `class Cat extends Mammal`.  
```scss
.square{
    width:100px;
    height:100px;
    background:blue;
}

.circle{
    @extend .square;
    border-radius:100%;
}
```
### Exercise: Using Variables & Extends - 20min
Update the below CodePen to include base styles for the alert class and then `@extend` the alert class for both the success and error.  Include variables that assign white, lightgreen and red. 
[CODEPEN: Sass - Extends - Starter](http://codepen.io/jkeohan/pen/ygpBod)

**BONUS**: Refactor each of the navs in this [CODEPEN](http://codepen.io/jkeohan/pen/QGYBmx) with the appropirate nesting structure. You could also use a color variable and possibly @extends 

#### Questions

* What is Sass inheritance? What problem does it solve?
* How do we use `@extend` to implement inheritance?
* What does an `@extend` example look like when compiled to vanilla CSS.
* What are some common use cases?



### Mixins
Mixins are another powerful tool in your Sass toolbox.  It provide the ability to create reusable `functions` in css and accept paramaters so that it can create custom css based on input.  Mixins are defined using the `@mixin`  directive and then followed by the name of the mixin and an optional parameter. 

Here is a mixin that takes in a parameter
```scss 
@mixin setMargin($val) {
  margin: $val;
}

.round {
  @include setMargin(0 20px);
  border:1px solid;
}
```

Here is one that does not leverage parameters.
```scss
@mixin clearFix {
  &:after,
  &:before {
  content:"";
  display:block;
  }
  &:after {
      clear:both;
    }
}
```

#### Exercise: Using Mixins- 20min
Refactor the previous codepen to include a mixin called 'colors' that takes in a background color ($bgcolor) and text color ($fgcolor) and @include it in each of the divs. 

**BONUS**: Update the sass_starter code to include a mixin called `parallaxImg` that takes in an image that you can then use `@include` to apply the appropriate image for each div that has parallax applied. 
```scss
@mixin parallaxImg($image){
 // how would you apply an src image in css? 
}
```
**Hint**: You might find this [stackoverflow](http://stackoverflow.com/questions/2182716/is-it-possible-to-set-the-equivalent-of-a-src-attribute-of-an-img-tag-in-css) useful to replace src with...???

Also create a nested css structure with .parallax as the parent img as the child and then a unique class applied to each img tag.  Let's face it how else are you going to remove the img src from the html and 
#### Questions

* What are mixins? What problem do they solve?
* How do we define and use a mixin?
* In what way might a mixin resemble a programming language?
* What is a common example of a mixin?


#### Resources

* [Sass Documentation](http://sass-lang.com/guide)
* [The Mixin Directive](https://www.sitepoint.com/sass-basics-the-mixin-directive/)
* [Handy Sass Mixins](https://web-design-weekly.com/2013/05/12/handy-sass-mixins/)
* [The Extend Concept](https://css-tricks.com/the-extend-concept/)

### Functions
Functions are quite similiar to mixins in that they are declared with a directive, which in this case is `@function`.  They also are given a name and optional parameters.  

```scss 
@function black($opacity) {
  @return rgba(black, $opacity)
}
```
They are then called as such:
```scss
background-color: black(.4)
```
#### Resources

* [Sass Documentation](http://sass-lang.com/documentation/Sass/Script/Functions.html)
* [Pure Sass Functions](http://thesassway.com/advanced/pure-sass-functions)

<!--- <details>
  <summary>
   **SOLUTION:**
  </summary>
  [Only take a peek. No copy-and-pasting.](http://codepen.io/adambray/pen/yegjdj)
</details>------>

### Libraries/Frameworks

There a good number of [libraries](http://www.hongkiat.com/blog/mixin-library-for-sass/) of mixins and functions that can extend the functionality of Sass. Most are used by `@import`ing the library `@include`ing the mixins where desired.

Bourbon + Neat are similar to bootstrap but are a lot more flexible and don't
require a bunch of classes everywhere. Super cool!
- [Bourbon](http://bourbon.io/) is "a simple and lightweight mixin library."
  - [Neat](http://neat.bourbon.io/) is "a lightweight semantic grid framework for Sass and Bourbon."

Compass is another framework that adds a bunch of extra features, a lot of the most useful ones are mixins that add vendor prefixes to styles. I've never
used it but it's out there and pretty popular.
- [Compass](http://compass-style.org/examples/compass/tables/all/)

If you're worried about vendor prefixes there is also [autoprefixer](https://github.com/postcss/autoprefixer). It's not a sass thing but cool regardless and potentially a good alternative to compass if you're only concerned with prefixes.

# Conclusion

- Name 3 benefits of Sass.
- Describe how variables work in Sass
- Understand how to use nesting to help DRY up selectors and properties
- Differentiate between `@extend`, `@import`, `@mixin` & `@include`, and `@function`

### Want more?  

- [Super cool custom framework](http://www.sassmeister.com/gist/0a041d0fb2d72758c280)
  - From the scotch.io tutoral - [build your own framework](https://scotch.io/tutorials/getting-started-with-sass#function-directives)
]
- Or, check out the follow-up lesson, [Sass Directives](https://github.com/ga-wdi-lessons/sass-directives)

### References

Guides:
- [Official getting started guide](http://sass-lang.com/guide)
- [Scotch.io - Build your own framework](https://scotch.io/tutorials/getting-started-with-sass#function-directives)
- [TheSassWay - Pure sass functions](http://thesassway.com/advanced/pure-sass-functions)
- [Sitepoint - Function basics](https://www.sitepoint.com/sass-basics-function-directive/)
- [Sitepoint - Control directives](https://www.sitepoint.com/sass-basics-control-directives-expressions/)
- [Docs for functions](http://sass-lang.com/documentation/Sass/Script/Functions.html)
- [Simply Gulpy Workflow For Sass](https://www.sitepoint.com/simple-gulpy-workflow-sass/)

Examples:
- [3D Buttons with Sass](https://jesse.sh/makes-3d-buttons-with-sass/)
- Github's Style Guide, [Primer CSS](http://primercss.io/about/)

