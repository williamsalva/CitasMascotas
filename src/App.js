import React from 'react';
import Agregarcita from './componentes/AgregarCita';
import Mostrarcita from './componentes/MostrarCita';
import Editarcita from './componentes/EditarCita';
import ListadoCitas from './componentes/ListadoCitas';
//Redux
import store from './store';
import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";




function App() {
  return (
    <Provider store={store}>

      <Router>
        <div className="container">
          <header>
           <h1>Administrador de pacientes</h1>
          </header>
        <div className="row">
          <div className="col-md-6">
           <ListadoCitas/>
          </div>
          <div className="col-md-6">
            <Switch>
              <Route exact path="/Agregar" component={Agregarcita}/>
              <Route exact path="/Show/:id" component={Mostrarcita}/>
              <Route exact path="/Editar/:id" component={Editarcita}/>
            </Switch>
          </div>
        </div>
       </div>
      </Router>


    </Provider>
   
  );
}

export default App;
