import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import favReducer from './reducers';

const rootReducer = combineReducers({
  favReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));