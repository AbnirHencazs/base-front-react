import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Login = () => {
  const history = useHistory()
  return (
    <div>
        This is a Login page
        <form>
            <label>Username</label>
            <input type="text" />
            <label>password</label>
            <input type="password" />
        </form>

        <button onClick={() => history.push('/')}>Navigate to home</button>
    </div>
  )
}

export default Login