const express = require('express');
const os = require('os');
const app = express();

app.use(express.json());

app.get('/api/getUsername', (req, res) => {
  res.send({ username: "deployed-user" });
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello From Express' });
});

module.exports = app;