import React, { useEffect, useState } from 'react'
import './index.css'
import axios from '../../utils/API'
import CatalogItem from '../CatalogItem/CatalogItem'
import PaginationWrapper from '../Pagination/PaginationWrapper'
import Filter from '../Filter/Filter'
import { useDispatch, useSelector } from 'react-redux'
import { setApiData } from '../../actions/setApiData'
import { catalogSort } from '../../utils/catalogSort'



export default function Main() {
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  const [apiData, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = state.header.beerName === '' ? await axios.get('beers?per_page=80') :
        await axios.get(`beers?per_page=80&beer_name=${state.header.beerName}`)
      setData(request.data)
      const sortedCatalog = catalogSort(apiData, state.filter.filter)
      dispatch(setApiData(sortedCatalog))
    }
    fetchData()
  }, [state.filter.filter, state.header.beerName, state.catalogItem.cartItems])


  useEffect(() => {
    const sortedCatalog = catalogSort(apiData, state.filter.filter)
    dispatch(setApiData(sortedCatalog))
  }, [apiData])

  // console.log(state.main.apiData);
  const catalog = state.main.apiData.slice((state.pagination.currentPage - 1) * 10, state.pagination.currentPage * 10)

  return (
    <div id='main'>
      <h3>Catalog</h3>
      <div className="filters">
        <Filter />
      </div>
      <div className="items_wrapper">
        {
          apiData?.length !== 0 ? catalog.map(el => (
              <CatalogItem item={el} key={el.id} />
            )) : <div style={{fontWeight:'700', fontSize: '2rem'}}>Catalog has no items now</div>
        }
      </div>
      <PaginationWrapper />
    </div>
  )
}
