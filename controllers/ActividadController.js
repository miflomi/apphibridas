import Actividad from "../models/ActividadModel.js";
const crearActividad = async ( request, response) =>{
    const body = request.body;
    if( !body.nombre || !body.categoria){
        response.status(404).json( {msg: "Faltan campos obligatorios"});
        return;
    }
    const nuevaActividad =  new Actividad(body);
    const actividad = await nuevaActividad.save();

    response.json({ msg: "Actividad creada", data: actividad});
}

const listarActividades = async ( request, response) =>{
    const actividades = await Actividad.find();
    response.json( {data: actividades });
}

const getActById = async ( request, response) => {
    const id = request.params.id;
    const act = await Actividad.findById(id);
    if( act){
        response.status(200).json( {data: act});
    } else {
        response.status(404).json({ msg: 'Actividad no Encontrada'});
    }
}

const deleteActById = async ( request, response) => {
    const id = request.params.id;
    const act = await Actividad.findByIdAndDelete(id);
    if( act){
        response.status(200).json( {data: act});
    } else {
        response.status(404).json({ msg: 'Actividad no Encontrada'});
    }
}
const updeteActById = async ( request, response) => {
    const id = request.params.id;
    const body = request.body;

    const act = await Actividad.findByIdAndUpdate(id, body);
    if( act){
        response.status(200).json( {data: act});
    } else {
        response.status(404).json({ msg: 'Actividad no Encontrada'});
    }
}


export { crearActividad, listarActividades, getActById, deleteActById, updeteActById };
