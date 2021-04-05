import { combineReducers } from 'redux'
import { FilterReducer } from './FilterReducer'
// import { MainReducer } from './MainReducer'
import { PaginationReducer } from './PaginationReducer'

export const initialState = {}

export const rootReducer = combineReducers({
  // main: MainReducer,
  filter: FilterReducer,
  pagination: PaginationReducer,
})