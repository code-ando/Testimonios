

import './App.css'
import Testimonio from './components/Testimonio'
import React from 'react'
import imagene from './imagenes/01.jpg'
import dos from './imagenes/02.png'
import tres from './imagenes/03.png'
function App() {


  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo dicen nuestros Clientes</h1>
        <Testimonio
          nombre='Emma Boss'
          pais='Argentina'
          imagen={imagene}
          cargo='El rey de la casa'
         
          testimonio='Me da miedo que mi humana me deje solito' />

        <Testimonio
          nombre='Maran Boss'
          pais='Mexico'
          imagen={dos}
          cargo='Catador de camas'
         
          testimonio='Me gusta salir a pasear' />

        <Testimonio
          nombre='Clarita Boss'
          pais='Argentina'
          imagen={tres}
          cargo='Catador de galletas'
       
          testimonio='Me gusta comer galletas' />


      </div>
    </div>
  )
}

export default App;
