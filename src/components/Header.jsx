import React from 'react'
import { useGlobals } from '../state/GlobalProvider'

const Header = () => {
    const { toggleTheme } = useGlobals()
    return (  
        <div>
            <button onClick={ toggleTheme }>Click me to toggle the theme</button>
        </div>
    )
}

export default Header