import React from 'react'
import { useGlobals } from '../state/GlobalProvider'

const Header = () => {
    const { toggleTheme } = useGlobals()
    return (  
        <div className='py-sm flex justify-end'>
            <button onClick={ toggleTheme } className='btn-primary '>Click me to toggle the theme</button>
        </div>
    )
}

export default Header