# Feature Requests

By this point, all three feature branches for the basic functionality should be merged with master and everyone should have the up-to-date code on their local machines.

The following is a list of additional features that you can implement. It is up to you to delegate the tasks. However you choose to tackle these features, make sure you start a new branch for each one. This here is a choose your own adventure, implement whichever features seem most interesting to you (styling and an attempt at the `favorites` feature are mandatory though).

If you complete any of these features (except for the styling), your group deserves a cookie (or 3 or 4). So go see Vince and get some cookies when you successfully do so :D

**NOTE** It's okay if you don't get many of these complete, these are all pretty tough. We do want you to think them through and spend some time as a group white-boarding the logic necessary. These sorts of things are the sorts of things that you should aim to implement in your unit 3 project. You can do it.

## Styling

Make it look pretty!!! Use sass, bootstrap, materialize, some css library you found, or any combination thereof. No matter which library you use, you should use sass for the local styles. That is, you can include bootstrap, and then include your own css that has been compiled from sass. If you followed the directions of the main tutorial, you should be set up to use sass already (using .scss files).

Why would you want to use bootstrap and your own css/sass? Maybe you have some custom layout ideas, or some custom animations. Using your own css/sass with a library like bootstrap is not only possible, it's standard practice.

## Add the ability to edit the director of a movie

Now that you have the movies and directors set up, you can add this functionality. You don't want users to be able to simply type in the director though. Instead, it should be a select box that displays a list of director names. When the edit form is accessed, you'll have to populate this select box by getting all of the directors from the database. The value of each select option should be the director's id (that's its primary key). Then when the movie is saved, you can use the value of the currently selected option to assign the director id to that movie when you send the `PUT` request. If that sounds confusing, read it a few more times and discuss it with your colleagues. Make sure to include an option for none in case that director isn't in the database.

## Require logins to edit/add/delete movies

This one's important. We only want logged in users to be able to edit, add, or delete movies. Use the authHelper methods to protect the necessary routes. Refer to previous lectures :D

## Require logins to edit/add directors

This one's also important. We only want logged in users to be able to edit or add directors. Use the authHelper methods to protect the necessary routes. Refer to previous lectures :D

## Add functionality to delete directors and require logins to do so

This one's tricky. If you delete a director, you have to go through the movies database, find all the movies that list that director as its director, and remove the director id from the director id column. Why? Because if you have an id in that column and try to display the movie details when the director has been deleted, it won't work. Maybe it will work? I'm actually not sure. Test it out! If it works perhaps you don't really *need* to do the stuff I mentioned in the second, third, and fourth sentences. This is your opportunity to teach me something!!! I've thought of a few solutions here already that might be easier than the one I listed above. For example, if the director id of the movie doesn't correspond to a director in the director database, you simply display the option for 'none' when you display the movie information. Give it a go.

## Favorites

It would be great to include a feature so users can favorite the movies they like. There should be a table in the database that has a movie id column and a user id column. With those two pieces of data you can keep track of who favorites what. Can you display the number of favorites a movie has on the main movie page? Can you list a user's favorite movies on their user profile page? Each movie should have some buttons, displayed only when the user is logged in, to either favorite or un-favorite a movie (the functionality for these is essentially the same). This needs a route, of course. You should use AJAX for this. That is, the page shouldn't refresh or anything when a movie is liked or unliked. What happens if a movie that somehow has favorites is deleted? Something to consider...

## Use some third party API for something

IMDB sounds like it might be a good idea. I haven't really thought this one through. Do something cool.

## Social authentication

This one is tricky. Use one of the passport oauth strategies, like the facebook one. The strategy might not be too tough to implement, but you also need to figure out how to store that user in the database since he or she won't have a username. Instead, facebook, or whatever platform you're using, will provide some kind of unique id. For this you need to add a column to the user's table to house that oauth id, then you need to make some new routes for the oauth login.

Question: why wouldn't you want to use the username column to house the id provided by the oauth provider? Go tell Vince if you think you know the answer to this one. He'll give you a cookie if you get it right.

Have fun you awesome web developers!!!

## Implement authorization

Instead of letting everyone add, edit and delete movies, see if you can implement an authorization system. First you'll have to add an isAdmin column to the users table. Then protect the routes according to that.

## Use AJAX for editing directors

Instead of having a whole route for editing the name of a director, implement the functionality such that on the directors page, there is a small edit button next to the director (when the user is logged in). When clicked, the name should become editable, then when saved, make an AJAX request to the proper endpoint to update the name. Voilà!

Deep breaths.
