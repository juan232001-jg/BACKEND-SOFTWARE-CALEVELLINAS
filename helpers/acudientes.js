import Acudiente from '../models/acudientes.js'
const acudienteValidar = {
    numeroDocuemnto: async(numeroDocuemnto) => {
        const existe = await Acudiente.findOne({ numeroDocuemnto });
        if (existe) { throw new Error(`El numero de documento ${numeroDocuemnto} ya existe`) }
    },
    acudientesByid: async(id) => {
        const existe = await Acudiente.findById(id);
        if (!existe) { throw new Error(`El ID ${id} no corespnde a niningun acudiente`) }
    }
}
export default acudienteValidar;