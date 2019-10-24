export const agregarCitaAction = cita  => {
    return {

        type:'AGREGAR_CITA',
        payload:cita
     }
}
export const obtenerCitaaEditar = id =>{
           
    return{
        type:'OBTENER_CITA_EDITAR',
        payload:id
    }
}
export const obtenerCitaaMostrar = id =>{
           
    return{
        type:'OBTENER_CITA_MOSTRAR',
        payload:id
    }
}

export const borrarCitaAction = id  => {
    return {

        type:'BORRAR_CITA',
        payload:id
     }
}


export const borrarValoresCita =()=>{

    return {

        type:'BORRAR_VALOR_EDITAR'
    }
}

export const editarcitaAction = cita =>{

    return {
        type:'EDITAR_PRODUCTO',
        payload:cita
    }
}