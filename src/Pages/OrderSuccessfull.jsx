import Navigation from "../Components/Navigation";
import '../Stylings/OrderSuccessfull.css';
import tickicon from '../assets/Icon (2).png';

const OrderSuccessfull = () => {
  return (
    <>
      <Navigation/>
      <div className="successful-icon">
        <img src={tickicon} alt="Tick mark icon " />
        <h5>Order Placed Successfully</h5>
        <p className="confirm">Your order is confirmed and on its way. Get set to <br /><span>savor your chosen delights!</span></p>
        <div className="order-items">
            <p>Royal Cheese Burger</p>
            <p className="potato-veg-item">Potato Veggies</p>
            <p className="coke-item">Coke Coca Cola</p>
            <a href="/home"><p>Back to Home</p></a>
        </div>
      </div>
    </>
  )
}

export default OrderSuccessfull;
