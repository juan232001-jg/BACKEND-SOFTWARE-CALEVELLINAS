    import Sedes from '../models/sedes.js';

    const sedesControllers = {
        sedeGet: async(req, res) => {
            const value = req.query.value;
            const sedes = await Sedes
                .find({
                    $or: [
                        { nombreSede: new RegExp(value, 'i') },
                        { numeroSede: new RegExp(value, 'i') },
                        { ubicacion: new RegExp(value, 'i') }
                    ]
                }).sort({ 'nombreSede': -1 });
            res.json({ sedes });
        },
        sedePots: async(req, res) => {
            const { nombreSede, numeroSede, ubicacion } = req.body;
            const sedes = new Sedes({ nombreSede, numeroSede, ubicacion });
            await sedes.save();
            res.json({ sedes })
        },
        sedePut: async(req, res) => {
            const { id } = req.params;
            const { _id, createdAt, __v, ...resto } = req.body;
            const sedes = await Sedes.findByIdAndUpdate(id, resto);
            res.json({ sedes });
        },
        sedeDelete: async(req, res) => {
            const { id } = req.params;
            const sede = await Sedes.findByIdAndDelete(id);
            res.json({ sede });
        }
    }
    export default sedesControllers;