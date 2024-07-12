import Acudientes from '../models/acudientes.js';
const acudienteControllers = {
    acudientesGet: async(req, res) => {
        const value = req.query.value;
        const acudientes = await Acudientes
            .find({
                $or: [
                    { nombreComplecto: new RegExp(value, 'i') },
                    { dirrecion: new RegExp(value, 'i') },
                    { tipoDocuemneto: new RegExp(value, 'i') },
                    { email: new RegExp(value, 'i') }
                ]
            })
            .sort({ "nombreComplecto": -1 });
        res.json({ acudientes });
    },
    acudientePost: async(req, res) => {
        const { nombreComplecto, dirrecion, tipoDocuemneto, numeroDocuemnto, telefono, telefonoalterno, email } = req.body
        const acudientes = new Acudientes({ nombreComplecto, dirrecion, tipoDocuemneto, numeroDocuemnto, telefono, telefonoalterno, email });
        await acudientes.save();
        res.json({ acudientes });
    },
    acudientePut: async(req, res) => {
        const { id } = req.params;
        const { _id, createdAt, __v, ...resto } = req.body;
        const acudientes = await Acudientes.findByIdAndUpdate(id, resto);
        res.json({ acudientes });
    },
    acudientesDelete: async(req, res) => {
        const { id } = req.params;
        const acudientes = await Acudientes.findByIdAndDelete(id);
        res.json({ acudientes });
    }
}
export default acudienteControllers;