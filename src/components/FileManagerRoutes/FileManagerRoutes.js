import React from 'react'

import { Wrapper } from 'components'

import './FileManagerRoutes.css'

export const FileManagerRoutes = ({ path, fetchFiles }) => {
  const renderRoutes = path => {
    if (path.length > 1) {
      let paths = path.split(/\//)
      let routes = []
  
      paths.reduce((accumulator, currentValue, index) => {
        if (index === 0) {
          routes.push(accumulator + "/")
          return accumulator + "/"
        } else if (index === 1) {
          routes.push(accumulator + currentValue)
          return accumulator + currentValue 
        } else {
          routes.push(accumulator + "/" + currentValue)
          return accumulator + "/" + currentValue  
        }
      }, "")

      return paths.map((element, index) => (
        <Wrapper key={ index }>

          <span className="route" onClick={ () => fetchFiles(routes[index]) }>
            { element === "" ? "Root" : element }
          </span>     

          { 
            index !== paths.length - 1 &&
            <i className="mx-3 far fa-angle-right"></i>
          }

        </Wrapper>
      ))  
    } else {
      return (
        <span className="route" onClick={ () => fetchFiles('/') }>
          Root
        </span>     
      )
    }
  }

  return renderRoutes(path)
}