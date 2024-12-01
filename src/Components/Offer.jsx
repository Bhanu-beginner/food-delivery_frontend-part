import location from '../assets/Location.png';
import shoppingicon from '../assets/Full Shopping Basket.png';
import downarrow from '../assets/Forward Button.png';

const Offer = () => {
  return (
    <div className='contain'>
     <div className='offer'>
        <span>🌟&nbsp;  Get 5% Off your first order, <a href="#">Promo: ORDER5</a></span>
        <span> <img src={location} alt="location pic" />Regent Street, A4, A4201, London &nbsp;  <a href="#">Change Location</a></span>
        <span className='cart'><img src={shoppingicon} alt="cart pic" /><span className='My-cart'>My Cart</span><img className='arrow'  src={downarrow} alt="down arrow" /></span>
      </div>
    </div>
  )
}

export default Offer;
