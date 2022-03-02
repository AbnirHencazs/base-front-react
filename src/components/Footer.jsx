import React from 'react'
import { useGlobals } from '../state/GlobalProvider'

const Footer = () => {
    const { theme } = useGlobals()
    return (
        <div>
            <p>The theme is set to {theme} mode</p>
        </div>
    )
}

export default Footer