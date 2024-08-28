// require('colors');

// const mostrarMenu = ()=>{

//     return new Promise(resolve =>{
//         console.clear();
//         console.log('====================='.green);
//         console.log('Seleccione una opcion'.green);
//         console.log('=====================\n'.green);

//         console.log(`${'1'.green}. Crear una tarea`);
//         console.log(`${'2'.green}. Listar tareas`);
//         console.log(`${'3'.green}. Listar tareas completadas`);
//         console.log(`${'4'.green}. Listar tareas pendientes`);
//         console.log(`${'5'.green}. Completar tarea(s)`);
//         console.log(`${'5'.green}. Completar tarea(s)`);
//         console.log(`${'6'.green}. Borrar tarea`);
//         console.log(`${'0'.green}. Salir\n`);

//         //preparamos la interfaz del usuario para que pueda ingresar datos
//         const readline = require('readline').createInterface({ 
//             input: process.stdin, // se esperqa que el usuario haga algo
//             output: process.stdout // le retorna una vista al usuario
//         })

//         readline.question('Seleccione una opcion: ', (opt)=>{ // esto es el texto que le muestra al usuario
//             readline.close();
//             resolve(opt);
//         })
//     })
    
// }

// const pausa = ()=>{

//     return new Promise(resolve =>{
//         const readline = require('readline').createInterface({ 
//             input: process.stdin, // se esperqa que el usuario haga algo
//             output: process.stdout // le retorna una vista al usuario
//         })
    
//         readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt)=>{ // esto es el texto que le muestra al usuario
//             readline.close();
//             resolve();
//         })
//     })
    
// }

// module.exports = {
//     mostrarMenu,
//     pausa
// }