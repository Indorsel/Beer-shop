import { SET_FILTER } from "../actions/actionTypes"

const initialState = {
  filter: '',
}

export function FilterReducer(state = initialState, action) {
  switch(action.type) {
    case SET_FILTER:
      return { ...state, filter:  `/${action.payload}_lt=1` }

    default:
      return state
  }
}