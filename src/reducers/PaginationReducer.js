import { SET_CURRENT_PAGE } from "../actions/actionTypes"

const initialState = {
  currentPage: 1,
}

export function PaginationReducer(state = initialState, action) {
  switch(action.type) {
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload }

    default:
      return state
  }
}