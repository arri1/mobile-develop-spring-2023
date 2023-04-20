import { combineReducers } from 'redux';
import imageReducer from './imageReducer.js';
import reducer from './reducer.js'

const rootReducer = combineReducers({
  image: imageReducer,
  pokemon: reducer
});

export default rootReducer;