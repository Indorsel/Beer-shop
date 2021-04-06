import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from '../../actions/setFilter'
import './index.css'

export default function Filter() {
  const dispatch = useDispatch()
  
  const clickHandler = ({target}) => {
    dispatch(setFilter(target.value))
  }

  return (
    <div className='filter'>
      <select onChange={clickHandler} >
        <option value="">Choose a filter</option>
        <option value="abv">ABV</option>
        <option value="ibu">IBU</option>
        <option value="ebc">EBC</option>
      </select>
    </div>
  )
}
