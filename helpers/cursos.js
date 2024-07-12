import Cursos from '../models/cursos.js';
import Sedes from '../models/sedes.js';
// solucionar pronblema 


const cusrosValidar = {
    validarnombreCurso: async(nombreCurso) => {
        const Existe = await Cursos.findOne({ nombreCurso });

    },
    sedeByid: async(nombreSede) => {
        const existe = await Sedes.findById(nombreSede);
        if (!existe) { throw new Error('El Id ingresado no coresponde  a ninguna sede') }
    },

    validarNombre: async(nombreSede) => {
        const existe = await Cursos.findOne({ nombreSede });
        if (existe) {
            const existe = cusrosValidar.validarnombreCurso()
            if (!existe) { throw new Error('la sede y el grado selcionado ya estan registrados') }
        }

    }
}


export default cusrosValidar;