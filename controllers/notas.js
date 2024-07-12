import Notas from '../models/notas.js';
const notasControllers = {
    notasGet: async(req, res) => {
        const value = req.query.value;
        const datos = await Notas.find()
            .populate({ path: 'anoCurso', populate: ({ path: 'nombreEtudiante', select: ['nombre', 'apellidos', 'numeroDocuemnto'] }) })
            .populate({ path: 'materia', select: 'nombre' })
            .populate({ path: 'periodo', select: ['nombrePeriodo'] })
        const notas = await Notas
            .find({ anoCurso: value }

            ).sort({ "nota": -1 })
            .populate({ path: 'anoCurso', populate: ({ path: 'nombreEtudiante', select: ['nombre', 'apellidos', 'numeroDocuemnto'] }) })
            .populate({ path: 'materia', select: ['nombre'] })
            .populate({ path: 'periodo', select: ['nombrePeriodo'] })


        res.json({ notas, datos });
    },
    notasPost: async(req, res) => {
        const { materia, anoCurso, periodo, nota, profesor } = req.body;
        const notas = new Notas({ materia, anoCurso, periodo, nota, profesor });
        await notas.save();
        res.json({ notas });
    },
    notasPut: async(req, res) => {
        const { id } = req.params;
        const { _id, createdAt, __v, ...resto } = req.body;
        const notas = await Notas.findByIdAndUpdate(id, resto);
        res.json({ notas });


    },
    notasDelete: async(req, res) => {
        const { id } = req.params;
        const notas = await Notas.findByIdAndDelete(id);
        res.json({ notas });
    },

}
export default notasControllers;