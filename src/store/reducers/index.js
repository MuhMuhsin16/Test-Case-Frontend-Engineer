
import { combineReducers } from 'redux'
import todoReducer from './todoReducers'

export default combineReducers({
  todos: todoReducer
})