## AXIOS CHEATSHEET

Because we adore you folks, we put together a little [axios](https://www.npmjs.com/package/axios) cheatsheet for the hw <3

#### AXIOS GET

```javascript
getRequest() {
  const url = 'put url here from firebase';
  axios.get(url)
    .then((response) => {
      console.log(response)
      // then do whatever you want with the response.
      // set state is a cool option....
      // this.setState({ response })
    })
    .catch((error) => {
      console.log(error);
    })
}
```

#### AXIOS POST

```javascript
postRequest() {
  const url = 'put url here';
  axios.post(url, {
    // an example of how data can be sent...
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(() => {
    // once you post, what other request should be made? maybe retrieve the current state of the database?? maybe ?
    console.log("POSTED");
  })
  .catch((error) => {
    console.log(error);
  });
}
```

#### AXIOS PATCH
```javascript
patchRequest() {
  // with the url you use for PATCH,
  // how do you rout the request the specific item you want to change?
  const url = 'put url here';
  axios.patch(url, {
    // an example of how data can be sent...
    firstName: this.state.firstName,
    lastName: this.state.lastName
  })
  .then((response) => {
      console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
}
```

#### AXIOS DELETE
```javascript
deleteRequest() {
  // with the url you use for DELETE,
  // how do you route the request the specific item you want to delete?
  const url = 'put url here';
  axios.delete(url)
    .then(() => {
      // what other actions do you want to take when deleting data...  
    })
    .catch((error) => {
      console.log(error);
    });
  }
}
```
