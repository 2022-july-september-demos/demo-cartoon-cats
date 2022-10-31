const { Router } = require('express');
const { cats } = require('../cats-data');

module.exports = Router()
  .get('/:id', (req, res) => {
    let match;
    for (const cat of cats) {
      if (cat.id === req.params.id) {
        match = cat;
      }
    }

    return res.json(match);
  })
  .get('/', (req, res) => {
    const filteredData = [];
    for (const cat of cats) {
      filteredData.push({ id: cat.id, name: cat.name });
    }
    res.json(filteredData);
  });
