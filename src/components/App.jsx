import React from 'react'
import GlobalProvider from '../state/GlobalProvider'
import Header from './Header'
import Footer from './Footer'

export const App = () => {
  return (
    <GlobalProvider>
        <Header/>
        <h1>Hello, Inmediatum</h1>
        <p>I'm a react application built with the bare minimum</p>
        <Footer/>
    </GlobalProvider>
  )
}
