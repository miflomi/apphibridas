import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const esquema = new Schema({
    nombre: String,
    categoria: String,
    profesor: String,
    dias: String,
    horario: String,
    costo: Number
});

const Actividad = mongoose.model('Actividad', esquema);

export default Actividad;