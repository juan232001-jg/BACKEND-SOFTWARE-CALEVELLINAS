import Materias from '../models/materias.js';
const materiasControllers = {
    materiasGet: async(req, res) => {
        const value = req.query.value;
        const materias = await Materias
            .find({
                $or: [
                    { nombre: new RegExp(value, 'i') }
                ]
            })
            .sort({ "nombre": -1 });
        res.json({ materias });
    },
    materiasPost: async(req, res) => {
        const { nombre, descripcion } = req.body;
        const materias = new Materias({ nombre, descripcion });
        await materias.save();
        res.json({ materias });
    },
    materiasPut: async(req, res) => {
        const { id } = req.params;
        const { _id, createdAt, __v, ...resto } = req.body;
        const materias = await Materias.findByIdAndUpdate(id, resto);
        res.json({ materias })
    },
    materiasDelete: async(req, res) => {
        const { id } = req.params;
        const materias = await Materias.findByIdAndDelete(id);
        res.json({ materias })
    }
}
export default materiasControllers;