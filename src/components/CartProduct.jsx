import React from 'react'
import '../styles/CartProduct.css'
import { useStateValue } from './StateProvider'

const CartProduct = ({id,title,image,price,rating}) => {
    const [{cart},dispatch]=useStateValue();
    const removeItem=()=>{
        dispatch({
            type:'REMOVE_FROM_CART',
            id:id
        })
    }
    return (
      <div className="cartProduct">
        <img className="cartProduct_image" src={image} alt="cart" />
        <div className="cartProduct_info">
          <p className="cartProduct_title">{title}</p>
          <p className="cartProduct_price">
            <small>Rs.</small>
            <strong>{price}</strong>
          </p>

          <div className="cartProduct_rating">
            {Array(rating)
              .fill()
              .map((_, index) => (
                <i className="fas fa-star text-warning" key={index}></i>
              ))}
          </div>
          <button className="p-1" onClick={removeItem}>Remove from Cart</button>
        </div>
      </div>
    );
}

export default CartProduct
