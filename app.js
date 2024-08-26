const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


//Routes

let babyNames = [];

app.get('/', (req, res) => {
  res.render('index', { babyNames });
});

app.get('/names/new', (req, res) => {
  res.render('new');
});

app.post('/names', (req, res) => {
  babyNames.push(req.body.name);
  res.redirect('/');
});

app.get('/names/:id/edit', (req, res) => {
  const name = babyNames[req.params.id];
  res.render('edit', { name, id: req.params.id });
});

app.put('/names/:id', (req, res) => {
  babyNames[req.params.id] = req.body.name;
  res.redirect('/');
});

app.delete('/names/:id', (req, res) => {
  babyNames.splice(req.params.id, 1);
  res.redirect('/');
});
