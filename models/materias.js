import mongoose from 'mongoose'
const materiasShema = mongoose.Schema({
    nombre: { type: String, required: true, unique: true, maxlength: 30 },
    descripcion: { type: String, maxlength: 100, default: 'Sin Descripción' },
    createdAt: { type: Date, default: Date.now }
})
export default mongoose.model('Materia', materiasShema);