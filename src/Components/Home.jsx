import banner from '../assets/Untitled-1 1.png'
import banner2 from '../assets/Untitled-2 1.png'
import Navbar from './Navbar';
import location from '../assets/Location.png'
import shoppingicon from '../assets/Full Shopping Basket.png'
import downarrow from '../assets/Forward Button.png'
import curve from '../assets/image 1.png'

function Home() {

  return (
    <div className='contain'>
      <div className='offer'>
        <span>🌟&nbsp;  Get 5% Off your first order, <a href="#">Promo: ORDER5</a></span>
        <span> <img src={location} alt="location pic" />Regent Street, A4, A4201, London &nbsp;  <a href="#">Change Location</a></span>
        <span className='cart'><img src={shoppingicon} alt="cart pic" /> My Cart <img className='arrow'  src={downarrow} alt="down arrow" /></span>
      </div>
      <Navbar/>
      <div className='banners'>
        <div className='banner-container'>
           <p>Order Restaurant food, takeaway and groceries.</p>
           <h2>Feast Your Senses,<br/><span>Fast and Fresh</span></h2>
           <p className='statement'>Enter a postcode to see what we deliver</p>
           <input className='field' type="email" placeholder='e.g. EC4R 3TE'/>
           <input className='button' type="button" value="Search" />  
        </div> 
           <img src={curve}  className='curve' alt="design pic" />       
           <img src={banner}  className='banner'  alt="banner pic" />
           <img src={banner2} className='banner2' alt="side banner image" />
          
      </div>
    </div>
  );
}

export default Home;


