import Anos from '../models/anos.js';
import Curso from '../models/cursos.js';
import Estudiante from '../models/estudiante.js';
import Sedes from '../models/sedes.js';
const anosValidar = {
    curso: async(curso) => {
        const existe = await Curso.findById(curso);
        if (!existe) { throw new Error(`El Curso ungresado no se encuentra resgistrado`) }
    },
    nombreEtudiante: async(nombreEtudiante) => {
        const existe = await Estudiante.findById(nombreEtudiante);
        if (!existe) { throw new Error(`El estudiante ingresado no se encuentra registrado`) }
    },
    sede: async(sede) => {
        const existe = await Sedes.findById(sede);
        if (!existe) { throw new Error('La sede ingresada no se encuntas registrada') }
    },
    id: async(id) => {
        const existe = await Anos.findById(id);
        if (!existe) { throw new Error('El Id ingresado no corecponde a ningun Curso') }
    },
}
export default anosValidar;