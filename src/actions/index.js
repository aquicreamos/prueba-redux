export const SET_CITY = 'SET_CITY';

export function setCity(payload) { //cada vez que se hace click se llama a este action creator y retorna un objeto con algo, en este caso un type, un payload que contiene la variable que se envió, y como prueba puse algo adicional. Esta action retorna algo al store para que se comunique con los reducers y actualice el state
    return { type: SET_CITY, payload, hola:"viene del action creator" }
  }