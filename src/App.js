import React, { Component } from 'react';
import CambiarCiudad from './containers/CambiarCiudad'
import CiudadActual from './containers/CiudadActual'
import Prueba from './containers/Prueba'

class App extends Component {
  render() {
    return (
      <div>
        <CambiarCiudad/>
        <CiudadActual/>
        <Prueba/>
      </div>
    );
  }
}
//se muestra CambiarCiudad, ya que dentro de esa clase está el connect con Botones, el cual tiene la estructura de los botones conectado con la funcionalidad.
export default App;
