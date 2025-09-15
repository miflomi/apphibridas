import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const esquema = new Schema({
    nombre: String,
    clave: String,
    email: String,
    tel: Number
});

const Usuario = mongoose.model('Usuario', esquema);

export default Usuario;