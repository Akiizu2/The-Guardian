import React, { memo } from 'react'

import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'

import { routes } from '../../config'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {
          routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
            >
              {route.component()}
            </Route>
          ))
        }
      </Switch>
    </BrowserRouter>
  )
}

export default memo(Router)