import mongoose from 'mongoose'
const docentesShema = mongoose.Schema({
    nombres: { type: String, required: true, maxlength: 30 },
    apellidos: { type: String, required: true, maxlength: 30 },
    numeroDocumento: { type: Number, required: true, unique: true, maxlength: 20 },
    telefono: { type: Number, required: true, maxlength: 30 },
    fachaNacimiento: { type: String, required: true, maxlength: 20 },
    email: { type: String, maxlength: 30, default: 'Sin correo' },
    lugarRecidencia: { type: String, required: true, maxlength: 30 },
    usuario: { type: String, required: true, unique: true },
    rol: { type: String, required: true, maxlength: 20 },
    password: { type: String, required: true },
    estado: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now }
})
export default mongoose.model('Docente', docentesShema)