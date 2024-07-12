import mongoose from 'mongoose'
const cursoShema = mongoose.Schema({
    nombreCurso: { type: String, required: true, uniqued: false, maxlength: 20 },
    numeroCurso: { type: String, required: true, uniqued: false, maxlength: 5 },
    nombreSede: { type: mongoose.Schema.Types.ObjectId, ref: 'Sede' },
    createdAt: { type: Date, default: Date.now }
})
export default mongoose.model('Curso', cursoShema)