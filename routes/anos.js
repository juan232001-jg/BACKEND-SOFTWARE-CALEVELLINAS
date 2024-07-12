import Routes from 'express';
import anosControllers from '../controllers/anos.js';
import { check } from 'express-validator';
import { validarJWT } from '../middleware/validar-jwt.js';
import { validarRoles } from '../middleware/validar-rol.js';
import { validarCampos } from '../middleware/validarCampos.js';
import anosValidar from '../helpers/anos.js';
const router = Routes();
router.get('/', [
    validarJWT,
    validarRoles('ADMIN_ROL', 'DOCENTE_ROL'),
], anosControllers.anosGet);
router.post('/', [
    validarJWT,
    validarRoles('ADMIN_ROL', 'DOCENTE_ROL'),
    check('curso', 'El campo curso  no puede estar vacio').not().isEmpty(),
    check('nombreEtudiante', 'El campo nombre Estudiante no puede estar vacio').not().isEmpty(),
    check('sede', 'El campo sede  no puede estar vacio').not().isEmpty(),
    check('ano', 'El campo ano no puede estar vacio').not().isEmpty(),
    check('curso', 'El curso Ingresado no es valido').isMongoId(),
    check('nombreEtudiante', 'El nombre Ingresado no es valido').isMongoId(),
    check('sede', ' La Sede Ingresado no es valida').isMongoId(),
    check('curso').custom(anosValidar.curso),
    check('nombreEtudiante').custom(anosValidar.nombreEtudiante),
    check('sede').custom(anosValidar.sede),
    validarCampos
], anosControllers.anosPost);
router.put('/:id', [
    validarJWT,
    validarRoles('ADMIN_ROL', 'DOCENTE_ROL'),
    check('id', 'El id ingresado no es valido').isMongoId(),
    check('id').custom(anosValidar.id),
    check('curso', 'El campo curso  no puede estar vacio').not().isEmpty(),
    check('nombreEtudiante', 'El campo nombre Estudiante no puede estar vacio').not().isEmpty(),
    check('sede', 'El campo sede  no puede estar vacio').not().isEmpty(),
    check('ano', 'El campo ano no puede estar vacio').not().isEmpty(),
    check('curso', 'El curso Ingresado no es valido').isMongoId(),
    check('nombreEtudiante', 'El nombre Ingresado no es valido').isMongoId(),
    check('sede', ' La Sede Ingresado no es valida').isMongoId(),
    check('curso').custom(anosValidar.curso),
    check('nombreEtudiante').custom(anosValidar.nombreEtudiante),
    check('sede').custom(anosValidar.sede),
    validarCampos
], anosControllers.anosPut);
router.delete('/:id', [
    validarJWT,
    validarRoles('ADMIN_ROL', 'DOCENTE_ROL'),
    check('id', 'El id ingresado no es valido').isMongoId(),
    check('id').custom(anosValidar.id),
    validarCampos
], anosControllers.anosDelete);

export default router;