import React, { Component } from 'react'

import { connect } from 'react-redux'
import { fetchFiles } from 'store/files'

import { FileManager, Page, Tools } from 'components'

import './FilesPage.css'

class FilesPage extends Component {
  
  componentDidMount() {
    this.props.fetchFiles('/')
  }
  
  render() {
    const { files, fetchFiles, loading, path, error } = this.props
    return (
      <Page error={ error } loading={ loading } className="files-page">

        <Tools path={ path } fetchFiles={ fetchFiles } />

        <FileManager files={ files && files.items } fetchFiles={ fetchFiles } />

      </Page>
    )
  }
}

const mapStateToProps = state => ({
  ...state.files
})

const mapDispatchToProps = dispatch => ({
  fetchFiles: path => dispatch(fetchFiles(path))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilesPage)