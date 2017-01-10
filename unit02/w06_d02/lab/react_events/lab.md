# React Events

In this lab we are going to take a single component React app and break it up into multiple components. The goal of this lab is to focus primarily on how event handling should be handled when events from a child component are causing state changes on the parent.

### Steps

In the notes directory 

  create-react-app feedr-2
    cd feedr-2
    npm install axios
    npm install lodash
    
Copy the starter code from [here](https://gist.github.com/parisyee/f68f3b00b714903dbbd4564a055a4058) and replace the entire contents of your `App.js` file with it. Run `npm start` and make sure that everything is hooked up properly. Take a few minutes to read through the code and familiarize your self with what's going on.

#### Pagination

- Create a `Footer` component and render it at the bottom of the app. This componet will have two buttons - one for page forward and one for page back.
- These buttons will cause a state update on the `App` component to change the `currentPage` value.
- The story list should only display 10 stories at a time and the page will be dictated by the value of `currentPage`.

#### Seperate StoryList

- Create a `StoryList` component that will display the stories available for viewing. This will require you to refactor the selection mechanism so users can still select stories.

#### Filter

- Create a `FilterBox` component that has a text input. When a user types into the text input the story list should filter to only include stories with titles that match the text in the text input.
