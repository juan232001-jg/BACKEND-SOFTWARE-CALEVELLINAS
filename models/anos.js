import mongoose from 'mongoose'
const anosShema = mongoose.Schema({
    curso: { type: mongoose.Schema.Types.ObjectId, ref: 'Curso', required: true, unique: false },
    nombreEtudiante: { type: mongoose.Schema.Types.ObjectId, ref: 'Estudiante', required: true, unique: false },
    sede: { type: mongoose.Schema.Types.ObjectId, ref: 'Sede', required: true, unique: false },
    ano: { type: String, required: false, unique: false, maxlength: 5 },
    createdAt: { type: Date, default: Date.now }
})
export default mongoose.model('Años', anosShema)