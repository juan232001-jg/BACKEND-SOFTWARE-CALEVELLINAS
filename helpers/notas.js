import Notas from '../models/notas.js';
import AnoCurso from '../models/anos.js';
import Materias from '../models/materias.js';
import Periodos from '../models/periodo.js';
// const existe = await.findById()
// if (existe) { throw new Error('') }

const notasValidar = {
    anoCurso: async(anoCurso) => {
        const existe = await AnoCurso.findById(anoCurso)
        if (!existe) { throw new Error('El curso ingresado no se encuentra regitrado') }
    },
    materia: async(materia) => {
        const existe = await Materias.findById(materia)
        if (!existe) { throw new Error('La materia ingresa no esta registrada') }
    },
    periodo: async(periodo) => {
        const existe = await Periodos.findById(periodo)
        if (!existe) { throw new Error('El periodo ingresado no esta registrado') }
    },
    id: async(id) => {
        const existe = await Notas.findById(id)
        if (!existe) { throw new Error('El id ingresado no esta registrado') }
    },

}
export default notasValidar;