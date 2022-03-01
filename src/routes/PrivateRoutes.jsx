import React from 'react'
import Home from '../pages/Home'
import Products from '../pages/Products'
import { Switch, Route } from 'react-router-dom'
import Layout from '../containers/Layout'
import NotFound from '../pages/NotFound'

const PrivateRoutes = () => {
  return (
    <Layout>
        <Switch>
            <Route exact path="/" component={ Home }/>
            <Route exact path="/products" component={ Products }/>
            <Route path="*" component={ NotFound }/>
        </Switch>
    </Layout>
  )
}

export default PrivateRoutes