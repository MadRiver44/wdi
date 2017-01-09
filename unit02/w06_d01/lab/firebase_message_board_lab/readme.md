## Lab 1 - Create A Locally Hosted Firebase App (40min)

In the `firebase_message_board_lab` folder you will find the following files/folder:

- css
    + style.css
- js
    + app.js
    + keys.js 
- index.html

### Setup Firebase

* Review: [Adding Firebase To Your JS Project](https://firebase.google.com/docs/web/setup)

1. Signup for a free account at Firebase.com
2. In the FB Console create a new app called "HM-MSG-FORUM"
3. On the OVERVIEW page click "Add Firebase To Your Web App"
4. Copy all the code into keys.js
5. Go to your app and click on Database
6. Click on "Rules" and change both Read and Write to true:
```javascript
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

### Configure HTML
1. Add the appropriate script tags just before body closing tag for:
    - firebase.js
    - app.js 
    - keys.js 

### Configure app.js
1. Follow the instructions in app.js to create the code needed to 
2. Once all your js code has been added run `firebase serve`

## Lab 2 - Host Your App On Firebase (15min)

### Setup Firebase Hosting
1. Open terminal
2. cd into the lab folder
3. run `npm install -g firebase-tools`. 
4. run `firebase login`.
5. run `firebase init`
    - select "Hosting: Configure and deploy Firebase Hosting sites"
    - select the Firebase App you created which should be "HM-MSG-FORUM"
    - continue to hit enter until wizard completes
6. You will see the following files\folders:
    - .firebasesrc
    - database.rules.json
    - firebase.json 
    - public (folder)
7. Move the following folders\files into public folder:
    -css
    -js
    index.html 
8. run `firebase deploy` to push to files to firebase hosting
9. open the url stated in the return results and confirm site is working

### Bonus 
Whiteboard the bootstrap html and include all css for each class


