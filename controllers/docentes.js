import Docentes from '../models/docentes.js';
import bcryptjs from 'bcryptjs';
import { gernerarjwt } from '../middleware/validar-jwt.js';
const docentesControllers = {
    docenteGet: async(req, res) => {
        const value = req.query.value;
        const docente = await Docentes
            .find({
                $or: [
                    { nombres: new RegExp(value, 'i') },
                    { apellidos: RegExp(value, 'i') },
                ]
            }).sort({ "nombres": -1 })
            .populate('nombreSede', 'nombreSede');
        res.json({ docente });
    },
    docentesPost: async(req, res) => {
        const { nombres, rol, apellidos, numeroDocumento, telefono, fachaNacimiento, email, lugarRecidencia, genero, usuario, password } = req.body;
        const docente = new Docentes({ nombres, rol, apellidos, numeroDocumento, telefono, fachaNacimiento, email, lugarRecidencia, genero, usuario, password });
        const salt = bcryptjs.genSaltSync(10);
        docente.password = bcryptjs.hashSync(password, salt);
        await docente.save();
        res.json({ docente });

    },
    loginPost: async(req, res) => {
        const { usuario, password } = req.body;
        //bucar en base de datos  usuario o posswords
        const docente = await Docentes.findOne({ usuario: usuario });
        if (!docente) {
            return res.status(400).json({ msg: 'Usuario o Password no son correctas USUARIO' });
        }
        const validartPsasword = bcryptjs.compareSync(password, docente.password);
        if (!validartPsasword) {
            return res.status(400).json({ msg: 'Usuario o Password no son correctas CONTASEÑA ' });
        }
        if (docente.estado === 0) {
            return res.status(400).json({ msg: 'Usuario o Password no son correctas INACTIVO' });
        }
        const token = await gernerarjwt(docente.id);
        res.json({ docente, token });
    },
    docentePut: async(req, res) => {
        const { id } = req.params;
        const { _id, createdAt, __v, password, ...resto } = req.body;
        if (password) {
            const salt = bcryptjs.genSaltSync();
            resto.password = bcryptjs.hashSync(password, salt)
        }
        const docente = await Docentes.findByIdAndUpdate(id, resto);

        res.json({ docente });
    },
    docentePutActivar: async(req, res) => {
        const { id } = req.params;
        const docentes = await Docentes.findByIdAndUpdate(id, { estado: 1 });
        res.json({
            docentes
        })
    },
    docentePutDesactivar: async(req, res) => {
        const { id } = req.params;
        const docentes = await Docentes.findByIdAndUpdate(id, { estado: 0 });
        res.json({
            docentes
        })
    },
    docenteDelente: async(req, res) => {
        const { id } = req.params;
        const docente = await Docentes.findByIdAndDelete(id);
        res.json({ docente });
    }

}
export default docentesControllers;