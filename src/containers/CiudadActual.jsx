import React, { Component } from 'react'
import {connect} from 'react-redux';

class CiudadActual extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.ciudad}</h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({ciudad:state.ciudadEscogida}); //como ya está guardado el nuevo state en el store, se puede utilizar así. se recibe un parámetro, el cual será el state que retornó el reducers y se guardó en el store. Se inyecta como una propiedad llamada ciudad y se le da el valor con la propiedad ciudadEscogida. Todo viene del reducer
export default connect(mapStateToProps,null)(CiudadActual);// se conecta este componente y se le inyecta el mapstatetoprops para que tenga la propiedad ciudad y poder mostrarla en pantalla