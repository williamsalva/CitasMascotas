import React from 'react';
import {useSelector} from 'react-redux';
import { borrarCitaAction} from '../actions/citasActions';
import { useDispatch } from 'react-redux';
import {Link} from "react-router-dom";
import { Redirect } from 'react-router';


//sfc comoando para  funcion controlles

const ListadoCitas = ({history}) => {

    //obtener las citas del state
    const citas = useSelector((state)=> state.citas);
    console.log(citas);

    //mensaje condicional
    const mensaje = Object.keys (citas.citas).length === 0 ? 'No hay citas': 'Administrar las citas aquí ';

    //dispach para mandar a llamar la funcion de eliminar
   
    const dispatch = useDispatch();

    return ( 
        <div className ="card mt-5">
            <div className="card-body">
                <h2 className ="card-title text-center"> {mensaje}</h2>
                <div className ="lista-citas">
                    
                    {citas.citas.map(cita =>(
                      <Link to = {`/show/${cita.id}`}>
                         <div className="card mb-4 text" key ={cita.id}>
                           <div className="card-body d-flex">
                              <h3 className="card-title d-inline w-100">Nombre de la mascota: {cita.mascota}</h3>
                              <button onClick = { ()=> dispatch (borrarCitaAction(cita.id))}
                                    className="btn btn-outline-danger d-inline flex-shrink-1  ml-5 mr-2"><i className="fas fa-trash-alt"></i> </button>
                                <Link to= {`/Editar/${cita.id}`}  className = "btn btn-outline-light d-inline flex-shrink-1 "><i className="far fa-edit"></i></Link>
                              </div>
                        </div>
                     </Link>
                    ))
                    }
                 </div>
                  <Link to= {`/Agregar`}  className = "btn btn-primary colorprimary">Agregar nueva cita</Link>
             </div>
        </div>
       );
}  
export default  ListadoCitas;