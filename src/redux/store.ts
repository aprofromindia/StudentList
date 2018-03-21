import { createStore, combineReducers } from 'redux';
import students from './students';

export default createStore(combineReducers({ students }));
