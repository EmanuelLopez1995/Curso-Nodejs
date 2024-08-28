const fs = require('fs');
const color = require('colors');

const crearArchivo = async (base = 5, listar= false, hasta = 10)=>{
    

    try{
        let salida = '';
    
        for(let i=1 ; i <= hasta; i++){
            salida += `${base} x ${i} = ${i * base}\n`;
        }

        if(listar){
            console.log('================='.rainbow);
            console.log(`Tabla del ${base}`);
            console.log('================='.rainbow);
            console.log(salida);
        }
            

        await fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`
    }catch(error){
        throw error;
    }

}

module.exports = {
    crearArchivo // exportamos la funcion crearArchivo con el nombre crearArchivo
}