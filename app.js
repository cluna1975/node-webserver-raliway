require ('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT;
const hbs = require('hbs');

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//Contenido Estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home',{
    nombre:'Christian Luna',
    titulo:'Curso de Node'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic',{
    nombre:'Christian Luna',
    titulo:'Curso de Node'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements',{
    nombre:'Christian Luna',
    titulo:'Curso de Node'
  });
});

app.get('*', (req, res) => {
  res.render('home',{
    nombre:'Christian Luna',
    titulo:'Curso de Node'
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})