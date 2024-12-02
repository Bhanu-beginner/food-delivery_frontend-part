import '../Stylings/Payment.css';
import Navigation from '../Components/Navigation';
import  { useState } from 'react';
import maestroKard from '../assets/Social Icon.png';
import stripeicon from '../assets/Social Icon (2).png';
import paypalicon from '../assets/Social Icon (1).png';
import walleticon from '../assets/Icon (3).png';
import arrowleft from '../assets/arrow-left.png';

const PaymentDropdown = () => {
  const [paymentMode, setPaymentMode] = useState('');
  const [walletBalance, setWalletBalance] = useState(300); // Example balance
  const [showBalance, setShowBalance] = useState(false);

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    setPaymentMode(selectedOption);
    
    if (selectedOption === 'wallet') {
      setShowBalance(true);
      event.preventDefault();
      setWalletBalance (...walletBalance);
    } else{
      setShowBalance(false);
    }
  };

  return (
    <>
      <Navigation/>
      <div className='payment-options' >
        <img src={arrowleft} alt="arrow left icon" />
        <h3>Choose and Pay</h3>
      <select value={paymentMode} onChange={handleChange}>
        <option value="wallet">Wallet</option>
        <option value="MaestroKard">MaestroKard</option>
        <option value="Paypal">Paypal</option>
        <option value="Stripe">Stripe</option>
        <option value="Add debit card">Add Debit Card</option>
      </select> 
      <div className='image-pay'> 
      {paymentMode && ( 
        <div> 
            {
            paymentMode === "wallet" && <img src={walleticon} className='wallet-icon' alt="Wallet icon" />
            } 
            {
            paymentMode === "MaestroKard" && <img src={maestroKard} className='icon' alt=" MaestroKard icon" />
            } 
            {
            paymentMode === "Paypal" && <img src={paypalicon} className='icon'  alt="Paypal icon" />
            }
            {
            paymentMode === "Add debit card" && <p className='debit'> ➕  Add Debit Card</p>
            }
            {
            paymentMode === "Stripe"  && <img src={stripeicon}  className='icon' alt="Stripe icon" />
            }
            </div> 
            )}
            {showBalance && <p>Available Wallet Balance: ₹{walletBalance}</p>}
      </div>
      <p className='amount-paying'>Amount to be payed :<span>₹240</span></p>
      <a href="/">Proceed Payment</a>
      </div>
    </>
  );
};

export default PaymentDropdown;
