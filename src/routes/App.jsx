import React from 'react'
import { BrowserRouter, Switch, Route }  from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'
import Login from '../pages/Login'
import RecoveryPassword from '../pages/RecoveryPassword'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={ Login }/>
        <Route exact path="/recovery-password" component={ RecoveryPassword }/>
        <Route path="/" component={ PrivateRoutes }/>
      </Switch>
    </BrowserRouter>
  )
}
