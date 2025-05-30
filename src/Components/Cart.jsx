import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

const Cart = ({ cartItems, onRemoveItem }) => {
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState(false);

  useEffect(() => {
    if (appliedCoupon && couponCode === 'RENT10') {
      setDiscount(calculateSubtotal() * 0.1); // Apply 10% discount
    } else {
      setDiscount(0); // Reset discount if the coupon is invalid or erased
    }
  }, [appliedCoupon, couponCode, cartItems]);

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.days, 0);
  };

  const calculateSecurityDeposit = () => {
    return cartItems.reduce((total, item) => total + item.securityDeposit, 0);
  };

  const handleApplyCoupon = () => {
    setAppliedCoupon(true);
  };

  const subtotal = calculateSubtotal();
  const securityDeposit = calculateSecurityDeposit();
  const totalCost = subtotal + securityDeposit - discount;
  const tax = subtotal * 0.12; // Example tax calculation

  return (
    <div className="cart-container-unique">
      <h1>Your Shopping Cart</h1>
      
      <div className="cart-items-container-unique">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div className="cart-item-unique" key={index}>
              <img src={item.image} alt={item.name} />
              <div className="item-details-unique">
                <div>
                  <h2>{item.name}</h2>
                  <p>{item.days} Days / {item.size}</p>
                </div>
                <div>
                  <p>Date: {item.startDate}</p>
                  <p>Return: {item.endDate}</p>
                </div>
                <div>
                  <p>Price: ₹{item.price} / day</p>
                </div>
                <div>
                  <p>Security Deposit: ₹{item.securityDeposit}</p>
                </div>
                <div>
                  <p>Total Cost: ₹{item.totalCost}</p>
                </div>
              </div>
              <button className="remove-button-unique" onClick={() => onRemoveItem(index)}>Remove</button>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>

      <div className="right-section-unique">
        <div className="coupon-unique">
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Enter coupon code"
          />
          <button onClick={handleApplyCoupon}>Apply Coupon</button>
        </div>

        <div className="cart-summary-unique">
          <h2>Summary</h2>
          <p><span>Subtotal:</span> ₹{subtotal.toFixed(2)}</p>
          <p><span>Tax:</span> ₹{tax.toFixed(2)}</p>
          <p><span>Security Deposit:</span> ₹{securityDeposit.toFixed(2)}</p>
          <p><span>Discount:</span> -₹{discount.toFixed(2)}</p>
          <p><span>Total Cost:</span> ₹{totalCost.toFixed(2)}</p>
        </div>

        <Link to="/payment"><button className="checkout-button-unique">Checkout</button></Link>
      </div>

      <Link to="/"><button className="continue-shopping-button-unique">Continue Shopping</button></Link>
    </div>
  );
};

export default Cart;
