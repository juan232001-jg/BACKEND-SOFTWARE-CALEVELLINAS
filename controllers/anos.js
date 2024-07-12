import AnosCurso from '../models/anos.js';
// preguntas
const anosControllers = {
    anosGet: async(req, res) => {
        const value = req.query.value;
        const anosNuevo = await AnosCurso
            .find({
                $or: [{ ano: new RegExp(value, 'i') }]
            }).sort({ 'ano': -1 })
            .populate({ path: 'curso', select: ['nombreCurso', 'nombreSede'] })
            .populate({ path: 'nombreEtudiante', select: ['nombre', 'apellidos', 'numeroDocuemnto'] })
            .populate({ path: 'sede', select: ['nombreSede'] })
        res.json({ anosNuevo });
    },
    anosPost: async(req, res) => {
        const { curso, nombreEtudiante, sede, ano } = req.body;
        const anosNuevo = new AnosCurso({ curso, nombreEtudiante, sede, ano });
        await anosNuevo.save();
        res.json({ anosNuevo });
    },
    anosPut: async(req, res) => {
        const { id } = req.params;
        const { _id, createdAt, __v, ...resto } = req.body;
        const anosNuevo = await AnosCurso.findByIdAndUpdate(id, resto);
        res.json({ anosNuevo });

    },
    anosDelete: async(req, res) => {
        const { id } = req.params;
        const anosNuevo = await AnosCurso.findByIdAndDelete(id);
        res.json({ anosNuevo });

    }

}
export default anosControllers;