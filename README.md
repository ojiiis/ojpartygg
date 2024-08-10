# OJParty

OJParty is a lightweight Node.js framework that functions similarly to Express.js but includes addgitional features like session management and file upload handling. It's designed to provide a more integrated experience for developers who need these features out of the box.

## Features

- **Session Management**: Easily manage user sessions across your application.
- **File Upload Handling**: Simplified file uploads with built-in parsing and access to uploaded files.
- **Express-Like API**: Familiar syntax and functionality for those who have used Express.js.

## Installation

To install OJParty, use npm:

```bash
npm install ojparty
```
## Basic Usage

Below is an example of how to use OJParty to create a simple server with session management and file upload capabilities.
```javascript
const ojp = require("ojparty");

const app = ojp.ojparty.app();

app.get("/", (req, res) => {
  // Record a session while the URL looks like this: localhost?name=value
  // All GET parameters can be accessed through req.query, which is an object.
  req.setSession('username', req.query.name);
  res.sendFile('index.html');
  // Here we set a session with a key named 'username' and the value from a GET parameter with the key 'name'.
});

app.get("/profile", (req, res) => {
  // All set sessions can be accessed through req.session, which is an object.
  res.send(`Welcome to your profile page, ${req.session.username}`);
});

app.post("/uploadfile", (req, res) => {
  // All uploaded files can be accessed through the req.files object.
  res.send(`
    ${JSON.stringify(req.files)}
  `);
  /*
    Uploaded file sample response:

    {
      "0": {
        "size": 5,
        "file": {
          "type": "Buffer",
          "data": [116, 101, 116, 13, 10]
        },
        "fileName": "exe.txt",
        "contentType": "text/plain"
      },
      "1": {
        "size": 2,
        "file": {
          "type": "Buffer",
          "data": [13, 10]
        },
        "fileName": "sample.txt",
        "contentType": "text/plain"
      }
    }
  */
});

app.post("/unset-session", (req, res) => {
  // Remove a session.
  // Pass the session key to remove a session.
  req.unsetSession('username');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('Your session has been unset');
});

app.listen(210, () => {
  console.log('Server is running on port 210');
});

```


## API Reference

### `app.get(path, callback)`

Handles GET requests to the specified path.

- **path**: The route path.
- **callback**: Function to handle the request and response objects.

### `app.post(path, callback)`

Handles POST requests to the specified path.

- **path**: The route path.
- **callback**: Function to handle the request and response objects.

### `app.delete(path, callback)`

Handles DELETE requests to the specified path.

- **path**: The route path.
- **callback**: Function to handle the request and response objects.

### `app.options(path, callback)`

Handles OPTIONS requests to the specified path.

- **path**: The route path.
- **callback**: Function to handle the request and response objects.

### `req.setSession(key, value)`

Sets a session value.

- **key**: The session key.
- **value**: The value to store in the session.

### `req.session`

An object that contains all active sessions.

### `req.unsetSession(key)`

Unsets a session value.

- **key**: The session key to remove.

### `req.files`

An object containing all uploaded files.

### `req.body`

An object containing all form request params.

### `req.query`

An object containing all request url params.



### `res.send(data)`

Sends a response to the client with the specified data.

- **data**: The data to send to the client. This can be a string, object, or buffer.

### `res.sendFile(filePath)`

Serves a static file to the client.

- **filePath**: The path to the file that should be served to the client.





