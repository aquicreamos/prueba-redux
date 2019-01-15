import {createStore} from 'redux'
import {ciudad} from '../reducers/ciudad' // cada vez que se ejecute el action creator, interactúa con el store, y él interactúa con los reducers

export const store = createStore(ciudad, window.STATE_FROM_SERVER) // crear el store enviando los reducers