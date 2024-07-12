import mongoose from 'mongoose'

const notasShema = mongoose.Schema({
    anoCurso: { type: mongoose.Schema.Types.ObjectId, ref: 'Años', required: true },
    materia: { type: mongoose.Schema.Types.ObjectId, ref: 'Materia', required: true },
    periodo: { type: mongoose.Schema.Types.ObjectId, ref: 'Periodo', required: true },
    nota: { type: String, require: true },
    createdAt: { type: Date, default: Date.now }
});
export default mongoose.model('Nota', notasShema);