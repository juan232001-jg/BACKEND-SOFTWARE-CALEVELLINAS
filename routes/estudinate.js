import Routes from 'express';
import estudiantesControllers from '../controllers/estudientes.js';
import { check } from 'express-validator';
import { validarJWT } from '../middleware/validar-jwt.js';
import { validarRoles } from '../middleware/validar-rol.js';
import { validarCampos } from '../middleware/validarCampos.js';
import estudiantesValidar from '../helpers/estudiantes.js'
const router = Routes();
router.get('/', [
    validarJWT,
    validarRoles('ADMIN_ROL', 'DOCENTE_ROL'),
    validarCampos
], estudiantesControllers.estudiantesGet);
router.post('/', [
    validarJWT,
    validarRoles('ADMIN_ROL'),
    check('apellidos', 'El campo apellidos no puede estar vacio').not().isEmpty(),
    check('nombre', 'El campo nombre no puede estar vacio').not().isEmpty(),
    check('numeroDocuemnto', 'El campo numero de Docuemnto no puede estar vacio').not().isEmpty(),
    check('numeroDocuemnto').custom(estudiantesValidar.numeroDocuemnto),
    check('tipoDocuemneto', 'El campo tipo de Docuemneto no puede estar vacio').not().isEmpty(),
    check('nombreAcudiente', 'El campo nombre de Acudiente no puede estar vacio').not().isEmpty(),
    check('nombreAcudiente', 'El id ingresado no es valido').isMongoId(),
    check('nombreAcudiente').custom(estudiantesValidar.nombreAcudiente),
    check('genero', 'El campo genero no puede estar vacio').not().isEmpty(),
    check('fachaNacimiento', 'El campo facha Nacimiento no puede estar vacio').not().isEmpty(),
    check('tipoSangre', 'El campo tipo Sangre no puede estar vacio').not().isEmpty(),
    check('telefono', 'El campo telefono no puede estar vacio').not().isEmpty(),
    check('tipoSeguro', 'El campo tipo de Seguro no puede estar vacio').not().isEmpty(),
    check('nombreEps', 'El campo nombre de la Eps no puede estar vacio').not().isEmpty(),
    check('enfermedades', 'El campo enfermedades no puede estar vacio').not().isEmpty(),
    check('cuidadosEspeciales', 'El campo cuidados Especiales no puede estar vacio').not().isEmpty(),
    check('aperaciones', 'El campo aperaciones no puede estar vacio').not().isEmpty(),
    check('alergias', 'El campo alergias no puede estar vacio').not().isEmpty(),
    check('nombreEm', 'El campo nombreEm no puede estar vacio').not().isEmpty(),
    check('telefonoEm', 'El campo telefonoEm no puede estar vacio').not().isEmpty(),
    check('dirrecionEm', 'El campo  dirrecionEm no puede estar vacio').not().isEmpty(),
    validarCampos
], estudiantesControllers.estudiantePots);
router.put('/:id', [
    validarJWT,
    validarRoles('ADMIN_ROL', 'DOCENTE_ROL'),
    check('id', 'El Id ingesado no es valido').isMongoId(),
    check('id').custom(estudiantesValidar.id),
    check('apellidos', 'El campo apellidos no puede estar vacio').not().isEmpty(),
    check('nombre', 'El campo nombre no puede estar vacio').not().isEmpty(),
    check('numeroDocuemnto', 'El campo numero de Docuemnto no puede estar vacio').not().isEmpty(),
    check('tipoDocuemneto', 'El campo tipo de Docuemneto no puede estar vacio').not().isEmpty(),
    check('nombreAcudiente', 'El campo nombre de Acudiente no puede estar vacio').not().isEmpty(),
    check('nombreAcudiente', 'El id ingresado no es valido').isMongoId(),
    check('nombreAcudiente').custom(estudiantesValidar.nombreAcudiente),
    check('genero', 'El campo genero no puede estar vacio').not().isEmpty(),
    check('fachaNacimiento', 'El campo facha Nacimiento no puede estar vacio').not().isEmpty(),
    check('tipoSangre', 'El campo tipo Sangre no puede estar vacio').not().isEmpty(),
    check('telefono', 'El campo telefono no puede estar vacio').not().isEmpty(),
    check('tipoSeguro', 'El campo tipo de Seguro no puede estar vacio').not().isEmpty(),
    check('nombreEps', 'El campo nombre de la Eps no puede estar vacio').not().isEmpty(),
    check('enfermedades', 'El campo enfermedades no puede estar vacio').not().isEmpty(),
    check('cuidadosEspeciales', 'El campo cuidados Especiales no puede estar vacio').not().isEmpty(),
    check('aperaciones', 'El campo aperaciones no puede estar vacio').not().isEmpty(),
    check('alergias', 'El campo alergias no puede estar vacio').not().isEmpty(),
    check('nombreEm', 'El campo nombreEm no puede estar vacio').not().isEmpty(),
    check('telefonoEm', 'El campo telefonoEm no puede estar vacio').not().isEmpty(),
    check('dirrecionEm', 'El campo  dirrecionEm no puede estar vacio').not().isEmpty(),
    validarCampos
], estudiantesControllers.estudiantesPut);
router.delete('/:id', [
    validarJWT,
    validarRoles('ADMIN_ROL'),
    check('id', 'El Id ingesado no es valido').isMongoId(),
    check('id').custom(estudiantesValidar.id),
    validarCampos
], estudiantesControllers.estudianteDelete);

export default router;