import * as actionTypes from './actionTypes'

const initialState = {
  files: [],
  path: "/",
  error: false,
  loading: false
}

export const filesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_FILES_LOADER:
      return {
        ...state, 
        loading: true
      }
    case actionTypes.HIDE_FILES_LOADER:
      return {
        ...state,
        loading: false
      }
    case actionTypes.AUTHORIZE_TOKEN_SUCCESS:
      return {
        ...state,
        error: false
      }
    case actionTypes.AUTHORIZE_TOKEN_FAILURE:
      return {
        ...state,
        error: true
      }
    case actionTypes.FILES_FETCH_SUCCESS:
      return {
        ...state,
        files: action.files,
        error: false
      }
    case actionTypes.FILES_FETCH_FAILURE:
      return {
        ...state,
        error: true,
        files: []
      }
    case actionTypes.SET_PATH:
      return {
        ...state,
        path: action.path
      }
    default: return state
  }
}