const { response } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');



const usuariosGet = async (req, res = response) => {

    const { limite = 5, desde = 0} = req.query; // extrae el limite de la url y estaen 5 by default
    const query = {estado: true};

    const [total, usuarios] = await Promise.all([ // se hace desestructuracion de arreglos xq el promise all devuelve un arreglo
        Usuario.countDocuments(query),
        Usuario.find(query) // busca solo los que tienen estado true
            .limit(Number(limite)) // trae esa cantidad de resultados
            .skip( Number(desde)) //desde que registro
    ])
    res.json({
        total, 
        usuarios
    })
}

const usuariosPost = async (req, res = response) => { // insert

    const { nombre, correo, password, rol} = req.body; // este body toma lo que el usuario esta mandando
    const usuario = new Usuario({nombre, correo, password, rol}); // se envia los datos del body al modelo de usuario


    //encriptar la password
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    // grabar en BD
    await usuario.save();

    res.json({
        usuario
    })
}

const usuariosPut = async (req, res = response) => { // UPDATE

    const {id} = req.params;
    const {_id, password, google, correo, ...resto} = req.body;

    //  todo validar contra base de datos
    if(password){
        //encriptar la password
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);


    res.json(usuario);
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: "patch API - controlador"
    })
}

const usuariosDelete = async (req, res = response) => {

    const { id } = req.params;

    const usuario = await Usuario.findByIdAndUpdate(id, {estado : false});
    const usuarioAutenticado = req.usuario;

    res.json({
        usuario,
        usuarioAutenticado
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosDelete,
    usuariosPost,
    usuariosPatch
}