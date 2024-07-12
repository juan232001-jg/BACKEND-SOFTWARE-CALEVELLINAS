import Materias from '../models/materias.js';
const validarMaterias = {
    nombre: async(nombre) => {
        const existe = await Materias.findOne({ nombre });
        if (existe) { throw new Error(`El materia ${nombre} ya esta regitrado`) }
    },
    materiasBuId: async(id) => {
        const existe = await Materias.findById(id);
        if (!existe) { throw new Error(`El Id Ingresado no coresponde a ninguna materia`) }
    }
}
export default validarMaterias;