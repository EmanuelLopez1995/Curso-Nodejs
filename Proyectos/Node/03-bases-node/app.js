
const { crearArchivo } = require('./helpers/multiplicar.js');
const argv = require('./config/yargs');
const color = require('colors');


console.clear();

crearArchivo( argv.b, argv.l, argv.h )
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'.green))
    .catch(err => console.log(err)) 

