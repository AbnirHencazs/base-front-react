import React from 'react'
import InmediatumLogo from '../static/img/logo.jpg'
import AWV from '../static/img/awv-checkin-illustration.svg'

export const App = () => {
  return (
    <div>
        <h1>Hello, Inmediatum</h1>
        <p>I'm a react application built with the bare minimum</p>
        <div>
          <span>Esto es una imagen, el proyecto está configurado para pasarle el artibuto src</span>
          <img src={InmediatumLogo}/>
        </div>
        <div>
          <span>Esto es un SVG, el proyecto está configurado para usarlos como componentes</span>
          <AWV/>
        </div>
    </div>
  )
}
