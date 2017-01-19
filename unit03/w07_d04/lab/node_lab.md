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

Select the FirstName, City, and Country from the Customer table.
SELECT FirstName, City, Country FROM Customer

Select the Id, ContactTitle, Country, Phone and Fax from the Supplier table.
SELECT Id, ContactTitle, Country, Phone, Fax FROM Supplier

Select all of the columns from the Order table.
SELECT * FROM [Order]

Select every column except the SupplierId from the Product table.
SELECT Id, ProductName, UnitPrice, Package, IsDiscontinued FROM Product

Select everything from customers who live in countries with is in them.
SELECT * FROM Customer WHERE Country LIKE '%is%'

Select the Id, LastName and Phone from customers who live in countries that start with i. (After that, you probably want to add Country to your select to confirm, don't you?)
SELECT Country, Id, LastName, Phone FROM Customer WHERE Country LIKE 'i%'

Select the ProductName, UnitPrice IsDiscontinued and Package for all products with unit prices over $20, come in a package of either '10 - 500 g pkgs.' or '24 - 200 g pkgs.' and are not discontinued.
SELECT ProductName, UnitPrice, IsDiscontinued, Package FROM Product WHERE UnitPrice > 20 AND IsDiscontinued = 'FALSE' AND Package = '10 - 500 g pkgs.' OR Package = '24 - 200 g pkgs.' 

ORDER
Select everything from all of the customers orderd by country ascending and last name descending.
SELECT * FROM Customer ORDER BY Country ASC, LastName DESC
