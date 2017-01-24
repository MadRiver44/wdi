# Regular Expressions

#### Objectives

1. Learn what regular expressions are
2. Explain their use cases
3. Demonstrate how to use them
4. Utilize online regex resources

### What are they?

- A sequence of characters that define a search pattern - [source, wiki](https://en.wikipedia.org/wiki/Regular_expression)
- Patterns used to match character combinations in strings. Like everything else in JavaScript, regular expressions are objects that have their own methods (test and exec). The match, replace, search, and split methods of String objects also utilize regular expressions - [source, MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

### Why would you use them?
- Perform complex form input validation (e.g. a password field that requires an uppercase letter, a lowercase letter, a number, a special character, and must be at least 8 characters long)
- Perform complex search and replace operations
- Match routes
- Most programming languages and code editors utilize them
- [Nice overview of why and how you'd want to use regular expressions](http://www.websiterepairguy.com/articles/re/12_re.html)

### How do you use them?
```javascript
const myRegEx = /he(l*)o/g;
const testString = 'heo helo hello helllo';
// test method of RegEx object
console.log(myRegEx.test(testString)); // true
// match method of String object
console.log(testString.match(myRegEx)); // [ 'heo', 'helo', 'hello', 'helllo' ]
// replace method of String object
console.log(testString.replace(myRegEx, 'hello')); // hello hello hello hello
```
- You define a regular expression by setting a variable to a pattern between two forward slashes.
- You can set flags after the closing forward slash. The `g` flag up above signifies 'global'. You can also set the `i` flag, for 'ignore case', and the `m` flag, for 'multiline'.

#### Case study: regular expression to match minimum 8 and maximum 16 characters with at least 1 uppercase alphabet, 1 lowercase alphabet, 1 number and 1 special character:

1. `/[A]{8,16}/` => matches 8-16 A characters
2. `/[A-Z]{8,16}/` => 8-16 A-Z characters
3. `/[A-Za-z]{8,16}/` => 8-16 A-Z or a-z characters
4. `/[A-Za-z\d]{8,16}/` => 8-16 A-Z, a-z, or 0-9 characters
5. `/[A-Za-z\d$@$!%*?&]{8,16}/` => 8-16 A-Z, a-z, 0-9 characters, or any of the listed special characters
6. `/^[A-Za-z\d$@$!%*?&]{8,16}$/` => 8-16 A-Z, a-z, 0-9 characters, or any of the listed special characters, starting from the beginning of the line and ending at the end of the line
7. `/^(?=.*[a-z])[A-Za-z\d$@$!%*?&]{8,16}$/` => 8-16 A-Z, a-z, 0-9 characters, or any of the listed special characters, starting from the beginning of the line and ending at the end of the line, and requires at least one a-z character preceded by 0-however many characters
8. `/^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d$@$!%*?&]{8,16}$/` => 8-16 A-Z, a-z, 0-9 characters, or any of the listed special characters, starting from the beginning of the line and ending at the end of the line, and requires at least one a-z character and one A-Z character preceded by 0-however many characters
8. `/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,16}$/` => 8-16 A-Z, a-z, 0-9 characters, or any of the listed special characters, starting from the beginning of the line and ending at the end of the line, and requires at least one a-z character, one A-Z character, and one digit preceded by 0-however many characters
9. `/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,16}$/` => TADA!

### What is the best way to learn about regular expressions?
- Simple regular expressions are easy to understand, e.g. `/hello/` matches the word 'hello' and `/hello|goodbye/` matches either the word 'hello' or the word 'goodbye'. More complicated regular expressions begin to look quite tricky. E.g., this regex `/\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/` matches 10 digit phone numbers that use either -s .s or neither.
- Regular expressions are a language all on their own. One of the best resources for learning how to use regular expressions: [RegExr](http://www.regexr.com/)
- Watch this conference presentation on regular expressions: [Fluent 2012: /Reg(exp){2}lained/: Demystifying Regular Expressions](https://www.youtube.com/watch?v=EkluES9Rvak)
