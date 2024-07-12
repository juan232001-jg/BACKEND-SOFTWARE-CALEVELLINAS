import express from 'express';
import cors from 'cors';
import dbConetion from '../data/confi.js';
import estudiantes from '../routes/estudinate.js';
import sedes from '../routes/sedes.js';
import cursos from '../routes/cursos.js';
import docentes from '../routes/docentes.js';
import periodos from '../routes/periodos.js';
import notas from '../routes/notas.js';
import anocurso from '../routes/anos.js';
import materias from '../routes/materias.js'
import acudientes from '../routes/acudientes.js'
class Server {
    constructor() {
        //servidor
        this.port = process.env.PORT;
        this.app = express();
        //conecion a base de datos
        this.conecionBD();
        // midlewares
        this.middelwares();
        //rutas o routes 
        this.routes();
    }
    routes() {
        this.app.use('/clavellinas/estudiantes', estudiantes);
        this.app.use('/clavellinas/sedes', sedes);
        this.app.use('/clavellinas/cursos', cursos);
        this.app.use('/clavellinas/docentes', docentes);
        this.app.use('/clavellinas/periodos', periodos);
        this.app.use('/clavellinas/notas', notas);
        this.app.use('/clavellinas/anocurso', anocurso);
        this.app.use('/clavellinas/materias', materias);
        this.app.use('/clavellinas/acudientes', acudientes);
        // this.app.use('/clavellinas/');
    }
    async conecionBD() {
        await dbConetion();
    }
    middelwares() {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.static('public'))
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor coriendo en puerrto ${process.env.PORT}`)
        })
    }
}
export default Server