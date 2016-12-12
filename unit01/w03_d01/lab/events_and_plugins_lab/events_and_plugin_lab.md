#Events Lab

##LAB Files => - Grab the ***events\_and\_ plugins_lab*** folder in [here](https://github.com/ga-students/WDI_HAKUNA_MATATA/tree/master/unit01/w03_d01/lab)

###Plugins Exercise 1
- The button on the slider plugin looks jacked up! Style them, so they look presentable. Also, feel free to add your own images to those 940x528 placeholders.


###Plugin Exercise 2
- Download one of the top jQuery Plugins and add it to a page. Use the `plugin_template_ex.html` file as your guiding light/template. It has references to where and how to setup a plugin.  

	Feel free to create it in a folder, and upload to your GitHub pages account.

	[***TOP JQuery PLUGIN***] (http://www.creativebloq.com/jquery/top-jquery-plugins-6133175) => [http://www.creativebloq.com/jquery/top-jquery-plugins-6133175](http://www.creativebloq.com/jquery/top-jquery-plugins-6133175)


### Event Exercise 1
- In the labs folder, there should be an `index.html` page with some basic html setup for you.
	- Add a script tag below the jquery script tag
	- In the script tag add the document ready method that will hold your code.
	- [Document ready. Use the shorthand version!!](https://learn.jquery.com/using-jquery-core/document-ready/)
	- Write code to disable the form from submitting, when the user clicks the submit button. This should use the "event" way of doing things..... e.
	- For the first textfield, create a function that listens to the "focus" event. Expose (console.log) the following properties in the event object.
		- The whole event object
		- The "type" property
		- The "target" property
		- The "outerHTML" property
- With the **UP, RIGHT, DOWN, LEFT** arrow buttons, make the form move based on user keypress. So if the user clicks the down arrow, the form show move down...pixel by pixel

	You will have to detect the key code and perhaps use jquery animate, or any method that suits your fancy.
[http://api.jquery.com/animate/](http://api.jquery.com/animate/)
	
##Bonus
- Create a secret easter egg, base on keycode combo. Reveal a hidden message...

##Resources
- [http://keycode.info/](http://keycode.info/)  
- [http://codepen.io/chriscoyier/pen/mPgoYJ](http://codepen.io/chriscoyier/pen/mPgoYJ)  
- [Keycodes](https://css-tricks.com/snippets/javascript/javascript-keycodes/)
- [http://www.slidesjs.com/](http://www.slidesjs.com/)