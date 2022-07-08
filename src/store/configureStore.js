import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit'
import photo from './photo'

const reducer = combineReducers({photo})
const store = configureStore({ reducer})

export default store
