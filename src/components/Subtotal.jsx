import React from 'react'
import '../styles/Subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';

const Subtotal = () => {
    const [{cart},dispatch]=useStateValue();
    return (
      <div className="subtotal ml-1">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({cart.length} items):<strong>{` ${value}`}</strong>
              </p>
              <small className="subtotal_gift">
                <input type="checkbox" /> Apply coupon to get 30% off
              </small>
            </>
          )}
          decimalScale={2}
          value={getCartTotal(cart)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"Rs"}
        />
        <button className="ml-3 mt-5 p-1">Proceed</button>
      </div>
    );
}

export default Subtotal
