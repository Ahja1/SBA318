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
