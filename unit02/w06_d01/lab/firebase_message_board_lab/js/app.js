$(document).ready(function() {

  // Store a reference to our Firebase DB
  let messageAppReference;

  // CREATE
  // An eventreceiver has been added to the form or button...your welcome..:} 
  $('#message-form').submit( (event) => {
  // if using a form use .submit...if using a button .click 
    
      // by default a form submit reloads the DOM which will subsequently reload all our JS
      // to avoid this we preventDefault().  If you opted for an onclick event for button outside of a form 
      // than this isn't needed

      // grab user message input
      let message;

      // clear message input (for UX purposes)

      // create a "messages" object in your db
      let messagesReference;

      // use the push method to save data to the messages object reference created above
      // the two properties were adding to the object are: 
      // message: message and votes: 0
 
  }) // submit eventreceiver

  // READ
  function getFanMessages() {
    // listens for any changes (any CRUD actions) to the messages reference (object) in our DB
    // use .on('value',function(results){}) for this
    messageAppReference.ref('messages').on('value', (results) => {
        // remove existing <li>'s from DOM; avoid duplicates.
          
        // use .forEach to iterate over the Firebase response
        // note: results is NOT an array, Array.isArray(results) === false
        results.forEach( (msg) => {
        // store the Firebase objects unique ID (will be used for updating and deleting)
        let id;

        // use .val() to obtain the actual JS obj from the Firebase obj
        // note: .val(), used in this context, is NOT the same as jQuery.val()
        let message;

        // pull and store our object's message and votes
        let messageText;
        let votes;

        // create a <li> element using jQuery
        let li;

        // create up vote element using font-awesome
        let upVoteElement;
        // add a click event to update that objects vote status

        // create down vote element using font-awesome
        let downVoteElement;
        // add a click event to update that objects vote status
        
        // create delete element using font-awesome
        let deleteElement;
        // add a click event to delete the object

        // add the message text to the <li>
        li;

        // add up\down voting elements to li
        li;
        li;

        // add delete element to li
        li;

        // render the vote count
        li;

        // finally, we can append our newly created <li> to the <ul class="message-board">
        
      }) // 
    }) // .on('value')
  } // getFenMessages

  // UPDATE
  function updateMessage (id, votes) {
    // find message whose objectId is equal to the id we're searching with
    let messageReference;

    // update votes property...use the .update() method
   
  }

  // DELETE
  function deleteMessage (id) {
      // find message whose objectId is equal to the id we're searching with
    let messageReference;
    // remove the item...use the .remove() method
    
  }

  // This will fetch messages and load into DOM once document is ready
  getFanMessages();
}) // document.ready

