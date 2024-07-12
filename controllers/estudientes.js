import Estudiantes from '../models/estudiante.js';
const estudiantesControllers = {
    estudiantesGet: async(req, res) => {
        const value = req.query.value;
        const estudiante = await Estudiantes
            .find({
                $or: [
                    { apellidos: new RegExp(value, 'i') },
                    { nombre: new RegExp(value, 'i') },
                    { numeroDocuemnto: new RegExp(value, 'i') }
                ]
            })
            .sort({ "nombre": -1 })
            .populate('grado', 'nombreCurso')
            .populate('nombreAcudiente', 'nombreComplecto')
            .populate('sede', 'nombreSede')
        res.json({ estudiante });
    },
    estudiantePots: async(req, res) => {
        const { apellidos, nombre, numeroDocuemnto, tipoDocuemneto, nombreAcudiente, grado, sede, fachaNacimiento, tipoSangre, dirrecion, telefono, email, tipoSeguro, nombreEps, enfermedades, cuidadosEspeciales, aperaciones, alergias, genero, nombreEm, telefonoEm, dirrecionEm } = req.body;
        const estudiantes = new Estudiantes({ apellidos, nombre, numeroDocuemnto, tipoDocuemneto, nombreAcudiente, grado, sede, fachaNacimiento, tipoSangre, dirrecion, telefono, email, tipoSeguro, nombreEps, enfermedades, cuidadosEspeciales, aperaciones, alergias, genero, nombreEm, telefonoEm, dirrecionEm });
        await estudiantes.save();
        res.json({ estudiantes });
    },
    estudiantesPut: async(req, res) => {
        const { id } = req.params;
        const { _id, createdAt, __v, ...resto } = req.body;
        const estudiante = await Estudiantes.findByIdAndUpdate(id, resto);
        res.json({ estudiante });
    },
    estudianteDelete: async(req, res) => {
        const { id } = req.params;
        const estudiante = await Estudiantes.findByIdAndDelete(id);
        res.json({ estudiante });
    }

}
export default estudiantesControllers;