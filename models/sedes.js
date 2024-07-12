import mongoose from 'mongoose'

const sedesShema = mongoose.Schema({
    nombreSede: { type: String, required: true, unique: true, maxlength: 25 },
    numeroSede: { type: String, required: true, unique: true, maxlength: 5 },
    ubicacion: { type: String, maxlength: 50, default: 'Sin Ubicación' },
    createdAt: { type: Date, default: Date.now }
})
export default mongoose.model('Sede', sedesShema)