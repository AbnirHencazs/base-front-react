import React from 'react'
import GlobalProvider from '../state/GlobalProvider'
import Header from './Header'
import Footer from './Footer'
import '../styles/main.css'

export const App = () => {
  return (
    <GlobalProvider>
      <div className='bg-brand-01 h-full'>
        <Header/>
        <div className='bg-brand-02 p-xxs'>
          <h1>Hello, Inmediatum</h1>
          <p className='text-text-inverse'>I'm a react application built with the bare minimum</p>
        </div>
        <Footer/>
      </div>
    </GlobalProvider>
  )
}
