import {createStore} from 'redux';
import reducer from './reducers';


    import {obtenerStateStorange,guardarStateStorange} from './localstorange';


// //Definir state inicial
// const initialState=[];
 const storageState = obtenerStateStorange();


const store = createStore(
    reducer,
    storageState,
    // initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);


store.subscribe(()=>{

    guardarStateStorange({
        citas: store.getState().citas
    })

})
export default store;