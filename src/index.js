const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');

const port = 3000;
const app = express();

const route = require('./routes');

app.use(express.json()); // for parsing applicatin/jsom
app.use(express.urlencoded({extended: true}));
// static file
app.use(express.static(path.join(__dirname, 'public')));
// Template engine
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

// route init
route(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})