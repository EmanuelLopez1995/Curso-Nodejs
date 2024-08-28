

const validaCampos = require('../middlewares/validar-campos');
const validarJWT = require('../middlewares/validar-jwt');
const validaRoles = require('../middlewares/validar-roles');

module.exports = {
    ...validaCampos, // trae todo lo que exporte
    ...validarJWT, // trae todo lo que exporte
    ...validaRoles, // trae todo lo que exporte
}