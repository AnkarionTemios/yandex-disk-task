import { combineReducers } from 'redux'
import { filesReducer } from './files'

export default combineReducers({
  files: filesReducer
})