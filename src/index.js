import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import  reducer  from './Store/reducer';
import counterReducers from './Store/reducers/counter';
import resultReducers from './Store/reducers/result';
import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
const rootReducers = combineReducers({
    ctr_red: counterReducers,
    res_red: resultReducers
});
const logger = store =>{
    return next =>{
        return action =>{
            console.log('[Middleware] Dispatching ',action);
            const result = next(action);
            console.log('[Middleware] next state',store.getState());
            return result;
        }
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(<Provider store = {store}><App/></Provider>, document.getElementById('root'));
// ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
