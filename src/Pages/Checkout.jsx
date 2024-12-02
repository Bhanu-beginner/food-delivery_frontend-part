import '../Stylings/Checkout.css';
import Navigation from '../Components/Navigation';
import SimilarRes from '../Pages/SimilarRes';
import leftArrow from '../assets/arrow-left.png';
import coke from '../assets/Rectangle 11.png';
import fries from '../assets/Rectangle 46.png';
import royalburger from '../assets/Rectangle 44.png';
import forwardicon from '../assets/Forward Button (2).png';
import locationImage from '../assets/Location.png';


const Checkout = () => {
  return (
    <> 
      <Navigation/>
      <div className='left-arrow'>
        <img src={leftArrow} alt="left arrow img" />
        <h2>Your Order Details</h2>
      </div>
      <div className='checkout-items'>
        <img className='royal-burger' src={royalburger} alt="cheese burger picture" /> 
        <h6>Royal Cheese Burger<span>₹120</span></h6>
        <p className='cheese-times'>1x item</p>
        <img src={fries} className='french-fries' alt="french fries image" />
        <h6 className='veggy'>Potato Veggies<span className='no-70'>₹70</span></h6>
        <p className='veggy-items'>1x item</p>
        <img src={coke} className='coco-cola' alt="coke cola picture" /> 
        <h6 className='coke'>Coke Coca Cola <span className='no-40'>₹40</span></h6>
        <p className='coke-cola'>1x item</p>
        <p className='note'>Notes</p>
        <input type="text" value="Add order notes" />
      </div>
      <div className='address-context'>
        <img src={locationImage} className='location-icon' alt="location image" /> 
        <p className='address-para'><span>Delivery Address</span></p>
        <a href="/Address"><img src={forwardicon} className='forward-icon' alt="forward icon" /></a>
        <p className='address-parag'>45, Green Street, Sector 12...</p>
       </div> 
       <div className='pay'>
        <p>Items <span className='no-230'>₹230</span></p>
        <p>Sales Tax <span className='no-10'>₹10</span></p>
        <p>Subtotal (3 items) <span className='no-240'>₹240</span></p>
      </div>
      <div className='checkout-section'>
      <a href="/Payment">Choose Payment Method</a>
      </div>
      <SimilarRes/>
    </>
  )
}

export default Checkout
