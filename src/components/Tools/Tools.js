import React from 'react'

import { FileManagerRoutes } from 'components'

import './Tools.css'

export const Tools = ({ path, fetchFiles }) => {
  
  return (
    <div className="tools py-2 align-items-center d-flex col">
      
      <span className="mr-2">PATH: </span>

      <FileManagerRoutes path={ path } fetchFiles={ fetchFiles } />

      <button onClick={ () => fetchFiles('/') } className="d-block ml-auto">Back to root</button>

    </div>
  )
}