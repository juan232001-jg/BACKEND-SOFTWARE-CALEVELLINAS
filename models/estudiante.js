import mongoose from 'mongoose'

const estudianteShema = mongoose.Schema({
    apellidos: { type: String, maxlength: 30, required: true, },
    nombre: { type: String, maxlength: 30, required: true },
    numeroDocuemnto: { type: String, required: true, unique: true, maxlength: 30 },
    tipoDocuemneto: { type: String, required: true, maxlength: 30 },
    nombreAcudiente: { type: mongoose.Schema.Types.ObjectId, ref: 'Acudiente', required: true },
    genero: { type: String, required: true, maxlength: 20 },
    fachaNacimiento: { type: String, required: true, maxlength: 20 },
    tipoSangre: { type: String, required: true, maxlength: 30 },
    dirrecion: { type: String, required: false, maxlength: 30, default: 'Sin Derricion' },
    telefono: { type: Number, required: true, maxlength: 30 },
    email: { type: String, maxlength: 30, default: 'Sin correo' },
    tipoSeguro: { type: String, required: true, maxlength: 10 },
    nombreEps: { type: String, required: true, maxlength: 20 },
    enfermedades: { type: String, maxlength: 225, default: 'Ninguna' },
    cuidadosEspeciales: { type: String, maxlength: 225, default: 'Ninguno' },
    aperaciones: { type: String, maxlength: 30, default: 'Sin Operaciones ' },
    alergias: { type: String, maxlength: 30, default: 'Sin Alergias ' },
    nombreEm: { type: String, maxlength: 50, required: true },
    telefonoEm: { type: Number, required: true, maxlength: 30 },
    dirrecionEm: { type: String, maxlength: 30, default: 'Sin Derricion' },
    createdAt: { type: Date, default: Date.now }
})
export default mongoose.model('Estudiante', estudianteShema)