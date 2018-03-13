import { createStore } from 'redux';
import { city } from './../reducers/city';

const initalState = {
  city: 'Santiago,scl'
}

//vincular plugin devtools con nuestra aplicación
export const store = createStore(city, initalState,
  window.__REDUX_DEVTOOLS_EXTENSION__&&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);