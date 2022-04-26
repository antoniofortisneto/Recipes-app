import { combineReducers } from 'redux';
import mealReducer from './mealReducer';

const rootReducer = combineReducers({ mealReducer });

export default rootReducer;
