const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//HandleBars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.render('home', {
        nombre: 'Ema',
        titulo: 'Curso de node'
    });
})

app.get('/generic', (req, res) =>{
    res.render('generic', {
        nombre: 'Ema',
        titulo: 'Curso de node'
    });
})

app.get('/elements', (req, res) =>{
    res.render('elements', {
        nombre: 'Ema',
        titulo: 'Curso de node'
    });
})

app.get('*', (req, res) =>{
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`)
});