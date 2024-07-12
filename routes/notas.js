import Routes from 'express';
import notasControllers from '../controllers/notas.js';
import { check } from 'express-validator';
import { validarJWT } from '../middleware/validar-jwt.js';
import { validarRoles } from '../middleware/validar-rol.js';
import { validarCampos } from '../middleware/validarCampos.js';
import notasValidar from '../helpers/notas.js';
const router = Routes();
router.get('/', [
    validarJWT,
    validarRoles('ADMIN_ROL', 'DOCENTE_ROL'),
], notasControllers.notasGet);
router.post('/', [
    validarJWT,
    validarRoles('ADMIN_ROL', 'DOCENTE_ROL'),
    check('anoCurso', 'El campo año en curso no puede estar vacio').not().isEmpty(),
    check('materia', 'El campo materia no puede estar vacio').not().isEmpty(),
    check('periodo', 'El campo periodo no puede estar vacio').not().isEmpty(),
    check('nota', 'El campo nota no puede estar vacio').not().isEmpty(),
    check('anoCurso', 'El Id Ingresado no es valido').isMongoId(),
    check('materia', 'El Id Ingresado no es valido').isMongoId(),
    check('periodo', 'El Id Ingresado no es valido').isMongoId(),
    check('anoCurso').custom(notasValidar.anoCurso),
    check('materia').custom(notasValidar.materia),
    check('periodo').custom(notasValidar.periodo),
    // check('').custom(),
    validarCampos
], notasControllers.notasPost);
router.put('/:id', [
    validarJWT,
    validarRoles('ADMIN_ROL', 'DOCENTE_ROL'),
    check('id', 'El id ingresado no es valido').isMongoId(),
    check('id').custom(notasValidar.id),
    check('anoCurso', 'El campo año en curso no puede estar vacio').not().isEmpty(),
    check('materia', 'El campo materia no puede estar vacio').not().isEmpty(),
    check('periodo', 'El campo periodo no puede estar vacio').not().isEmpty(),
    check('nota', 'El campo nota no puede estar vacio').not().isEmpty(),
    check('anoCurso', 'El Id Ingresado no es valido').isMongoId(),
    check('materia', 'El Id Ingresado no es valido').isMongoId(),
    check('periodo', 'El Id Ingresado no es valido').isMongoId(),
    check('anoCurso').custom(notasValidar.anoCurso),
    check('materia').custom(notasValidar.materia),
    check('periodo').custom(notasValidar.periodo),
    validarCampos
], notasControllers.notasPut);
router.delete('/:id', [
    validarJWT,
    validarRoles('ADMIN_ROL', 'DOCENTE_ROL'),
    check('id', 'El id ingresado no es valido').isMongoId(),
    check('id').custom(notasValidar.id),
    validarCampos
], notasControllers.notasDelete);

export default router;