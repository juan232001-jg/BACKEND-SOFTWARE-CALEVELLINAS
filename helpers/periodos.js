import Periodos from '../models/periodo.js';
const validarPeriodos = {
    nombrePeriodo: async(nombrePeriodo) => {
        const existe = await Periodos.findOne({ nombrePeriodo });
        if (existe) { throw new Error(`El ${nombrePeriodo} ya esta registrado`) }
    },
    nuemeroPeriodo: async(nuemeroPeriodo) => {
        const existe = await Periodos.findOne({ nuemeroPeriodo });
        if (existe) { throw new Error(`El ${nuemeroPeriodo} ya esta registrado `) }
    },
    periodosByid: async(id) => {
        const existe = await Periodos.findById(id);
        if (!existe) { throw new Error(`El Id ingresado no pertenece a ningun periodo`) }
    }
}
export default validarPeriodos;