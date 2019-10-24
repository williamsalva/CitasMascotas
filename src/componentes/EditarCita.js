import React, {useEffect, useRef}from 'react';
import {editarcitaAction} from '../actions/citasActions';
import {obtenerCitaaEditar} from '../actions/citasActions';
import {borrarValoresCita} from '../actions/citasActions';
import {useDispatch } from 'react-redux'
import {useSelector} from 'react-redux';
import {Link} from "react-router-dom";




import {validarFormularioAction} from '../actions/validarActions';


const EditarCita = ( {match,history}) => {
    
      // Dispatch para ejecutar acciones
    const {id} = match.params;
    
    
    const dispatch = useDispatch()
        console.log(id);
   
     useEffect(() => {
           dispatch(obtenerCitaaEditar(id));
             return () => {dispatch(borrarValoresCita());};
     }, [dispatch,id]);

                              
    const EditarCita = (cita)=> dispatch(editarcitaAction(cita));
    const validarFormulario = (estado) => dispatch(validarFormularioAction(estado));
    const cita = useSelector(state => state.citas.cita[0])  
  
    const mascotaRef = useRef('');
    const propietarioRef = useRef('');
    const fechaRef = useRef('');
    const horaRef = useRef('');
    const sintomasRef = useRef('');
    
     //useSelector para poder usar el state de redux 

    const error = useSelector((state)=> state.error);
    
    // cuando el formulario es enviado
      const editarCita = e =>{
        e.preventDefault();
        const mascota=mascotaRef.current.value
        const propietario=propietarioRef.current.value
        const fecha=fechaRef.current.value
        const hora=horaRef.current.value
        const sintomas=sintomasRef.current.value

        //validar formulario


        if (mascota.trim()=== ''||propietario.trim()=== ''||fecha.trim()=== ''||hora.trim()=== ''
        ||sintomas.trim()=== '') {
            validarFormulario(true);
            return
      }
      validarFormulario(false);
       //crear 
        EditarCita({id,
            mascota,
            propietario,
            fecha,
            hora,
            sintomas
        })
        history.push('/');

        }

        if (!cita) {
            return 'No hay citas';
               
           }
      return (
          
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center mb-5">Editar las cita de {cita.mascota} </h2>
                <form onSubmit={editarCita}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota:</label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text" 
                                className="form-control" 
                                ref={mascotaRef}
                                defaultValue={cita.mascota}
                             />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño:</label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text" 
                                className="form-control"  
                                placeholder="Nombre Dueño de la Mascota"
                                defaultValue={cita.propietario}
                                ref={propietarioRef}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha:</label>
                        <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                            <input 
                                type="date" 
                                className="form-control"
                                defaultValue={cita.fecha}
                                ref={fechaRef}
                                />
                        </div>                            

                        <label className="col-sm-4 col-lg-2 col-form-label">Hora:</label>
                        <div className="col-sm-8 col-lg-4">
                            <input 
                                type="time" 
                                className="form-control" 
                                defaultValue={cita.hora}
                                ref={horaRef}
                             />
                        </div>
                    </div>
                    
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Síntomas:</label>
                        <div className="col-sm-8 col-lg-10">
                            <textarea 
                                className="form-control"
                                defaultValue={cita.sintomas}
                                ref={sintomasRef}
                              ></textarea>
                        </div>
                    </div>
                    <div className="form-group row justify-content-between mt-5">
                         <div className="col-sm-3">
                        <Link to= {`/`}  className = " ml-4 btn btn-danger">cancelar</Link>
                        </div>
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-success w-100">Guardar </button>
                        </div>
                     
                    </div>

                    

                </form>

                {error.error ? <div className="alert alert-danger text-center p2"> todos 
                los campos son obligatorios </div> :null}
               
            </div>
    </div>
    );
}
 
export default EditarCita;