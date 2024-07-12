import Routes from 'express';
import cursosControllers from '../controllers/cursos.js';
import { check } from 'express-validator';
import { validarJWT } from '../middleware/validar-jwt.js';
import { validarRoles } from '../middleware/validar-rol.js';
import { validarCampos } from '../middleware/validarCampos.js';
import cursosValidar from '../helpers/cursos.js';
const router = Routes();
router.get('/', [
    validarJWT,
    validarRoles('ADMIN_ROL', 'DOCENTE_ROL'),
    validarCampos
], cursosControllers.cursosGet);
router.post('/', [
    validarJWT,
    validarRoles('ADMIN_ROL'),
    check('nombreCurso', 'El campo nombre curso no pude estar vacio').not().isEmpty(),
    check('numeroCurso', 'El campo numero de curso no pude estar vacio').not().isEmpty(),
    check('nombreSede', 'El campo nombres de sede no pude estar vacio').not().isEmpty(),
    check('nombreSede', 'El ID ingresado no es valido').isMongoId(),
    check('nombreSede').custom(cursosValidar.sedeByid),
    check('nombreSede').custom(cursosValidar.validarNombre),
    check('nombreCurso').custom(cursosValidar.validarnombreCurso),

    validarCampos
], cursosControllers.cursosPost);
router.put('/:id', [
    validarJWT,
    validarRoles('ADMIN_ROL'),
    validarCampos
], cursosControllers.cursosPut);
router.delete('/:id', [
    validarJWT,
    validarRoles('ADMIN_ROL'),
    validarCampos
], cursosControllers.cursosDelete);

export default router;