import Routes from 'express';
import { check } from 'express-validator';
import periodosControllers from '../controllers/periodos.js'
import validarPeriodos from '../helpers/periodos.js';
import { validarJWT } from '../middleware/validar-jwt.js';
import { validarRoles } from '../middleware/validar-rol.js';
import { validarCampos } from '../middleware/validarCampos.js';
const router = Routes();
router.get('/', [
    validarJWT,
    validarRoles('ADMIN_ROL', 'DOCENTE_ROL'),
    validarCampos
], periodosControllers.periodosGet);
router.post('/', [
    validarJWT,
    validarRoles('ADMIN_ROL'),
    check('nombrePeriodo').custom(validarPeriodos.nombrePeriodo),
    check('nuemeroPeriodo').custom(validarPeriodos.nuemeroPeriodo),
    check('nombrePeriodo', 'El campo nombre del periodo no pude estas vacio').not().isEmpty(),
    check('nuemeroPeriodo', 'El campo numero de periodo no pude estas vacio').not().isEmpty(),
    validarCampos
], periodosControllers.periodosPost);
router.put('/:id', [
    validarJWT,
    validarRoles('ADMIN_ROL'),
    check('id', 'El ID ingresado no es valido').isMongoId(),
    check('id').custom(validarPeriodos.periodosByid),
    check('nombrePeriodo', 'El campo nombre del periodo no pude estas vacio').not().isEmpty(),
    check('nuemeroPeriodo', 'El campo numero de periodo no pude estas vacio').not().isEmpty(),
    validarCampos
], periodosControllers.periodosPut);
router.delete('/:id', [
    validarJWT,
    validarRoles('ADMIN_ROL'),
    check('id', 'El ID ingresado no es valido').isMongoId(),
    check('id').custom(validarPeriodos.periodosByid),
    validarCampos
], periodosControllers.periodosDelete);

export default router;