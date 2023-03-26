import { combineReducers } from 'redux';
import imageReducer from './imageReducer.js';

const rootReducer = combineReducers({
  image: imageReducer,
});

export default rootReducer;