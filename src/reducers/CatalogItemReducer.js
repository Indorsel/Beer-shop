import { SET_CART_ITEMS } from '../actions/actionTypes'

const initialState = {
  cartItems: [],
}

export function CatalogItemReducer(state = initialState, action) {
  switch(action.type) {
    case SET_CART_ITEMS:
      return { ...state, cartItems: action.payload }

    default:
      return state
  }
}