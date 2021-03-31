import React from 'react'
import './index.css'
import CatalogItem from '../CatalogItem/CatalogItem'

export default function Main() {
  return (
    <div id='main'>
      <h3>Catalog</h3>
      <div className="items_wrapper">
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
      </div>
    </div>
  )
}
