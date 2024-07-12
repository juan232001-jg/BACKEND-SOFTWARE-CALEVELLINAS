import Estudiantes from '../models/estudiante.js';
import Acudientes from '../models/acudientes.js';
const estudiantesValidar = {
    numeroDocuemnto: async(numeroDocuemnto) => {
        const existe = await Estudiantes.findOne({ numeroDocuemnto });
        if (existe) { throw new Error('El numero de indentificacion ya esta regitrada') }
    },
    nombreAcudiente: async(nombreAcudiente) => {
        const existe = await Acudientes.findById(nombreAcudiente)
        if (!existe) { throw new Error('El acudeinte ingresado no esta registrado') }
    },
    id: async(id) => {
        const existe = await Estudiantes.findById(id)
        if (!existe) { throw new Error('El id ingresado no esta no coreponde a ningun estudiante ') }
    }

}
export default estudiantesValidar;