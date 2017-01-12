# Single page React + Firebase CRUD App

In this lab you will be guided through a full build of a single page CRUD app built with React and Firebase. There are two main objectives of this exercise:

To guide you through the process of creating an application while utilizing a coherent and verbose project management workflow.
To give you further exposure to creating, updating and deleting data on a server via REST requests.

### FOLLOW THE INSTRUCTIONS. READ EVERYTHING

>There is no reason for anyone not to be able to finish this lab in the allotted time. I have included solutions so that you can check your work along the way. This is not meant to serve as an assessment of your abilities, but rather as a Unit 2 project warmup. The most important part of today is to pay close attention to the process of referring to user stories, completing your predefined tasks in order and making git commits once each task is complete.

# Instructions

### Get organized

I have created a mockup consisting of wireframes for each application state. It can be found in this directory. Take at least **2 minutes** to study it. Not how this is not merely a sketch of the UI, but instead a representation of the user flow through the app. All possible user actions are illustrated through these frames and their transitions. THIS IS THE LEVEL OF DETAIL WE EXPECT FROM YOUR UNIT 2 WIREFRAMES.

Copy this [Trello board](https://trello.com/b/4KZf0kRl/to-do-list-app) so that you have your own copy to modify during this lab. Take at least **3 minutes** to read through all of the user stories. Take note of the columns - there are only three: `Backlog`, `In progress` and `Done`. The title of the cards reflect the “goal” of the user story. The acceptance criteria of the user story reflect the steps that a user should be able to take once the story has been completed. WE EXPECT THE SAME FORMAT FOR YOUR UNIT 2 PROJECT BOARDS.

### Set up Firebase

Go to your firebase console and create a new project called todo. In the database dashboard for this project, change your rules to look like this:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

### Initialize your app

**Important**: you must create your react app outside of your hakuna matata directory. This is because we will be creating a git repo for this lab project and **you will break everything** if you run `git init` inside of a git repo.

```
create-react-app todo
cd todo
npm install --save axios
npm install --save moment
npm start
```

Copy this line and put it in the `<head>` of your `public/index.html`. (I use some Bootstrap to make the layout a bit nicer)

```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
```
Initialize git and make your first commit.
```
git init
git add -A
git commit -m “First commit”
```
Got to GitHub and create a new repo. Call it something like “React Firebase Todo List” so potential employers can find it and know what it’s all about.

Follow the instructions for pushing your repo up to github and confirm that it’s been pushed.

## Feature One: Creating Todos

Go to your Trello board and move the first card in your `Backlog` into `In progress`. Reread the acceptance criteria for this user story so you have a fresh recollection of exactly what coding tasks need to be completed for **this** story.

Replace your `App.js` file with this:

```javascript
import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

class App extends Component {
  constructor() {
    super();
    this.state = { todos: {} };

    this.handleNewTodoInput = this.handleNewTodoInput.bind(this);
  }

  createTodo() {
    // your code goes here
  }

  handleNewTodoInput(event) {
    if (event.charCode === 13) {
      this.createTodo(event.target.value);
      event.target.value = "";
    }
  }


  renderNewTodoBox() {
    return (
      <div className="new-todo-box pb-2">
        <input className="w-100" placeholder="What do you have to do?" onKeyPress={ this.handleNewTodoInput } />
      </div>
    );
  }

  render() {
    return (
      <div className="App container-fluid">
        <div className="row pt-3">
          <div className="col-6 px-4">
            {this.renderNewTodoBox()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

```

This sets you up with an input for entering text for a new todo item. Take **2 minutes** to read it. Take note of what the `handleNewTodoInput` function is doing. What does the `13` mean? Look it up.

Fill in the `createTodo` function. This function will be call with a string, `todoText` as an argument. It should then use axios to make a `POST` request to your Firebase database server with the data for the newly created todo. The data should have a `title` and a `createdAt` attributes. Just use the JS `new Date` for the `createdAt` timestamp. When the response is returned, it will then use setState to update `this.state.todos`. NOTE: use the data of the response object as the key/property name when adding the new todo data to the todos object.

Now that we have our new todo in our state, we need to display out todos in a list.

Modify the jsx in your render function so that it displays a todo list.

```javascript
  render() {
    return (
      <div className="App container-fluid">
        <div className="row pt-3">
          <div className="col-6 px-4">
            {this.renderNewTodoBox()}
            {this.renderTodoList()}
          </div>
        </div>
      </div>
    );
  }
```

Then add the `renderTodoList` method.

```javascript
  renderTodoList() {
    let todoElements = [];

    for(let todoId in this.state.todos) {
      let todo = this.state.todos[todoId]
      
      todoElements.push(
        <div className="todo d-flex justify-content-between pb-4" key={todoId}>
          <div className="mt-2">
            <h4>{todo.title}</h4>
            <div>{moment(todo.createdAt).calendar()}</div>
          </div>
        </div>
      );
    }

    return (
      <div className="todo-list">
        {todoElements}
      </div>
    );
  }
```

Is it working? What about when you reload the page? Are all of the acceptance criteria from out "User creates a todo" user story met?

Add a `componentDidMount` function to fetch all existing todos from your Firebase database on page load. Check the format of this data and make sure that when your create a new todo and add it to the state that it matches this format.

Here's what your `App.js` file should look like at this point. [Link](https://gist.github.com/parisyee/260827d19d8961df97fb2cfd8ee8f4a4)

**Commit your work!!!** What if your computer crashes or you mess somethign up later? You'll always have this milestone saved on GitHub.

```
git add -A
git commit -m "User can create todo"
git push
```

No matter what changes you make, you'll always be able to get back to this state. (Even if you don't know exactly how right now)

