import React from 'react'
import './index.css'


export default function CatalogItem({ item }) {
  console.log(item)
  const { image_url, name, abv, ibu, target_fg, target_og, ebc, srm, ph, attenuation_level } = item
  return (
    <div className='wrapper_item'>
      <img src={image_url} alt="" />
      <div className="description">
        <h4>{name}</h4>
        <p><b>ABV: </b>{abv}</p>
        <p><b>IBU: </b>{ibu}</p>
        <p><b>FG/OG: </b>{target_fg}/{target_og}</p>
        <p><b>EBC: </b>{ebc}</p>
        <p><b>SRM: </b>{srm}</p>
        <p><b>Ph: </b>{ph}</p>
        <p><b>Attenuation level: </b>{attenuation_level}</p>
        <div className='checkbox_wrapper'>
          <input type="checkbox" name="Add to cart" id="add_to_cart" />
          <label htmlFor="add_to_cart">Add to cart</label>
        </div>
      </div>
    </div>
  )
}
