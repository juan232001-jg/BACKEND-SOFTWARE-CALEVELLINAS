import jwt from 'jsonwebtoken';
import Docentes from '../models/docentes.js';
import { existeDocente } from '../helpers/docente.js';
const gernerarjwt = (uid = '') => {
    return new Promise((resolve, reject) => {
        checktoken();
        const payload = { uid }
        jwt.sign(payload, process.env.SECREPRIVATEKEY, {
            expiresIn: '10d'
        }, (err, token) => {
            if (err) {
                reject('No se pudo general el token');
            } else {
                resolve(token)
            }
        })


    })

}
const validarJWT = async(req, res, next) => {
    const token = req.header('token')
    if (!token) {
        return res.status(401).json({ msg: 'No hay token en la peticion' })
    }
    try {
        const { uid } = jwt.verify(token, process.env.SECREPRIVATEKEY);
        const docente = await Docentes.findById(uid);
        if (!docente) {
            return res.status(401).json({ msg: 'El token no valido' });
        }
        if (docente.estado === 0) {
            return res.status(401).json({ msg: 'token no valido' })
        }
        req.docente = docente
        next()

    } catch (error) {
        res.status(401).json({ msg: 'Token no valido' })
    }
}
async function checktoken(token) {
    let __id = null;
    try {
        const { _id } = await jwt.decode(token)
        __id = _id
    } catch (error) {
        return false;
    }
    const existeUsuario = existeDocente(__id);
}
export { gernerarjwt, validarJWT }