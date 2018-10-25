import React from 'react'

import { Router, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'
import { rootReducer } from 'store'
import createHistory from 'history/createBrowserHistory'

import { AuthenticatedRoute, UnauthenticatedRoute } from 'components'
import * as pages from 'pages'

const history = createHistory()

const historyMiddleware = routerMiddleware(history)

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, historyMiddleware))
)

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        
        <AuthenticatedRoute path="/" exact={ true } component={ pages.FilesPage } />

        <UnauthenticatedRoute path="/login" component={ pages.LoginPage } /> 

      </Switch>
    </Router>
  </Provider>
)

export default App