import React from "react";
import { useStateValue } from "./StateProvider";
import "../styles/Checkout.css";
import CartProduct from "./CartProduct";

import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ cart }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/Microsoft/COOP/17_06_2020/V209073725_IN_PC_Microsoft_COOP_refreshing_Baneers_1500x200_2.jpg"
          alt="advertise"
        />
        {cart?.length === 0 ? (
          <div>
            <h2>Your Cart is Empty !</h2>
            <p>You Have no item in your Cart. Add Some Item to continue</p>
            <img
              
              src="https://i.postimg.cc/ydcq4tGG/cart.png"
              alt="empty"
            />
          </div>
        ) : (
          <div>
            <h2 className="checkout_title font-weight-bold">
              Items in your Cart
            </h2>
            {cart?.map((item, id) => (
              <CartProduct
                key={id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="checkout_total">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
