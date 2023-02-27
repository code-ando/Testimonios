import React from 'react'

import '../hojas-estilos/Testimonio.css'
import '../hojas-estilos/index.css'


 function Testimonio(props) {
   return (
    <div className='contenedor-testimonio'>
        <img
            className='imagen-testimonio'
            src={props.imagen}
            alt='foto de chihiro'/>
         <div className='contenedor-texto-testimonio'>
            <p className='nombre-testimonio'> <strong>{props.nombre}</strong> desde {props.pais} </p>
            <p className='nombre-cargo'> <strong>{props.cargo}</strong> </p>
            <p className='texto-testimonio'> {props.testimonio} </p>
         </div>  


        
    </div>
  );
}



export default Testimonio
