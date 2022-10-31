const express = require('express');
const { cats } = require('./cats-data');
const app = express();

app.use('/hello', (req, res) => {
  res.send('hello world!');
});

// we don't want to have to do this!

// app.use('/cats/1', (req, res) => {
//   return res.json({
//     id: '1',
//     name: 'Felix',
//     type: 'Tuxedo',
//     url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Felix_the_cat.svg/200px-Felix_the_cat.svg.png',
//     year: 1892,
//     lives: 3,
//     isSidekick: false,
//   });
// });
// app.use('/cats/2', (req, res) => {
//   return res.json({
//     id: '2',
//     name: 'Garfield',
//     type: 'Orange Tabby',
//     url: 'https://static.wikia.nocookie.net/garfield/images/9/9f/GarfieldCharacter.jpg',
//     year: 1978,
//     lives: 7,
//     isSidekick: false,
//   });
// });

app.use('/cats/:id', (req, res) => {
  console.log('generic route for cats/ANYTHING');
  // whatever is after the slash will be stored in req.params.id
  console.log(req.params.id);
  // const match = cats.find((cat) => cat.id === req.params.id);

  // below is functional equivelant of .find
  let match;
  for (const cat of cats) {
    if (cat.id === req.params.id) {
      match = cat;
    }
  }

  return res.json(match);
});
app.use('/cats', (req, res) => {
  const filteredData = [];
  for (const cat of cats) {
    filteredData.push({ id: cat.id, name: cat.name });
  }
  res.json(filteredData);
});

module.exports = app;
