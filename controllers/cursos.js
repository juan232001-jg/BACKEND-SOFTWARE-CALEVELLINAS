import Cursos from '../models/cursos.js';
// corregir
const cursosControllers = {
    cursosGet: async(req, res) => {
        const value = req.query.value;
        const cursos = await Cursos

            .find()
            // .populate('nombreSede', 'nombreSede')
            .populate({ path: 'nombreSede', select: ['numeroSede', 'nombreSede'] })
            // .populate({ path: 'nombreSede', select: 'nombreSede' })
        res.json({ cursos });
    },
    cursosPost: async(req, res) => {
        const { nombreCurso, numeroCurso, nombreSede } = req.body;
        const cursos = new Cursos({ nombreCurso, numeroCurso, nombreSede });
        await cursos.save();
        res.json({ cursos });

    },
    cursosPut: async(req, res) => {
        const { id } = req.params;
        const { _id, createdAt, __v, ...resto } = req.body;
        const cursos = await Cursos.findByIdAndUpdate(id, resto);
        res.json({ cursos });
    },
    cursosDelete: async(req, res) => {
        const { id } = req.params;
        const sede = await Cursos.findByIdAndDelete(id);
        res.json({ sede });
    }

}
export default cursosControllers;