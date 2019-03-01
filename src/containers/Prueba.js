import React, { Component } from 'react';
import {connect} from 'react-redux';


//prueba para usar el estado en otro componente
class Prueba extends Component {
    render() {
        return (
            <>
                {this.props.ciudadrecibida}
            </>
        );
    }
}
const mapStateToProps = state => ({ciudadrecibida:state.ciudadEscogida});

export default connect(mapStateToProps,null)(Prueba);