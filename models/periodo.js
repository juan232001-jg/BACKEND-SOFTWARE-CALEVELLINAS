import mongoose from 'mongoose'
const peridoShema = mongoose.Schema({
    nombrePeriodo: { type: String, required: true, unique: true, maxlength: 30 },
    nuemeroPeriodo: { type: String, required: true, unique: true, maxlength: 5 },
    createdAt: { type: Date, default: Date.now() }
})
export default mongoose.model('Periodo', peridoShema);