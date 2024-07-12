import Docentes from "../models/docentes.js";
const docentesValidar = {
    usuario: async(usuario) => {
        const existe = await Docentes.findOne({ usuario })
        if (existe) { throw new Error(`El Usuario ingresado ya se encuentra `) }
    },
    numeroDocumento: async(numeroDocumento) => {
        const existe = await Docentes.findOne({ numeroDocumento })
        if (existe) { throw new Error(`El numero de docuemto ${numeroDocumento} ya esta registrado `) }
    },
    docenteByid: async(id) => {
        const existe = await Docentes.findById(id);
        if (!existe) { throw new Error(`El id ${id} ingresado no corespnde a ningun docente`) }
    }
}
export default docentesValidar;
const existeDocente = async(id) => {
    const existe = await Docentes.findById(id)
    if (!existe) {
        throw new Error('El ID no Existe');
    }
}
export { existeDocente, }