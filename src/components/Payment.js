import React, { useState } from 'react';
import './Payment.css';

const Payment = () => {
  // State for storing payment details
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement payment processing logic here (e.g., integrate with a payment gateway)
    // Reset the form after successful payment or show an error message
  };

  return (
    <div className="payment-container">
      <h2>Payment Details</h2>
      <form className="payment-form" onSubmit={handleSubmit}>
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="Enter card number"
          required
        />

        <label htmlFor="expiryDate">Expiry Date</label>
        <input
          type="text"
          id="expiryDate"
          name="expiryDate"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          placeholder="MM/YY"
          required
        />

        <label htmlFor="cvv">CVV</label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          placeholder="CVV"
          required
        />

        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;
