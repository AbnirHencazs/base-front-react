import React, { createContext, useContext, useReducer } from 'react'
import reducer from './GlobalReducer'
import { SET_THEME } from '../utils/constants'

const GlobalContext = createContext({
    theme: 'light',
    toggleTheme: () => {}
})

const useGlobals = () => {
    const context = useContext(GlobalContext)
    if(!context)
        throw new Error("Can't useGlobals without a GlobalProvider")

    return context
}

const GlobalProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer( reducer, {
        theme: 'light'
    } )

    const toggleTheme = () => {
        dispatch({
            type: SET_THEME,
            payload: ''
        })
    }

    return(
        <GlobalContext.Provider
            value={{
                theme: state.theme, toggleTheme
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export { useGlobals }

export default GlobalProvider