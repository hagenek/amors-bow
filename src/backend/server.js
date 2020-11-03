const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// Middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Get endpint: 

app.get('/profiles', (req, res) => {
  res.set('content-type', 'application/json');
  res.send(JSON.stringify([{name: "John Doe", age: 28}]));
});

const profiles = [];

app.listen(3000);
