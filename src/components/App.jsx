import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../styles/main.css'
import { useGlobals } from '../state/GlobalProvider'

export const App = () => {
  const { theme } = useGlobals()
  return (
      <div className={`${ theme === 'dark' ? 'dark' : '' } h-full`}>
        <div className='bg-ui-01 dark:bg-ui-07 h-full'>
          <Header/>
          <div className='p-xxs'>
            <h1 className='dark:text-text-inverse'>Hello, Inmediatum</h1>
            <p className='dark:text-text-inverse'>I'm a react application built with the bare minimum</p>
            <div className='flex w-full justify-center items-center h-96'>
              <span className='text-text-inverse'>Secret message</span>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
  )
}
