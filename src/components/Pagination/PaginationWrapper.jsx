import React, { useState } from 'react'
import { Pagination } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../../actions/setCurrentPage'


export default function PaginationWrapper() {
  const dispatch = useDispatch()
  const state = useSelector(state => state.main.apiData)

  const [current, setCurrent] = useState(1)

  const onChange = page => {
    setCurrent(page)
    dispatch(setCurrentPage(page))
  };

  // console.log(state.length);

  return (
    <div className="pagination" >
      <Pagination showSizeChanger={false} current={current} onChange={onChange} total={state.length ? state.length : 1} />
    </div>
  )
}