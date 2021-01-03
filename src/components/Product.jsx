import React from 'react'
import "../styles/Product.css";
import { useStateValue } from './StateProvider';

const Product = ({id,title,image,price,rating}) => {

const [{},dispatch]=useStateValue();

  const addToCart=()=>{
      dispatch({
        type:'ADD_TO_CART',
        item:{
          id,
          title,
          image,
          price,
          rating
        }
      })
  }
  
    return (
      <div className="product">
        <img src={image} alt="product" />
        <div className="product_info">
          <h4>{title}</h4>

          <div className="product_rating">
            {Array(rating)
              .fill()
              .map((_,index) => (
                <i className="fas fa-star text-warning" key={index}></i>
              ))}
          </div>
          <p className="product_price">
            <small>Rs.</small>
            <strong>{price}</strong>
          </p>
        </div>

        <button className="font-weight-bold" onClick={addToCart}> Add to Cart</button>
       
      </div>
    );
}

export default Product
