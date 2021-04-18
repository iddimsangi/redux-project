import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import  reducer  from './Store/reducer';
import counterReducers from './Store/reducers/counter';
import resultReducers from './Store/reducers/result';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
const rootReducers = combineReducers({
    ctr_red: counterReducers,
    res_red: resultReducers
})
const store = createStore(rootReducers);

ReactDOM.render(<Provider store = {store}><App/></Provider>, document.getElementById('root'));
// ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
