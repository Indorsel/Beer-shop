import { SET_BEER_NAME } from "../actions/actionTypes"

const initialState = {
  beerName: '',
}

export function HeaderReducer(state = initialState, action) {
  switch(action.type) {
    case SET_BEER_NAME:
      return { ...state, beerName: action.payload }

    default:
      return state
  }
}