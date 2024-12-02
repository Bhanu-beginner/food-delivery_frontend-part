import location from '../assets/Location.png';
import shoppingicon from '../assets/Full Shopping Basket.png';
import downarrow from '../assets/Forward Button.png';
import '../Stylings/MyOffer.css'

const MyOffer = () => {
  return (
    <div className='contains'>
     <div className='offers'>
        <span className='first-span'>🌟&nbsp;  Get 5% Off your first order, <a href="#">Promo: ORDER5</a></span>
        <span> <img src={location} alt="location pic" />Regent Street, A4, A4201, London &nbsp;<span className='second-span'>Change Location</span></span>
        <span className='carts'><img src={shoppingicon} alt="cart pic" /><span className='My-cart'> <a href="/Cart">My Cart</a></span><img className='arrow'  src={downarrow} alt="down arrow" /></span>
      </div>
    </div>
  )
}

export default MyOffer;
