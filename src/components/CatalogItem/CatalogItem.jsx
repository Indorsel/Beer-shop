import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCartItems } from '../../actions/setCartItems';
import './index.css'


export default function CatalogItem({ item }) {
  const dispatch = useDispatch()
  const state = useSelector(state => state.catalogItem.cartItems)

  const { image_url, id, name, abv, ibu, target_fg, target_og, ebc, srm, ph, attenuation_level } = item
  
  const isCheckboxChecked = () => {
    const check = state.find(el => el.id === id ? 1 : 0) 
    if (check === undefined) {
      return false
    } else {
      return true
    }
  }

  const [checked, isChecked] = useState(isCheckboxChecked())

  const addItemInCart = () => {
    isChecked(true)
    let check = state.filter(el => el.id !== id ? 0 : 1)
    if (check.length === 0) {
      dispatch(setCartItems([...state, {
        id: id,
        name: name,
        image_url: image_url,
      }]))
    }
  }

  const removeItemInCart = () => {
    isChecked(false)
    const newState = state.filter(el => el.id !== id ? el : null)
    dispatch(setCartItems(newState))
  }



  return (
    <div className='wrapper_item' key={id}>
      <img src={ image_url ? image_url : 'https://clck.ru/U9RrJ' } alt="" />
      <div className="description">
        <h4>{name}</h4>
        <p><b>ABV: </b>{abv}</p>
        <p><b>IBU: </b>{ibu}</p>
        <p><b>FG/OG: </b>{target_fg}/{target_og}</p>
        <p><b>EBC: </b>{ebc === null ? 0 : ebc}</p>
        <p><b>SRM: </b>{srm === null ? 0 : srm}</p>
        <p><b>Ph: </b>{ph}</p>
        <p><b>Attenuation level: </b>{attenuation_level}</p>
        <div className='checkbox_wrapper'>
          <input type="checkbox" name="Add to cart" id={id} 
            checked={ isCheckboxChecked() }
            onChange={ checked === false ? addItemInCart : removeItemInCart } 
          />
          <label htmlFor="add_to_cart">Add to cart</label>
        </div>
      </div>
    </div>
  )
}
