const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars')

const port = 3000;
const app = express()

app.use(express.static(path.join(__dirname,'public')));
// Template engine
app.engine('handlebars',handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views',path.join(__dirname,'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})