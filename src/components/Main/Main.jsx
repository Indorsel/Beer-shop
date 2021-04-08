import React, { useEffect } from 'react'
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
  const {filter, header, catalogItem, pagination, main} = state
  
  useEffect(() => {
    async function fetchData() {
      const request = header.beerName === '' ? await axios.get('beers?per_page=80') :
        await axios.get(`beers?page=1&per_page=80&beer_name=${header.beerName}`)
      const sortedCatalog = catalogSort(request.data, filter.filter)
      dispatch(setApiData(sortedCatalog))
    }
    fetchData()
  }, [])

  useEffect(() => {
    async function fetchData() {
      debugger
      const request = header.beerName === '' ? await axios.get('beers?per_page=80') :
        await axios.get(`beers?page=1&per_page=80&beer_name=${header.beerName}`)
      const sortedCatalog = catalogSort(request.data, filter.filter)
      dispatch(setApiData(sortedCatalog))
    }
    fetchData()
  }, [filter.filter, header.beerName, catalogItem.cartItems, pagination.currentPage, dispatch])

  const catalog = main.apiData.slice((pagination.currentPage - 1) * 10, pagination.currentPage * 10)

  return (
    <div id='main'>
      <h3>Catalog</h3>
      <div className='filters'>
        <Filter />
      </div>
      <div className='items_wrapper'>
        {
          main.apiData?.length !== 0 ? catalog.map(el => (
              <CatalogItem item={el} key={el.id} />
            )) : <div style={{fontWeight:'700', fontSize: '2rem'}}>Catalog has no items now</div>
        }
      </div>
      <PaginationWrapper item={pagination.currentPage} />
    </div>
  )
}
