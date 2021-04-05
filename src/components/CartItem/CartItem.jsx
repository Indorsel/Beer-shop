import React from 'react'
import './index.css'

export default function CartItem(item) {
  const { image_url, name, abv, ibu, target_fg, target_og, ebc, srm, ph, attenuation_level } = item
  return (
    <div className="cart_wrapper">
      <div className='cart_item'>
        <img src={image_url} alt="" />
        <div className="description">
          <h4>{name}Name</h4>
          <p><b>ABV: </b>{abv}</p>
          <p><b>IBU: </b>{ibu}</p>
          <p><b>FG/OG: </b>{target_fg}/{target_og}</p>
          <p><b>EBC: </b>{ebc}</p>
          <p><b>SRM: </b>{srm}</p>
          <p><b>Ph: </b>{ph}</p>
          <p><b>Attenuation level: </b>{attenuation_level}</p>
        </div>
        <div className="cart_button">
          <button>Remove item</button>
        </div>
      </div>
    </div>
  )
}
