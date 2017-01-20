### Here is the quiz:

**REMINDER:** Write your answers directly under each question. No one-liners, please. **Be as explicit as possible**

1. Please explain semantic versioning.
> Your answer: My best understanding, from https://www.sitepoint.com/semantic-versioning-why-you-should-using/, is naming your software with the convention X.Y.Z. 'If you are mostly fixing bugs, then this would be categorized as a patch, in which case you should bump z.  If you are implementing new features in a backward-compatible way, then you will bump y because this is what’s called a minor version.  On the other hand, if you implement new stuff that is likely to break the existing API, you need to bump x because it is a major version.'

2. What's the Difference between Client vs Server Side Development?
> Your answer: Server-side development has slowly migrated away from a MVC 'thin client' approach where the server did most of the work in determining what is displayed on the page. Now, web development is increasingly trying to enhance UX by allowing the client more power in the 'View' while reducing the server load in terms of how many calls are made by the client to modify the View.

3. What is Node.js? How does it differ from browser-based javascript?
> Your answer: Node is (according to Wikipedia),  'an open-source, cross-platform JavaScript runtime environment.' Because it allows for asynchronous input/output management, it has a speed advantage over linear programs like PHP. Additionally, it compiles cross-platform, allowing its applications to run in MacOS, Windows, Unix, etc.  It seems Node is based on the same JavaScript interpreter as Chrome, but instead of rendering the DOM in a browser window, Node uses additional i/o libraries to allow JavaScript to access and modify files.

4. Name some other competing server-side languages/technologies besides Node.js.
> Your answer: Other established backend scripting languages are PHP-based frameworks, Ruby-based frameworks like Rails or Sinatra, Microsoft's ASP.NET, and various other frameworks based on Java/Perl/Python etc.

5. Today you added another word to your vocabulary: `nodemon`. What is it? What does it do?
> Your answer: From https://nodemon.io/, 'Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development...Just use nodemon instead of node to run your code, and now your process will automatically restart when your code changes.

6. What is a module? Why do we use modules? How do you include a module in your application?
> Your answer: Modules are smaller, reusable packages of code that extend the functionality of larger frameworks, usually for a specific task. You can download modules explicitly at the command line (example: cloning a GitHub repo for Prompt.js), or other modules may be brought in automatically as dependencies of other packages.  To use a module, you will typically import it into your app as a requirement.

7. What is npm? How do we use npm to get key components for our node applications? What is package.json?
> Your answer: Additional modules can be downloaded via cd'ing into your app's folder and running Node Package Manager. Often, npm will install key components automatically for Node apps via the Package.JSON file if dependencies have been indicated there.  Package.JSON is a file that Node.js (and developers) can inspect to understand app configurations, dependencies and how it should execute commands relative to the app's environment.

**BONUS**

What language(s) is the underlying code for node.js written in?
> Your answer: According to Wikipedia, Node is written in C, C++, and JavaScript.
