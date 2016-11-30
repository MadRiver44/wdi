# HTML5 Form Lab - Build a survey.

In this lab you are going to use your knowledge of HTML forms and form components to create a personal survey of 10 - 15 questions. You can ask anything you want. The goal is to get as creative as possible and use as many different form components as you can. Try to use at least one of each of the following components, as well as any others that interest you.

- Text input
- Radio buttons with at least 2 options
- A group of at least 3 checkboxes
- Select with at least 3 options
- Textarea
- Number input

Make sure you add your labels!

### Getting Started

Clone this repo
```
git clone https://github.com/parisyee/html5_form_lab
cd html5_form_lab
```
Install the dependencies by running
```
bundle install
```
NOTE: if the `bundle` command is not found you have to first run
```
gem install bundler
```
or
```
sudo gem install bundler
```
Start your local server
```
ruby app.rb
```
Visit `localhost:4567` in your browser

Once your server is running you can start creating your form in `views/index.erb`

### Why are we doing this in a Sinatra app?

As we have learned, HTML forms are responsible for collecting user data that will
eventually be sent over the wire to a server. Although you can just build forms
in HTML files, it's much more rewarding to be able to submit you data to a server.

When you click the submit button, a `POST` request is sent to the server at the
location `/serveys`. The server then has access to the submitted data (in the form of a url query string) as well as other information about the request. Our Sinatra app will then take the query string and transform it into a Ruby hash - similar to a JS object - and make it available through a special variable called `params`.

In our example, we're not doing anything with the data on the server side. We just print it back out on the form (this is the line with the `params` variable in the `index.erb` template).

### Bonus

- Try creating two inputs with the same name. What happens when you fill them in and submit the form?
- Try changing the forms `action` and `mothod` attributes. What happens? Can you follow the error messages and get it working? HINT: When you make changes to the `app.rb` file you will have to restar your local server: `Ctrl-C` to stop and then `ruby app.rb` to restart.

