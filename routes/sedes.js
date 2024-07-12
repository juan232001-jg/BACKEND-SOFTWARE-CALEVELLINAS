import { Router } from 'express';
import sedesControllers from '../controllers/sedes.js'
import { check } from 'express-validator';
import { validarCampos } from '../middleware/validarCampos.js';
import { validarRoles } from '../middleware/validar-rol.js';
import validarSedes from '../helpers/sedes.js';
import { validarJWT } from '../middleware/validar-jwt.js';
const router = Router();
router.get('/', [
    validarJWT,
    validarRoles('ADMIN_ROL', 'DOCENTE_ROL'),
], sedesControllers.sedeGet);
router.post('/', [
    validarJWT,
    validarRoles('ADMIN_ROL'),
    validarRoles('ADMIN_ROL'),
    check('nombreSede', 'El campo nombre sede no puede esatr vacio').not().isEmpty(),
    check('numeroSede', 'El Campo numero de sede no puede estar vacio ').not().isEmpty(),
    check('nombreSede').custom(validarSedes.sedesNombre),
    check('numeroSede').custom(validarSedes.sedesNumero),
    validarCampos
], sedesControllers.sedePots);
router.put('/:id', [
    validarJWT,
    validarRoles('ADMIN_ROL'),
    validarRoles('ADMIN_ROL'),
    check('id', 'El ID ingresado no es valido').isMongoId(),
    check('id').custom(validarSedes.sedeById),
    check('nombreSede', 'El campo nombre sede no puede esatr vacio').not().isEmpty(),
    check('numeroSede', 'El Campo numero de sede no puede estar vacio ').not().isEmpty(),
    validarCampos
], sedesControllers.sedePut);
router.delete('/:id', [
    validarJWT,
    validarRoles('ADMIN_ROL'),
    validarRoles('ADMIN_ROL'),
    check('id', 'El ID ingresado no es valido').isMongoId(),
    check('id').custom(validarSedes.sedeById),
    validarCampos
], sedesControllers.sedeDelete);

export default router;