import { combineReducers } from 'redux'
import { CatalogItemReducer } from './CatalogItemReducer'
import { FilterReducer } from './FilterReducer'
import { HeaderReducer } from './HeaderReducer'
import { MainReducer } from './MainReducer'
import { PaginationReducer } from './PaginationReducer'

export const initialState = {}

export const rootReducer = combineReducers({
  catalogItem: CatalogItemReducer,
  filter: FilterReducer,
  header: HeaderReducer,
  main: MainReducer,
  pagination: PaginationReducer,
})