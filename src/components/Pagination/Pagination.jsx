import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../../actions/setCurrentPage'
import './index.css'



export default function Pagination() {
  const dispatch = useDispatch()
  const state = useSelector(state => state.pagination.currentPage)

  let currentValue = state
  const clickHandler = ({target}) => {
    if(target.classList[0] === 'page') {
      if(target.classList[1] === 'previous') {
        currentValue = currentValue !== 1 ? currentValue - 1 : currentValue
      } else if(target.classList[1] === 'next') {
        currentValue = currentValue !== 4 ? currentValue + 1 : currentValue
      } else {
        let page = Number(target.innerText)
        currentValue = page
      }
      dispatch(setCurrentPage(currentValue))
      document.querySelector('.pagination').style.color = 'black'
      target.style.color = 'red'
    }
  }


  return (
    <div className="pagination" onClick={clickHandler}>
      <span className='page previous'>&#9664;</span>
      <span className='page num'>1</span>
      <span className='page num'>2</span>
      <span className='page num'>3</span>
      <span className='page num'>4</span>
      <span className='page next'>&#9654;</span>
    </div>
  )
}