FINALLY. Move your "User creates a todo item" story into the `Done` column on your project board.

Congrats :)

## Feature Two: Deleting Todos

On your Trello board, move your "User deletes a todo item" story from your `Backlog` into your `In progress` column.

Add a delete button to each todo list row by modifying your `renderTodoList` method.

```javascript
  renderTodoList() {
    let todoElements = [];

    for(let todoId in this.state.todos) {
      let todo = this.state.todos[todoId]
      
      todoElements.push(
        <div className="todo d-flex justify-content-between pb-4" key={todoId}>
          <div className="mt-2">
            <h4>{todo.title}</h4>
            <div>{moment(todo.createdAt).calendar()}</div>
          </div>
          <button
            className="ml-4 btn btn-link"
            onClick={ () => { this.deleteTodo(todoId) } }
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    }

    return (
      <div className="todo-list">
        {todoElements}
      </div>
    );
  }
```

Create the `deleteTodo` method (make sure to bind it in your constructor). This method should use axios to make a `DELETE` request to your database and delete the desired todo record. When the response is returned successfully, make sure you delete the todo item from your state so it no longer shows up in the list.

Are all of your acceptance criteria met?

Here's what your `App.js` file should look like at this point. [Link](https://gist.github.com/parisyee/412a0af3eb76f0c9a8f6a6664920c545)

**Commit your work!!!** What if your computer crashes or you mess somethign up later? You'll always have this milestone saved on GitHub.

```
git add -A
git commit -m "User can delete todo"
git push
```

No matter what changes you make, you'll always be able to get back to this state. (Even if you don't know exactly how right now)

FINALLY. Move your "User deletes a todo item" story into the `Done` column on your project board.

Congrats :)

## Feature Three: Viewing Todos

On your Trello board, move your "User views a todo item" story from your `Backlog` into your `In progress` column.

Add a `selectTodo` click handler to the title div of each todo list row by modifying your `renderTodoList` method.

```javascript
  renderTodoList() {
    let todoElements = [];

    for(let todoId in this.state.todos) {
      let todo = this.state.todos[todoId]
      
      todoElements.push(
        <div className="todo d-flex justify-content-between pb-4" key={todoId}>
          <div className="mt-2" onClick={ () => this.selectTodo(todoId) }>
            <h4>{todo.title}</h4>
            <div>{moment(todo.createdAt).calendar()}</div>
          </div>
          <button
            className="ml-4 btn btn-link"
            onClick={ () => { this.deleteTodo(todoId) } }
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    }

    return (
      <div className="todo-list">
        {todoElements}
      </div>
    );
  }
```

Implement the `selectTodo` method. This method should take the provided `todoId` and set it as a value for the `currentTodo` key in the state.

Add a selected todo section to your UI by modifying your render method and adding a `renderSelectedTodo` method.

Are all of your acceptance criteria met?

Here's what your `App.js` file should look like at this point. [Link](https://gist.github.com/parisyee/b235e9edd8d3110bc24eda560fe83bea)

**Commit your work!!!** What if your computer crashes or you mess somethign up later? You'll always have this milestone saved on GitHub.

```
git add -A
git commit -m "User can view a todo"
git push
```

No matter what changes you make, you'll always be able to get back to this state. (Even if you don't know exactly how right now)

FINALLY. Move your "User views a todo item" story into the `Done` column on your project board.

Congrats :)

## Feature Four: Editing Todos

On your Trello board, move your "User edits a todo item" story from your `Backlog` into your `In progress` column.

Add an `Edit` button to the top right corner of the selected todo section.

Add a click handler `enableEditMode` that sets an `edit` key to true in the state when it is clicked.

Modify your `renderSelectedTodo` method to check if `this.state.edit` is true. If so, the `renderSelectedTodo` method should display an input that is prepopulated with the `currentTodo`s title. The `Edit` button should also be replaced by a `Save` button when the edit mode is turned on.

Add an `updateCurrentTodo` click handler to the `Save` button. This method should send a `PATCH` request to update the current todo information in your database. (Hint: use `refs` to get the value of the input). When the response is returned, update the current todo with the new title value by resetting it in your state. You should also make sure you set `edit` to `false` in your state to the input is replaced by static text and your edit button comes back.


Are all of your acceptance criteria met?

Here's what your `App.js` file should look like at this point. [Link](https://gist.github.com/parisyee/320beca2744681bbfbdcf866a0a274ad)

**Commit your work!!!** What if your computer crashes or you mess somethign up later? You'll always have this milestone saved on GitHub.

```
git add -A
git commit -m "User can edit a todo"
git push
```

No matter what changes you make, you'll always be able to get back to this state. (Even if you don't know exactly how right now)

FINALLY. Move your "User edits a todo item" story into the `Done` column on your project board.

Congrats :)

## Bugs & Refactoring!

Great job on getting your MVP working. As you can see, there are no more user stories to complete. But that doesn't mean that work is over. Before you start styling, it would be a good idea to debug your code and clean it up.

1. What error do you get when you delete the currently selected to do? How about when we delete a todo that is the current todo we either clear out the current todo or change the current todo to the next or previous one in the list.
2. Split up your single component into multiple. I think that for this app you shouldn't need more than five (including your App component). 7 is the absolute most you would need but you could do a nice refactory by only adding 3 (new todo box, list, selected area). Remember, your state should live as "high up" as possible. You really don't need to have any state in the children components for this app. They can do just fine getting all of their data and callbacks as props.
