import React from 'react'

import { Route, Redirect } from 'react-router-dom'
import { isUserAuthenticated } from 'helpers'

export const AuthenticatedRoute = ({ component, path, exact, props }) => {
  if (isUserAuthenticated()) {
    return <Route component={ component } path={ path } exact={ exact } { ...props } />
  } else {
    return <Redirect to="/login" />
  }
}