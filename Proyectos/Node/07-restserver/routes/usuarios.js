
const {Router} = require('express');
const { check } = require('express-validator');
const { usuariosGet,
        usuariosPost,
        usuariosPut,
        usuariosPatch,
        usuariosDelete
    } = require('../controllers/usuarios');
const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');

const { validarCampos, validatJWT, esAdminRole, tieneRole} = require('../middlewares');
    

const router = Router();

router.get('/', usuariosGet);

// como segundo parametro se pasan los middlewares 
// En este caso es un arreglo de middlewares
router.post('/', [
    check('correo', 'El correo no es valido').isEmail(), // revisa que el correo se manda y es valido
    check('nombre', 'El nombre es obligatorio').not().isEmpty(), //revisa que se envie el nombre
    check('correo').custom( emailExiste ), //revisa que se envie el nombre
    check('password', 'El password debe de ser de mas de 6 letras').isLength({min : 6}),
    // check('rol', 'No es un rol valido').isIn(['ADMIN:ROLE', 'USER_ROLE']), // verifica que sea alguno de esos dos
    check('rol').custom( esRoleValido ),
    validarCampos
] ,usuariosPost); 



router.put('/:id', [
    check('id', 'No es un id valido').isMongoId(), // Valida que sea un id valido de mongo
    check('id').custom( existeUsuarioPorId), // valida que exista el id
    check('rol').custom( esRoleValido ),
    validarCampos
] ,usuariosPut);

router.patch('/', usuariosPatch);

router.delete('/:id',[
    validatJWT,
    // esAdminRole,
    tieneRole('ADMIN_ROLE', 'VENTAS_ROLE', 'OTRO_ROLE'),
    check('id', 'No es un id valido').isMongoId(), // Valida que sea un id valido de mongo
    check('id').custom( existeUsuarioPorId), // valida que exista el id
    validarCampos
], usuariosDelete);


module.exports = router;