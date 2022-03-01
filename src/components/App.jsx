import React from 'react'
import '../styles/main.css'

export const App = () => {
  return (
    <div className="bg-brand-01 h-full">
        <h1>Hello, Inmediatum</h1>
        <div className='bg-brand-02 p-xxs'></div>
        <p className='text-text-inverse'>I'm a react application built with the bare minimum</p>
        <div className='py-md bg-brand-03 relative animate-pulse'>
          <div className='absolute bottom-0 left-0 py-xs w-12 bg-error'></div>
        </div>
    </div>
  )
}
