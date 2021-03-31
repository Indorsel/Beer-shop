import React from 'react'
import './index.css'

export default function CatalogItem() {

  

  return (
    <div className='wrapper_item'>
      <img src="/" alt="" />
      <div className="description">
        <h4>BeerName</h4>
        <p><b>ABV: </b>123</p>
        <p><b>IBU: </b>123</p>
        <p><b>FG/OG: </b>1231/1231</p>
        <p><b>EBC: </b>123123</p>
        <p><b>SRM: </b>123123</p>
        <p><b>Ph: </b>123</p>
        <p><b>Attenuation level: </b>1231</p>
        <button>Add to cart</button>
      </div>
    </div>
  )
}
