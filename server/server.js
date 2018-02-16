const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([
  {
    name: 'JP',
    age: 25
  },
  {
    name: 'Coiso',
    age: 26
  },
  {
    name: 'Cenas',
    age: 27
  }
  ]);
});

app.listen(3000);

module.exports.app = app;
