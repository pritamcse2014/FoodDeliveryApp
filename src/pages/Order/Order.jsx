import { useContext } from 'react'
import './Order.css'
import { StoreContext } from '../../context/StoreContext'

const Order = () => {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" placeholder="Enter Your First Name" />
            <input type="text" placeholder="Enter Your Last Name" />
          </div>
          <input type="email" placeholder="Enter Your Email" />
          <input type="text" placeholder="Enter Your Street" />
          <div className="multi-fields">
            <input type="text" placeholder="Enter Your City" />
            <input type="text" placeholder="Enter Your State" />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder="Enter Your Zip Code" />
            <input type="text" placeholder="Enter Your Country" />
          </div>
          <input type="text" placeholder="Enter Your Phone" />
        </div>
        
        <div className="place-order-right">
          <div className="cart-total">
              <h2>Cart Total</h2>
              <div>
                <div className="cart-total-details">
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <p>Delivery Fee</p>
                  <p>${getTotalCartAmount() === 0 ? 0 : 5}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <b>Total</b>
                  <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}</b>
                </div>
              </div>
              <button>PROCEED TO PAYMENT</button>
            </div>
        </div>
    </div>
  )
}

export default Order