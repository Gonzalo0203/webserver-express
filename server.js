const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 8080;
//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Gonzalo'
    });
});

app.get('/about', (req, res) => {

    res.render('about', {
        nombre: 'Gonzalo'
    });
});

app.listen(port, () => {
    console.log(`Escuchando Peticiones en el puerto ${port}`);
});