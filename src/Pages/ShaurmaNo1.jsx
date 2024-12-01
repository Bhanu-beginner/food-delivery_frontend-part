import NavItems from "./NavItems"
import backgroundpicture from '../assets/Group 23.png';
import completed from '../assets/Order Completed.png';
import motocross from '../assets/Motocross.png';
import fries from '../assets/Rectangle 44.png';
import rating from '../assets/Rectangle 64.png'
import '../Stylings/McDonalds.css';
import firstOrder from '../assets/Group 23 (2).png';
import vegan from '../assets/Group 43.png';
import icecream from '../assets/Group 44.png';
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
import tracking from '../assets/Tracking.png';
import id from '../assets/ID Verified.png';
import clock from '../assets/Clock.png';
import SimilarRes from "./SimilarRes";


const ShaurmaNo1 = () => {
  
  return (
    <div>
      <NavItems/>
      <div className='burger-scenary'>
        <p>The unchanging flavor of the years!</p>
        <h1>Shaurma1&apos;s East London</h1>
        <img src={completed} className='order-plank' alt="Order completed image" /><h6 className='min-order'>Minimum Order: 12 GBP</h6>
        <img src={motocross} className='order-completed' alt="Rider img" /><h6 className='delivery-time'>Delivery in 20-25 Minutes</h6>
        <img src={backgroundpicture} className='burger-background' alt="Burger picture" />
        <img src={fries}  className='fries-img' alt="Frech Fries img" />
        <img src={rating} className='rating'  alt="rating picture" />
        <p className='line'>Open until 3:00 AM</p>
      </div>
      <div className="search">
      <h3>All Offers from McDonald&apos;s East London</h3>
      <input value='🔍 &nbsp;  Search from menu...' />
      </div>
      <div className="items-section">
        <ul>
          <li className="offers-icon">Offers</li>
          <li>Burgers</li>
          <li>Fries</li>
          <li>Snacks</li>
          <li>Salads</li>
          <li>Cold drinks</li>
          <li>Happy Meal®</li>
          <li>Desserts</li>
          <li>Hot drinks</li>
          <li>Sauces</li>
          <li>Orbit®</li>
        </ul>
        <img src={firstOrder} alt="First-order image" />
        <img src={vegan}  alt="Vegan discount image" />
        <img src={icecream} alt="Ice-cream image" />
     </div>
     <div className="burger-snack">
      <h3>Burgers</h3>
      <img src={burgersnack} alt="cheese burger image" />
      <img src={classicburger} alt="classic burger image" />
      <img src={friescola} alt="fries and cola image" />
      <img src={burgerfries} alt="fries burger cola image" />
     </div>
     <div className="fries-snack">
      <h3>Fries</h3>
      <img src={cheesefries} alt="cheese fries image" />
      <img src={classicfries} alt="classic fries image" />
      <img src={veggies} alt="potato fries image" />
      <img src={potatofries} alt="potato veggies image" />
     </div>
     <div className="drinks">
      <h3>Cold Drinks</h3>
      <img src={roseMilk} alt="roseMilk image" />
      <img src={coldcoffee} alt="cold coffee image" />
      <img src={mojito} alt="mojito image" />
      <img src={cappucino} alt="cappucino image" />
     </div>
     <div className="total-info">
     <div className="information">
      <img src={tracking} alt="location icon" />
      <h3>Delivery information</h3>
      <ul>
        <li><span>Monday:</span> 12:00 AM-3:00 AM, 8:00 AM-3:00 AM</li>
        <li><span>Tuesday:</span> 8:00 AM-3:00 AM </li>
        <li><span>Wednesday:</span> 8:00 AM-3:00 AM</li>
        <li><span>Thursday:</span> 8:00 AM-3:00 AM</li>
        <li><span>Friday:</span> 8:00 AM-3:00 AM</li>
        <li><span>Saturday:</span> 8:00 AM-3:00 AM</li>
        <li><span>Sunday:</span> 8:00 AM-12:00 AM</li>
        <li><span>Estimated time until delivery:</span> 20 min</li>
      </ul>
      </div>
      <div className="contact-info">
        <img src={id} alt="user verified picture" />
        <h3>Contact information</h3>
        <ul>
          <li>If you have allergies or other dietary</li>
          <li>restrictions, please contact the restaurant. The</li>
          <li>restaurant will provide food-specific</li>
          <li>information upon request.</li>
          <li><span>Phone number</span></li>
          <li>+934443-43</li>
          <li><span>Website</span></li>
          <li>http://mcdonalds.uk/</li>
        </ul>
      </div>
      <div className="operational-times">
        <img src={clock} alt="clock image" />
        <h3>Operational Times</h3>
        <ul>
          <li><span>Monday:</span> 8:00 AM-3:00 AM</li>
          <li><span>Tuesday:</span> 8:00 AM-3:00 AM</li>
          <li><span>Wednesday:</span> 8:00 AM-3:00 AM</li>
          <li><span>Thursday:</span> 8:00 AM-3:00 AM</li>
          <li><span>Friday:</span> 8:00 AM-3:00 AM</li>
          <li><span>Saturday:</span> 8:00 AM-3:00 AM</li>
          <li><span>Sunday:</span> 8:00 AM-3:00 AM</li>
        </ul>
      </div>
     </div>
     <SimilarRes/>
     </div>
  )
}


export default ShaurmaNo1
