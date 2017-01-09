# React Messager Lab

## New Feature Implementation

The Messager app works, and it persists data by using Firebase. We'd like you to add a new feature to the app:

- The new feature will be a message displayer at the top of the app above the new message form. The message displayer will be comprised of a select element on the left that contains a list of all the message titles and a div to the right within which to display the currently selected message.
- You will not change the current AddMessageForm or MessageList components.
- You will add a MessageTitleList component (that contains the select) and a CurrentMessageDisplay component (that contains the div with the currently selected message)
- You should pass the messages right to the MessageTitleList, then loop through them and add each title to the select. The onClick event handler in the select should call some method that updates the MessageDisplay. Hint: you should add a new piece of state called `currentMessage`
- You should pass the `currentMessage` to the MessageDisplay as a prop so it can display it
