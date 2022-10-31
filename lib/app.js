const express = require('express');
const { cats } = require('./cats-data');
const app = express();

app.use('/hello', (req, res) => {
  res.send('hello world!');
});

app.use('/cats', (req, res) => {
  const filteredData = [];
  for (const cat of cats) {
    filteredData.push({ id: cat.id, name: cat.name });
  }
  res.json(filteredData);
});

module.exports = app;
