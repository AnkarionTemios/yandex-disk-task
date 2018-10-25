import * as actionTypes from './actionTypes'
import API from 'api'
import { push } from 'react-router-redux'

const showLoader = () => ({ type: actionTypes.SHOW_FILES_LOADER })
const hideLoader = () => ({ type: actionTypes.HIDE_FILES_LOADER })

const authorizeTokenSuccess = () => ({ type: actionTypes.AUTHORIZE_TOKEN_SUCCESS })

const authorizeTokenFailure = () => ({ type: actionTypes.AUTHORIZE_TOKEN_FAILURE })

const fetchFilesSuccess = files => ({
  type: actionTypes.FILES_FETCH_SUCCESS,
  files
})

const fetchFilesFailure = () => ({ type: actionTypes.FILES_FETCH_FAILURE })

const setPath = path => ({
  type: actionTypes.SET_PATH,
  path
})

export const authorizeToken = code => dispatch => {
  dispatch(showLoader())

  API.authentication.authorizeToken(
    code,
    response => {
      dispatch(authorizeTokenSuccess())
      localStorage.setItem('token', response.access_token)
      dispatch(push('/'))
      dispatch(hideLoader())
    },
    () => {
      dispatch(authorizeTokenFailure())
      dispatch(hideLoader())
    }
  )
}

export const fetchFiles = path => dispatch => {
  dispatch(showLoader())
  dispatch(setPath(path))

  API.files.fetchFiles(
    path,
    response => {
      dispatch(fetchFilesSuccess(response._embedded))
      dispatch(hideLoader())
    },
    () => {
      dispatch(fetchFilesFailure())
      dispatch(hideLoader())
    }
  )
}