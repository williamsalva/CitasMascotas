const initialState ={
    citas:[],
    cita:[]
}

export default function(state= initialState, action){

    switch (action.type) {
        case 'AGREGAR_CITA':
            return {
                ...state,
                citas: [...state.citas, action.payload]
            }
       case 'BORRAR_CITA':
            return {
                ...state, 
                citas: state.citas.filter(cita => cita.id !== action.payload )
                  }
       
        case 'BORRAR_VALOR_EDITAR':
            return {
                ...state,
                cita:[]
            }
        case 'OBTENER_CITA_EDITAR':
            return {
               ...state,
                 cita:state.citas.filter(cita => cita.id === action.payload)
                }
        case 'OBTENER_CITA_MOSTRAR':
            return {
                ...state,
                 cita:state.citas.filter(cita => cita.id === action.payload)
            }
        case 'EDITAR_PRODUCTO':
            return{
                ...state,
                citas: state.citas.map(cita => cita.id === action.payload.id?cita=action.payload : cita)
          }
        default:
            return state;
    }
}