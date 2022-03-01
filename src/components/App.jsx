import React from 'react'
import useApi from '../hooks/useApi'

export const App = () => {
  const service = useApi()

  const handleClick = () => {
    service.get()
    .then((response) => {
      console.log("no prob", response)
    })
    .catch((err) => {
      console.error("problem", err)
    })
  }

  return (
    <div>
        <h1>Hello, Inmediatum</h1>
        <p>I'm a react application built with the bare minimum</p>
        <button onClick={() => handleClick()}>Make api call</button>
    </div>
  )
}
