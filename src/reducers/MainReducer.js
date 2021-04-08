import { SET_API_DATA } from '../actions/actionTypes'

const initialState = {
  apiData: [],
}

export function MainReducer(state = initialState, action) {
  switch(action.type) {
    case SET_API_DATA:
      return { ...state, apiData: action.payload }

    default:
      return state
  }
}
