import Routes from 'express';
import { check } from 'express-validator';
import materiasControllers from '../controllers/materias.js';
import { validarRoles } from '../middleware/validar-rol.js';
import validarMaterias from '../helpers/materias.js';
import { validarJWT } from '../middleware/validar-jwt.js';
import { validarCampos } from '../middleware/validarCampos.js';

const router = Routes();
router.get('/', [
    validarJWT,
    validarRoles('ADMIN_ROL', 'DOCENTE_ROL'),
    validarCampos
], materiasControllers.materiasGet);
router.post('/', [
    validarJWT,
    validarRoles('ADMIN_ROL', 'DOCENTE_ROL'),
    check('nombre').custom(validarMaterias.nombre),
    check('nombre', 'El campo nombre no pude estar vacio').not().isEmpty(),
    validarCampos
], materiasControllers.materiasPost);
router.put('/:id', [
    validarJWT,
    validarRoles('ADMIN_ROL', 'DOCENTE_ROL'),
    check('id', 'EL Id ingresado no es valido').isMongoId(),
    check('nombre', 'El campo nombre no pude estar vacio').not().isEmpty(),
    check('id').custom(validarMaterias.materiasBuId),
    validarCampos
], materiasControllers.materiasPut);
router.delete('/:id', [
    validarJWT,
    validarRoles('ADMIN_ROL', 'DOCENTE_ROL'),
    check('id', 'EL Id ingresado no es valido').isMongoId(),
    check('id').custom(validarMaterias.materiasBuId),
    validarCampos
], materiasControllers.materiasDelete);

export default router;