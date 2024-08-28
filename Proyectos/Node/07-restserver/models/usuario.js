const { Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es opbligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es opbligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'El password es opbligatoria']
    },
    img: {
        type: String
    },
    rol: {
        type: String,
        required: [true, 'El rol es obligatorio'],
        emun: ['ADMIN_ROLE', 'USER_ROLE'] // valida que el rol es uno u otro
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
})

UsuarioSchema.methods.toJSON = function() {
    const { __v, password, _id, ...usuario } = this.toObject();
    usuario.uid = _id; // cambia el nombre de _id por uid en la respuesta json
    return usuario; // saca el password y la version para devolver solo el resto de los puntos como rol, estado, etc.
}

module.exports =model( 'Usuario' , UsuarioSchema); // El primer string mongoose le agrega una s al final