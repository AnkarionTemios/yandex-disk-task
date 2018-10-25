import React, { Component } from 'react'

import { connect } from 'react-redux'
import { authorizeToken } from 'store/files'

import { isUserAuthenticated } from 'helpers'

import queryString from 'query-string'

import { LoginButton, Page } from 'components'

import './LoginPage.css'

class LoginPage extends Component {
  
  componentDidMount() {
    if (!isUserAuthenticated() && window.location.search) {
      const parsedQuery = queryString.parse(window.location.search)
      this.props.authorizeToken(parsedQuery.code)
    }
  }
  
  render() {
    return (
      <Page error={ this.props.error } loading={ this.props.loading } className="login-page">
        <div className="d-flex h-100 justify-content-center align-items-center">
          <LoginButton />
        </div>
      </Page>
    )
  }
}

const mapStateToProps = state => ({
  ...state.files
})

const mapDispatchToProps = dispatch => ({
  authorizeToken: code => dispatch(authorizeToken(code))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)