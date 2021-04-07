import React, { useState } from 'react'
import { Pagination } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../../actions/setCurrentPage'


export default function PaginationWrapper() {
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  const [current, setCurrent] = useState(1)

  const isCurrentPage = () => {
    if((state.header.beerName !== '' && state.header.beerName.length >= 1 && state.pagination.currentPage === 1) 
    || (state.header.beerName === '' && state.header.beerName.length === 0 && state.pagination.currentPage === 1)
    ) {
      return 1
    } else {
      return current
    }
  }

  const onChange = page => {
    setCurrent(page)
    dispatch(setCurrentPage(page))
  };

  return (
    <div className="pagination">
      <Pagination 
        showSizeChanger={false} 
        current={isCurrentPage()} 
        onChange={onChange} 
        total={ state.main.apiData.length ? state.main.apiData.length : 1 } />
    </div>
  )
}