import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../actions/setFilter'
import './index.css'

export default function Filter() {
  const dispatch = useDispatch()
  const state = useSelector(state => state.filter.filter)
  
  const clickHandler = ({target}) => {
    dispatch(setFilter(target.value))
  }

  return (
    <div className='filter'>
      <select onChange={clickHandler} value={state} >
        <option value=''>Choose a filter</option>
        <option value='abv'>ABV</option>
        <option value='ibu'>IBU</option>
        <option value='ebc'>EBC</option>
      </select>
    </div>
  )
}
