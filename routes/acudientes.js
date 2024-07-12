import Routes from 'express';
import acudienteControllers from '../controllers/acudientes.js';
import { check } from 'express-validator';
import { validarJWT } from '../middleware/validar-jwt.js';
import { validarRoles } from '../middleware/validar-rol.js';
import { validarCampos } from '../middleware/validarCampos.js';
import acudienteValidar from '../helpers/acudientes.js';
const router = Routes();
router.get('/', [
    validarJWT,
    validarRoles('ADMIN_ROL', 'DOCENTE_ROL'),
    validarCampos
], acudienteControllers.acudientesGet);
router.post('/', [
    validarJWT,
    validarRoles('ADMIN_ROL'),
    check('nombreComplecto', 'El campo nombre completo no puede estar vasio').not().isEmpty(),
    check('dirrecion', 'El campo dirrecion no puede estar vasio').not().isEmpty(),
    check('tipoDocuemneto', 'El campo tipo de documneto no puede estar vasio').not().isEmpty(),
    check('numeroDocuemnto', 'El campo numero de documento no puede estar vasio').not().isEmpty(),
    check('numeroDocuemnto').custom(acudienteValidar.numeroDocuemnto),
    check('telefono', 'El campo telefono no puede estar vasio').not().isEmpty(),
    check('telefono', 'El campo telefono no puede estar vasio').not().isEmpty(),
    validarCampos,
], acudienteControllers.acudientePost);
router.put('/:id', [
    validarJWT,
    validarRoles('ADMIN_ROL'),
    check('id', 'El ID ingresado npo es valido').isMongoId(),
    check('id').custom(acudienteValidar.acudientesByid),
    check('nombreComplecto', 'El campo nombre completo no puede estar vasio').not().isEmpty(),
    check('dirrecion', 'El campo dirrecion no puede estar vasio').not().isEmpty(),
    check('tipoDocuemneto', 'El campo tipo de documneto no puede estar vasio').not().isEmpty(),
    check('numeroDocuemnto', 'El campo numero de documento no puede estar vasio').not().isEmpty(),
    check('telefono', 'El campo telefono no puede estar vasio').not().isEmpty(),
    check('telefono', 'El campo telefono no puede estar vasio').not().isEmpty(),
    validarCampos
], acudienteControllers.acudientePut);
router.delete('/:id', [
    validarJWT,
    validarRoles('ADMIN_ROL'),
    check('id', 'El ID ingresado npo es valido').isMongoId(),
    check('id').custom(acudienteValidar.acudientesByid),
    validarCampos
], acudienteControllers.acudientesDelete);

export default router;