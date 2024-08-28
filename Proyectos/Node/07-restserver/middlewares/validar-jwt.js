const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario')

const validatJWT = async (req = request, res = response , next )=>{

    const token = req.header('x-token'); // para leer el token del header

    if(!token){ // verificamos que se envie el token
        return res.status(401).json({
            msg: 'No hay token en la peticion'
        })
    }

    try {

        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY); // verifica si el jwt es valido

        // leer el usuario que corresponde al uid
        const usuario = await Usuario.findById(uid);

        if(!usuario){
            return res.status(401).json({
                msg: 'Token no valido - usuario no existente en BD'
            })
        }

        // verificar si el uid tiene estado en true
        if( !usuario.estado){
            return res.status(401).json({
                msg: 'Token no valido - usuario con estado : false'
            })
        }

        req.usuario = usuario

        next(); // para que siga con el resto de middlewares
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no valido'
        })
    }

    

}

module.exports = {
    validatJWT
}