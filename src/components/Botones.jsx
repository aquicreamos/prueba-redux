import React from 'react'

//estos son componentes Stateless, estos componentes no tienen ni trabajan con estados, solo hacen algo con las props recibidas

const Botones = ({ciudades,prueba,obtenerCiudad})=>( //se obtiene un listado de ciudades y una función. Esto viene desde el container CambiarCiudad (vienen del mapstatetoprops y mapdispatchtoprops, también viene un atributo de prueba para ver bien el funcionamiento)
      <div>
        {
          ciudades.map((ciudad,i)=>(//recorro todas las ciudades para armar los botones
            <button key={i} onClick={() => obtenerCiudad(ciudad)} style={{"margin":"5px"}}>{ciudad}</button> // le agrego la función que me llegó como parámetro
          ))
        }
        {console.log(prueba)}
      </div>
)

export default Botones