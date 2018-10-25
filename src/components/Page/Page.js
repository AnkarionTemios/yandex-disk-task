import React from 'react'

import classNames from 'classnames'

import { Loader, ErrorNotification } from 'components'

export const Page = ({ children, loading, error, className }) => (
  <div className={ classNames("page", className) }>
    {
      loading ?
      <Loader /> :
      error ?
      <ErrorNotification /> :
      children
    }
  </div>
)