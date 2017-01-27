# Materialize

## Learning Objectives
- Intro to Google's Material Design Lite (MDL).
- Getting Started with `Materialize`'s implementation of MDL.
- Build collective repo of useful classes from the Materialize framework.
- Implement Nav and Icon Block with Materialize

## Intro To Google's Material Design

Per Google....
> "We challenged ourselves to create a visual language for our users that synthesizes the classic principles of good design with the innovation and possibility of technology and science. This is material designb."

[Material Design Lite](https://material.io/guidelines/material-design/introduction.html#) aligns itself with 3 main principles:

**Material is a Metaphor**
Technology is inspired by paper and ink and is utilized to facilitate creativity and innovation. Surfaces and edges provide familiar visual cues that allow users to quickly understand the technology beyond the physical world.

**Bold, Graphic, Intentional**
Elements and components such as grids, typography, color, and imagery are not only visually pleasing, but also create a sense of hierarchy, meaning, and focus. Emphasis on different actions and components create a visual guide for users. 

**Motion Provides Meaning**
Motion allows the user to draw a parallel between what they see on the screen and in real life. Motion contains consistency and continuity in addition to giving users additional subconscious information about objects and transformations.

**Sites Built With MDL**
[Get MDL Showcase](https://getmdl.io/showcase/)
[BuiltWith](https://trends.builtwith.com/websitelist/Material-Design-Lite)

**So how does it compare to say...Bootstrap**
[Bootstrap vs Material Design Lite](http://tutorialzine.com/2015/07/comparing-bootstrap-with-mdl/)
[Bootstrap vs Material Design Lite - Quick Comparison](http://news.softpedia.com/news/let-s-compare-bootstrap-vs-material-design-lite-486755.shtml)

#### Materialize
[Materialize](http://materializecss.com/about.html) is a framework that implements Google's [Material Design Lite](https://material.io/guidelines/material-design/introduction.html#). It was designed and created by a team of 4 students from Carnegie Mellon University.  They however are only of of many working frameworks that implement MDL. 

Here are some more: [15 MDL Frameworks and Libraries](http://tutorialzine.com/2016/03/the-15-best-material-design-frameworks-and-libraries/)

## Getting Started

### Download Options

1. You can grab it from a [CDN](https://cdnjs.com/libraries/materialize).

``` html
<!-- Compiled and minified CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css">

```

``` html
<!-- Compiled and minified JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
```

2. You can [download the complied and minified CSS, JS, and fonts](http://materializecss.com/getting-started.html) and include them manually.

3. You can [download the uncompiled source code as SASS](http://materializecss.com/getting-started.html), pick the components you want, and compile the subset that you need.

#### You're Also Gonna Need jQuery...

`<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>`

**NOTE**: only needed if you want to use Materialize's JS components.

### Document Setup

Since Bootstrap is written with mobile in mind, they recommend configuring the viewport with a meta tag in the head:

``` html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

The `viewport` is the user's visible area on the page. A `<meta>` viewport element gives the browser instructions on how to control the page's dimensions and scaling.  The `width=device-width` part sets the width of the page to follow the screen-width of the device. The `initial-scale=1.0` part sets the initial zoom level when the page is first loaded by the browser. 

Here is an example: [W3Schools](http://www.w3schools.com/css/css_rwd_viewport.asp)

If we opted to download the Materialize files locally into our project than the setup would look something more like:

``` html
<head>
  <!--Import Google Icon Font-->
  <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <!--Import materialize.css-->
  <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>

  <!--Let browser know website is optimized for mobile-->
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>

<body>
  <!--Import jQuery before materialize.js-->
   <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script type="text/javascript" src="js/materialize.min.js"></script>
 </body> 
```

### Grid System Basics

Materialize has adopted much of the semantic and layout structure of Bootstrap which is broken down into the following structure:

- Containers
- Rows\Columns

#### Containers

The container class is not strictly part of the grid but is important in laying out content. It allows you to center your page content. The container class is set to ~70% of the window width and is comparable to Bootstrap's container-fluid class. It helps you center and contain your page content. We use the container to contain our body content.

``` html
  <body>
    <div class="container">
      <!-- Page Content goes here -->
    </div>
  </body>
```

#### Rows and Columns

As previously mentioned, Materialize had adopted Bootstraps 12 column grid layout and is built of `.col [device size][number]` divs inside of `.row` divs, e.g.:

``` html
<div class="row">
  <div class="col s1">1</div>
  <div class="col s1">2</div>
  <div class="col s1">3</div>
  <div class="col s1">4</div>
  <div class="col s1">5</div>
  <div class="col s1">6</div>
  <div class="col s1">7</div>
  <div class="col s1">8</div>
  <div class="col s1">9</div>
  <div class="col s1">10</div>
  <div class="col s1">11</div>
  <div class="col s1">12</div>
</div>

<div class="row">
  <div class="col m4 l12">4@med and 12@large</div>
  <div class="col m4 l12">4@med and 12@large</div>
  <div class="col m4 l12">44@med and 12@large</div>
</div>

```

A row also applies -.75rem's to it's margin left\right to expand past the containers defined margin. REM is defined as root em's which means it uses the 
``` css 
  margin-left: -.75rem;
  margin-right: -.75rem
```

 | | Mobile <= 600px | Tablet <= 992px| Desktop > 992px
--- | --- | --- | ---
Class Prefix | .s | .m | .l
Container Width | 85% | 85% | 70%
Number of Columns | 12 | 12 | 12

The numbers indicate how many 1/12ths of the viewport width you would like that column to occupy, so `class="col m9 s12"` would be 9/12ths the width of a desktop screen, and 12/12ths the width of a tablet screen.

### Out-of-the-box, Materialize styles some elements

For starters, Materialize implements baseline styles for links and typography.  For instance with `<button>` Materialize doesn't change too many properties, compared to your browser's default styling: it has square corners and a slightly different gradient, which goes a long way toward making it look "cleaner" and more "modern",  that's pretty much it.

The bulk of Materialize's customizing power lies in its dozens of components, which are implemented through a combination of CSS classes and jQuery plugins.

### Lab1: Materializer Cheat Sheet

As a class, we're going to compile a cheat sheet for several Materialize elements which will include documentation, codepen's and some tips and tricks.

Each group should create Codepen demo of their three components and write up answers to the following questions for each:

## Name Of Functionality

[link to CodePen Demo]()

- What is it?
- What's it good for?
- Where can I read more about it?
- Any tips/tricks for implementation? _(Think: What value can I add to the existing docs?")

Once the alloted time is up each group will have 2-4 min to demo their their findings to the class.  Please slack the instructor your codepen so that he can include the link in the class repo. 

#### CSS

**Group One**

- Color
- Helpers
- Transition

**Group Two**

- Grd
- Typography
- Table

#### Components

**Group Three**

- Buttons
- Cards
- Icons

**Group Four**

- Collections
- Navbar
- Preloader

#### Javascript

**Group Five**

- Carousel
- Modals
- Tabs

**Group Six**

- Collapsible
- Dialogs
- Parallax


### Implementing The Nav and Header
The one requirement for any site or mobile app is a navigation.  All front end frameworks provide them and thus Materialize has it's own implementation. Needless to say it's a series of nested div's defined with specific classes providing all the functionality for a responsive nav. 
```html
 <nav role="navigation">
    <div class="nav-wrapper container">
      <a id="logo-container" href="#" class="brand-logo">Logo</a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#">Navbar Link</a></li>
      </ul>
      <ul id="nav-mobile" class="side-nav">
        <li><a href="#∫">Navbar Link</a></li>
      </ul>
      <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
    </div>
  </nav>
```

The `brand-logo` class formats and positions the logo based on m or l screen size and the ul is postitioned `right` and hidden at mediuam and below by setting `hide-on-med-and-down`

`side-nav` positions the ul off the screen using transform: translateX(-50%) and the hamburger represented as `material-icons` menu.  The animation is implemented by attaching the following method: 
```javascript
$('.button-collapse').sideNav();
```

### Independant Practice - 15min
Implement the nav above.  Once this is done invest no more than 10min and try to manually create a similiar nav based on your understanding of css.  

**Bonus**
Try incorporating the nav into your current portfolio site or one of your previous unit projects. 

-**link to your codepen**-

### Implementing An Icon Block
```javascript
<div class="container">
  <div class="section">
    <div class="icon-block">
      <h2 class="center brown-text"><i class="material-icons">flash_on</i></h2>
      <h5 class="center">Speeds up development</h5>
      <p class="light">We did most of the heavy lifting for you to provide a default stylings.</p>
    </div>
  </div>
</div>
```

The icon block is a standard visual implementation used to highlight the services and\or high level concepts offered by a company.  They almost always include a design that either formats the data as rows or columns with left\right margin\padding. The `container` class provides the left\right margin and `section` class top/bottom padding.  

As the name entails they should contain icons which are available via the linked script tag to Google's Material icons. The icon class must be: `material-icons` and the text the name of the icon. 
```html
<i class="material-icons">flash_on</i>
```

Text can be centered using `center` and color applied using `colorname-text`

### Independant Practice - 15min
Implement the icon block above.  Once this is done invest no more than 10min and try to manually create a similiar icon block based on your understanding of css.  You can leverage the Google font's for the purpose of this lab but not the standard Materailize classes. 

**Bonus**
Create your own icon block to include in your portfolio site which convey the technologies and\or concepts that you want to emphasize as per your web development experience. 

-**link to your codepen**-

## Questions

- What's the difference between a framework and a library?

- Name two Materialize Component classes and explain what they do.

- What's is the full html markup to include a `settings` icon?


## Helpful References

[Materialize CSS](http://materializecss.com/color.html)

[Materialize Components](http://materializecss.com/badges.html)

[Make A Material Design Portfolio Site](https://scotch.io/tutorials/make-material-design-websites-with-the-materialize-css-framework)

[Bootstrap vs Material Design Lite](http://tutorialzine.com/2015/07/comparing-bootstrap-with-mdl/)

[Bootstrap vs Material Design Lite - Quick Comparison](http://news.softpedia.com/news/let-s-compare-bootstrap-vs-material-design-lite-486755.shtml)

[30+ MDL Templates](https://templateflip.com/material-design-html5-templates-free-download/)

