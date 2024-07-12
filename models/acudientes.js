import mongoose from 'mongoose'

const acudienteShema = mongoose.Schema({
    nombreComplecto: { type: String, required: true, maxlength: 50 },
    dirrecion: { type: String, required: true, maxlength: 30 },
    tipoDocuemneto: { type: String, required: true, maxlength: 30 },
    numeroDocuemnto: { type: Number, required: true, unique: true, maxlength: 30 },
    email: { type: String, required: false, maxlength: 30, default: 'Sin correo' },
    telefono: { type: Number, required: true, maxlength: 30 },
    telefonoalterno: { type: Number, maxlength: 30, default: 'Sin telefono alterno' },
    createdAt: { type: Date, default: Date.now }
});
export default mongoose.model('Acudiente', acudienteShema)