// Importo o metódo middleware
import { createStore, applyMiddleware } from 'redux';

// importo o thunk, para chamadas assincronas
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

// gerando a store e aplicando o middleware na aplicação
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
