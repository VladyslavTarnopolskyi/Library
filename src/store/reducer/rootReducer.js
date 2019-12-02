import {combineReducers} from 'redux';
import booksReducer from './booksReducer';
import readersReducer from './readersReducer'

export default combineReducers({
  books: booksReducer,
  readers: readersReducer
})