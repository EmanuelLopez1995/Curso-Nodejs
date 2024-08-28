const { response } = require("express")


const esAdminRole = (req, res = response, next)=>{

    if( !req.usuario){
        return res.status(500).json({
            msg: 'Se quiere verificar el role sin validar el token primero'
        });
    }

    const { rol, nombre } = req.usuario;

    if(rol !== 'ADMIN_ROLE'){
        return res.status(401).json({
            msg: `${nombre} no es admin`
        }); 
    }

    next();
}

// para recibir cantidad indefinida de argumentos se pone el ...roles entonces crea una array de los argumentos
const tieneRole = ( ...roles )=>{ 

    return (req, res = response, next)=>{
        // podemos usar los parametros aca
        
        if( !req.usuario){
            return res.status(500).json({
                msg: 'Se quiere verificar el role sin validar el token primero'
            });
        }

        if(!roles.includes(req.usuario.rol)){
            return res.status(401).json({
                msg: `El servicio requiere uno de estos roles ${roles}`
            })
        }

        next();
    }
}

module.exports = {
    esAdminRole,
    tieneRole
}