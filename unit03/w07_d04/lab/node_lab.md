# Node Lab

###  LET'S BUILD A MODULE

- Lets write a simple calculator module that does the following:
	- **Add**
	- **Subtract**
	- **Multiply**
	- **Divide** 

### STEPS:
 

 - Via command line, create a folder called **`my-calc-app`**
 	- e.g,. -->  mkdir myCalcApp
 - cd into the newly created folder
 - Run npm init to create a `package.json` file. **Please fill out info for each prompt**
 - In the same directory, `touch` 2 files (Via terminal)
 	- e.g., -->  touch index.js calc.js
 	
 - Open the folder in your preferred editor. (In my case, I'm using Sublime)
 	``` subl .
 	 OR
 	 atom . ```
 
 
- in **`calc.js`**, create **4** methods (add, subtr...) and export them using either module.exports or exports.
- You have a couple of options:
	- You can create standalone **functions** for each
	- You can create a **class** with four methods.
	- Or you can let your imagination run wild, and do what feels right 😑	

- In **`index.js`**, require your calc.js module using the require method.
- Invoke/Test your methods/function from acquired calc module.


## How to run your code.
- Open package.json
- Add the following line in the **`scripts`** section:
- `"start": "node index.js" `
- The **`scripts`** section should look similiar to the following


 ```javascript
{
  "name": "my-calc-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "author": "",
  "license": "ISC"
}
```

- Via command line, run **`npm start`**. You should see the results of your script show up in the terminal


##Bonus
Using the [prompt](https://github.com/flatiron/prompt) Library add an interactive prompt that enables a user to do calculation via terminal. Read it...learn to read docs...it's not painful...use your imagination

**Resource:** [https://github.com/flatiron/prompt](https://github.com/flatiron/prompt)