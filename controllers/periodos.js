import Periodos from '../models/periodo.js'
const periodosControllers = {
    periodosGet: async(req, res) => {
        const value = req.query.value;
        const periodos = await Periodos
            .find({
                $or: [
                    { nombrePeriodo: new RegExp(value, 'i') },
                    { nuemeroPeriodo: new RegExp(value, 'i') }
                ]
            })
            .sort({ 'nuemeroPeriodo': -1 });
        res.json({ periodos })
    },
    periodosPost: async(req, res) => {
        const { nombrePeriodo, nuemeroPeriodo } = req.body;
        const periodos = new Periodos({ nombrePeriodo, nuemeroPeriodo });
        await periodos.save();
        res.json({ periodos });
    },
    periodosPut: async(req, res) => {
        const { id } = req.params;
        const { _id, createdAt, __v, ...resto } = req.body;
        const periodos = await Periodos.findByIdAndUpdate(id, resto);
        res.json({ periodos });
    },
    periodosDelete: async(req, res) => {
        const { id } = req.params;
        const periodos = await Periodos.findByIdAndDelete(id);
        res.json({ periodos });
    }
}
export default periodosControllers;