import {connect} from 'react-redux'
import Botones from '../components/Botones'
import {setCity} from '../actions'

//estos son stateful components, los cuales trabajan con el estado. Cada cambio que hacen llama al método render
const ciudades = [
    'Talca,cl',
    'San Carlos,cl',
    'Santiago,cl',
    'Paris',
    'Roma',
    'Barcelona',
    'Bogota',
    'Lima'
  ]

const mapStateToProps = state => ({ //mapStateToProps inyecto estados a las  props
    ciudades,//acá inyecté las ciudades, las cuales estarán en this.props.ciudades del componente al que se le inyectarán
    prueba: "lo inyecto desde CambiarCiudad a Botones"//se envía como prueba
})
const mapDispatchToProps = dispatch => ({//mapDispatchToProps inyecto Funciones a las props
    obtenerCiudad: ciudad => dispatch(setCity(ciudad)) //acá inyecto una función obtenerCiudad la cual recibe una ciudad y hace un dispatch de setCity, la cual viene del action creator
})

export default connect( //se conecta con el Componente Botones y se le pasa el mapstatetoprops y el mapdispatchtoprops para usarlos 
    mapStateToProps,
    mapDispatchToProps
  )(Botones)