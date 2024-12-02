import Review from "../Components/Review";
import SimilarRes from "./SimilarRes";
import RestaurantInfo from '../Components/RestaurantInfo';
import FOD from '../assets/Group 23 (2).png';
import VD from '../assets/Group 43.png';
import Ice from '../assets/Group 44.png';
import burgersnack from '../assets/Group 25.png';
import classicburger from '../assets/Group 26.png';
import burgerfries from '../assets/Group 27.png';
import friescola from '../assets/Group 28.png';
import cheesefries from '../assets/Group 31.png';
import classicfries from '../assets/Group 33.png';
import veggies from '../assets/Group 35.png';
import potatofries from '../assets/Group 32.png';
import roseMilk from '../assets/Group 37.png';
import coldcoffee from '../assets/Group 39.png';
import mojito from '../assets/Group 41.png';
import cappucino from '../assets/Group 38.png';
import '../Stylings/Cart.css';
import share from '../assets/share-2.png';
import shoppingicon from '../assets/Full Shopping Basket.png';
import remove from '../assets/Remove.png';
import arrow from '../assets/Forward Button.png';
import arow from '../assets/Forward Button (2).png';
import scooter from '../assets/Delivery Scooter.png';
import newstore from '../assets/New Store.png'; 


const Cart = () => {
  return (
  <>
  <div className="items-sections">
    <ul>
      <li className="offer-img">Offers</li>
      <li>Burgers</li>
      <li>Fries</li>
      <li>Salads</li>
      <li>Cold drinks</li>
      <li>Snacks</li>
      <li>Happy Meal®</li>
      <li>Desserts</li>
      <li>Hot drinks</li>
      <li>Sauces</li>
      <li>Orbit®</li>
    </ul>
  </div>



  <div className="variety-snackitems">
    <div className="different-items">
      <img src={FOD} alt="first order picture" />
      <img src={VD} alt="vegan discount named image" />
      <img src={Ice} alt="ice cream image" />
    </div>
    
    
    <div>
      <h3>Burgers</h3>
      <img src={burgersnack} alt="cheese burger image" />
      <img src={classicburger} className="right-side" alt="classic burger image" />
      <img src={friescola} alt="fries and cola image" />
      <img src={burgerfries}  className="right-side" alt="fries burger cola image" />
    </div>


    <div>
      <h3>Fries</h3>
      <img src={cheesefries} alt="cheese fries image" />
      <img src={classicfries} className="right-side" alt="classic fries image" />
      <img src={veggies}  alt="potato veggies image" />
      <img src={potatofries} className="right-side" alt="potato fries image" />
    </div>



    <div>
      <h3>Cold Drinks</h3>
      <img src={roseMilk} alt="roseMilk image" />
      <img src={coldcoffee}  className="right-side" alt="cold coffee image" />
      <img src={mojito} alt="mojito image" />
      <img src={cappucino}  className="right-side" alt="cappucino image" />
    </div>
  </div>
  <div className="share-icon">
    <img src={share} alt="sharing icon" />
    <span>Share this cart</span>
    <p>with your friends</p>
    <a href="#">Copy Link</a>
  </div>
  <div className="name">
    <img src={shoppingicon} alt="basket-icon" />
    <p className="name-text">My Basket</p>
  </div>


  <div className="basket-container">
    <div className="first-col">
      <p className="number-times">1x</p>
      <span><p className="no">₹120</p></span>
      <span><h6>Royal Cheese Burger</h6></span>
      <span><p className="extra">With extra fries</p></span>
      <span><img src={remove} alt="remove icon" /></span>
    </div>
    <div className="second-col">
        <p className="number-time">1x</p>
        <span><p className="amount">₹70</p></span>
        <span><h6>Potato Veggies</h6></span>
        <span><p className="mushroom-item">No Mushrooms + green <br />peppers</p></span>
        <span><img src={remove} alt="remove icon" /></span>
      </div>
      <div className="third-col">
        <p className="numbers-times">1x</p>
        <span><p className="rate">₹40</p></span>
        <span><h6>Coke Coca Cola</h6></span>
        <span><img src={remove} alt="remove icon" /></span>
      </div>
      <div className="total-add">
        <h6 className="total-h6">Sub Total: <span>₹230.00</span></h6>
        <h6 className="discount-h6">Discounts: <span className="no3">-₹3.00</span></h6>
        <h6 className="delivery-h6">Delivery Fee: <span>₹3.00</span></h6>
      </div>
      <div className="overall-pay">
          <h6>Total to pay: <span>₹230.00</span></h6>
      </div>
      <div className="chosing">
          <p className="para">Choose your free item..</p> <span><img src={arrow} className=" arow" alt="arrow image" /></span>
          <p className="paragraph">Apply Coupon Code here</p><span><img src={arow} alt="arrow image" className="arrow-img"/></span>
      </div>
      <div className="last-col">
        <img src={scooter} className='scooter-img' alt="delivery scooter" />
        <p>Delivery</p>
        <p className="at">Starts at 17:50</p>
      </div>
      <div className="store-col">
        <img src={newstore}  className='store' alt="new store picture" />
        <p className="collection">Collection</p>
        <p className="starts">Starts at 16:50</p>
      </div>
      <div className="checkout-sec">
      <img src={arow}className="arrow-picture" alt="arrow image" />
      <a href="/Checkout">Checkout!</a>
      </div>
  </div>
  <RestaurantInfo/>
  <Review/>
  <SimilarRes/>
  </>
  )
}

export default Cart
