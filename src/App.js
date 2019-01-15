import React, { Component } from 'react';
import CambiarCiudad from './containers/CambiarCiudad'
import CiudadActual from './containers/CiudadActual'

class App extends Component {
  render() {
    return (
      <div>
        <CambiarCiudad/>
        <CiudadActual/>
      </div>
    );
  }
}
//se muestra CambiarCiudad, ya que dentro de esa clase está el connect con Botones, el cual tiene la estructura de los botones conectado con la funcionalidad.
export default App;
