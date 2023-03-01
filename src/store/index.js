import {createStore, combineReducers} from 'redux';
import reducerHome from './home/reduce';


const reducers = combineReducers({
    reducerHome
});

const store =  createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
);

export default store;