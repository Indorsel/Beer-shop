import React, { useEffect, useState } from 'react'
import './index.css'
import axios from '../../utils/API'
import CatalogItem from '../CatalogItem/CatalogItem'
import Pagination from '../Pagination/Pagination'
import Filter from '../Filter/Filter'
import { useSelector } from 'react-redux'


export default function Main() {
  const state = useSelector(state => state)
  console.log(state.filter)

  const [apiData, setApiData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`?page=${state.pagination.currentPage}&per_page=10`)
      setApiData(request.data)
    }
    fetchData()
  }, [state])

  apiData === undefined ? console.log('Пустой стейт') : console.log(apiData)

  return (
    <div id='main'>
      <h3>Catalog</h3>
      <div className="filters">
        <Filter />
        <Pagination />
      </div>
      <div className="items_wrapper">
        {
          apiData.length !== 0 ? apiData.map(el => (
            <CatalogItem item={el} key={el.id} />
          )) : <div style={{fontWeight:'700', fontSize: '2rem'}}>Catalog has no items now</div>
        }
      </div>
    </div>
  )
}
