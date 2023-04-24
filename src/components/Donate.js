import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const handleToken = (token) => {
    
    console.log(token);
    setShowSuccessMessage(true);
  };
  const handleDonationAmountChange = (event) => {
    setDonationAmount(event.target.value);
  };
  return (
    <div>
      <h2>Donation Form</h2>
      <label>
        Donation amount:
        <input
          type="number"
          min="0"
          step="1"
          value={donationAmount}
          onChange={handleDonationAmountChange}
        />
      </label>
      <br />
      <StripeCheckout
        name="My Charity"
        description={`Donation of $${donationAmount}`}
        amount={donationAmount * 100} // Stripe amount is in cents
        currency="INR"
        stripeKey="pk_test_51N0PeKSHLc1GsPu4OWeiZhfOUH1tz46Vcv0poIMUclXyfdY5IMUjyr9DT6TBXQP5iro5cQOcOQ73fMvYUQZml03F007eaDFofc"
        token={handleToken}
      >
        <button>Donate with Card</button>
      </StripeCheckout>
      {showSuccessMessage && <p>Thank you for your donation!</p>}
    </div>
  );
};

export default Donate;