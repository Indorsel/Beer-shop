import React, { useEffect, useState } from 'react'
import { useDispatch
  // , useSelector 
} from 'react-redux'
import { setCartItems } from '../../actions/setCartItems';
import './index.css'


export default function CatalogItem({ item }) {
  const dispatch = useDispatch()
  // const state = useSelector(state => state.catalogItem.cartItems)

  const { image_url, id, name, abv, ibu, target_fg, target_og, ebc, srm, ph, attenuation_level } = item
 
  const [checked, isChecked] = useState(false)
  const [cartItems, setCartItem] = useState([])

  useEffect(() => {
    const raw = localStorage.getItem('cartItems') || []
    setCartItem(JSON.parse(raw))
  }, [])

  useEffect(() => {
    // console.log('This is localState', cartItems)
    // console.log('This is Redux state: ', state);
    // console.log('checked: ', checked);
    console.log('cartItems is ', cartItems);
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  const addItemInCart = ({target}) => {
    // debugger
    isChecked(true)
    setCartItem([...cartItems, {
      id: id,
      name: name,
      image_url: image_url,
    }])
    dispatch(setCartItems(cartItems))
    target.checked = true
    console.log(target);
    console.log('target checked: ', target.checked)
  }


  const removeItemInCart = ({target}) => {
    isChecked(false)
    console.log('checked: ', checked);
    cartItems.forEach((el, i) => {
      if(el.id === target.id) cartItems.splice(i, 1)
    })
    setCartItem(cartItems)
    dispatch(setCartItems(cartItems))
    console.log(cartItems);
    target.checked = false
    console.log(target);
    console.log('target checked: ', target.checked)
  }


  return (
    <div className='wrapper_item' key={id}>
      <img src={image_url} alt="" />
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
          <input type="checkbox" name="Add to cart" id="add_to_cart" 
            onChange={checked === false ? addItemInCart : removeItemInCart} 
          />
          <label htmlFor="add_to_cart">Add to cart</label>
        </div>
      </div>
    </div>
  )
}
