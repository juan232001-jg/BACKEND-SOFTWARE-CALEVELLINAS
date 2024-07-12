import Sedes from '../models/sedes.js'
const validarSedes = {
    sedeById: async(id) => {
        const existe = await Sedes.findById(id);
        if (!existe) { throw new Error(`El id ${id} no coresponde a ninguna sede`); }
    },
    sedesNombre: async(nombreSede) => {
        const existe = await Sedes.findOne({ nombreSede })
        if (existe) { throw new Error(`El nombre ${nombreSede} ya esta registrado`); }
    },
    sedesNumero: async(numeroSede) => {
        const existe = await Sedes.findOne({ numeroSede });
        if (existe) { throw new Error(`El numero de sede ${numeroSede} ya esta registrado`); }
    }
}
export default validarSedes;