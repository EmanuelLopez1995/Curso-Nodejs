const argv = require('yargs')
                    .option('b', { // definimos una letra con la que se va a llamar en consola
                        alias: 'base', // el alias seria --base
                        type: 'number', // el tipo de dato
                        demandOption: true, // se vuelve obligaorio
                        describe: 'Es la base de la tabla de multiplicar' //descripcion del comando
                    })
                    .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Muestra la tabla en consola'
                    })
                    .option('h', {
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        describe: 'Hasta que numero se debe multiplicar'
                    })
                    .check((argv, options) =>{ // argv ya va a traer los datos que se mandaron por consola
                        if(isNaN(argv.b)){ // validamos que se envie un numero
                            throw 'La base tiene que ser un numero';
                        }
                        if(isNaN(argv.h)){ // validamos que se envie un numero
                            throw 'El h debe ser un numero';
                        }
                        return true;
                    })
                    .argv;

module.exports = argv;