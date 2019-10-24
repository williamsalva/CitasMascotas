import React, {useEffect}from 'react';
import {obtenerCitaaMostrar} from '../actions/citasActions';
import {borrarValoresCita} from '../actions/citasActions';
import {useDispatch } from 'react-redux'
import {useSelector} from 'react-redux';

   const MostrarCita = ( {match,history}) => {
    
      // Dispatch para ejecutar acciones
      const {id} = match.params;
    
    
     const dispatch = useDispatch()
        
   
  useEffect(() => {
        dispatch(obtenerCitaaMostrar(id));
    return () => {
        dispatch(borrarValoresCita());
      };
     }, [dispatch,id]);

                              

   
    
  const cita = useSelector(state => state.citas.cita[0])  
  
   if (!cita) {
            return '...cargando';
        }
      return (
        <div className="card mt-5">
        <div className="card-body">
            <h2 className="card-title text-center mb-5 colorsecond">Datos de la cita de {cita.mascota} </h2>
             <h4>Propietario: {cita.propietario}</h4>
             <h4>Fecha: {cita.fecha}</h4>
             <h4>Hora: {cita.hora}</h4>
             <h4>Síntomas: {cita.sintomas}</h4>
            </div>
            </div>
       
    );
}
 
export default MostrarCita;