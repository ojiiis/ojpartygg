# OJParty

OJParty is a lightweight Node.js framework that functions similarly to Express.js but includes additional features like session management and file upload handling. It's designed to provide a more integrated experience for developers who need these features out of the box.

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
