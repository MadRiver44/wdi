# <3 Regular Expressions

It's time to play with some regular expressions in useful contexts! Use [RegExr](http://www.regexr.com/), the lab was designed with the RegExr cheat sheet in mind.

## Part 1: input validation in a React app
- Navigate to `w08_d02/lab/regular-expressions/reg-ex-react-app`
- install the app's dependencies
- run the app (it'll be hosted on localhost:3000)
- discover and test a regular expression for each of the following patterns (you can enter these on line 19 in the RegExForm component to test, add your answers to this markdown file or as comments in the component)

Test for strings that:

1. include either 'hi' or 'bye'
2. begin with 'yoyo'
3. end with 'bly'
4. begin with a string that begins with either an 'a', a 'b', or a 'c', and is followed by 'BLOOP' where the l is either uppercase or lowercase
5. end with 1 or more lowercase 'z's followed by 'THE_END' where each letter can either by uppercase or lowercase

## Part 2: Express route matching
- Navigate to `w08_d02/lab/regular-expressions/reg-ex-express-app`
- install the app's dependencies
- run the app (it'll be hosted on localhost:1337)
- discover and test a regular expression for each of the following patterns (you can add a new route for each of these patterns in `routes/regex.js` - an example is provided)

Test for routes that match:

1. either 'favorites' or 'favourites' - don't simply use the or operator with both words
2. 'orders/id-letter-number' where `letter` must be be a single uppercase letter between A and M and `number` is between 4 and 12 characters long and each character must be a number
3. 'hash-valid' where `valid` IS NOT any combination of 1 or more uppercase letters between N and Z
4. 'lookVINCEimCaseInsensitive' where it doesn't matter what the case is of any of the characters

## Part 3: Google-fu yo'self some handy regular expressions

Regular expressions are invaluable in a variety of contexts. Do you need to make sure a string is a valid email address, or a valid URL? Do you need to convert MM/DD/YYYY date instances to DD/MM/YYYY? You can find regular expressions for all of these things, and it's not the best use of your time (unless you're trying to learn) to try to figure out how to write them from scratch. Regular expressions like these are so common that it's fine to use someone else's pattern (just include a link in your code). So, for part 3, think of an interesting use case and do some googling, or simply google 'common regular expressions' and find a few that you think might come in handy. If google fails you, RegExr has a lengthy examples section, browse them. Find at least 3. Direct message me on Slack with what you find.
