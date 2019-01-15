import {SET_CITY} from '../actions'

const estadoInicial = {
  ciudadEscogida:"Talca"
}
export const ciudad = (state = estadoInicial, action)=> {// acá llega el estado de la aplicación actual y la action que viene del action creator. el cual tenía un type, un payload y también una variable de prueba "hola"
    console.log(action)//se puede ver ese objeto que viene del action creator
    switch (action.type) {
      case SET_CITY:
       /* return Object.assign({}, state, {
          ciudadEscogida: action.payload
        })*/
        return{...state,ciudadEscogida: action.payload}// se retorna un nuevo estado con su propiedad ciudadEscogida con el nuevo valor el cual viene del action creator y su propiedad payload. Si pusiera action.hola, la ciudadEscogida sería siempre el mensaje "viene del action creator", el cual puse como manera de prueba en actions
      default:
        return state
    }
  }
// cuando se retorna algo del switch, se retorna al store, el cual guarda el state para usarlo en otro lado de la APP