import React from 'react'

import classNames from 'classnames'

import ReactTable from 'react-table'
import 'react-table/react-table.css'

import './FileManager.css'

export const FileManager = ({ files, fetchFiles }) => {
  const data = files && [
    ...files.map(file => ({
      name: file.name,
      size: file.size,
      type: file.type,
      onDoubleClick: () => fetchFiles(file.path.replace("disk:", "")),
      ...file
    }))
  ]

  const columns = [
    {
      Header: () => <span className="name-cell-header">Name</span>,
      accessor: ({ name, type }) => (
        <span>
          <i className={ classNames("far", "mr-2", type === "dir" ? "fa-folder" : "fa-file") }></i>
          { name }
        </span>
      ),
      className: "name-cell",
      id: "name-cell"
    },
    {
      Header: () => <span className="type-cell-header">Type</span>,
      accessor: ({ type }) => type === "dir" ? "folder" : "file",
      className: "type-cell",
      id: "type-cell"
    },
    {
      Header: () => <span className="size-cell-header">Size</span>,
      accessor: ({ size }) => (
        <span>
          { size && Math.trunc(size / 8 / 1024 / 1024 * 100) / 100 + "Mb" }
        </span>
      ),
      className: "size-cell",
      id: "size-cell"
    },
  ]

  const handleTableRowState = (_, { original }) => ({
    onDoubleClick: () => {
      if (original.type === "dir") {
        original.onDoubleClick()
      }
    }
  })

  return (
    <div className="file-manager">
      <ReactTable
        className="files-table"
        minRows={ 0 }
        showPagination={ false }
        pageSize={ 1000 }
        columns={ columns }
        data={ data }
        getTdProps={ handleTableRowState } 
      />
    </div>
  )
}