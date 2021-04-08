import { SET_API_DATA } from './actionTypes'

export const setApiData = payload => {
  return ({ type: SET_API_DATA, payload })
}