import {createStore } from 'redux';
import {reducer }from './reducers';
//store
export const store = createStore(reducer);