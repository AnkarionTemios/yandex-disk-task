import React from 'react'

import { Route, Redirect } from 'react-router-dom'
import { isUserAuthenticated } from 'helpers'

export const UnauthenticatedRoute = ({ component, path, exact, props }) => {
  if (isUserAuthenticated()) {
    return <Redirect to="/" />
  } else {
    return <Route component={ component } path={ path } exact={ exact } { ...props } />
  }
}