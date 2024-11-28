import McD from '../assets/Group 16.png';
import PJ from '../assets/Group 17.png';
import KFC from '../assets/Group 18.png';
import TC from '../assets/Group 19.png';
import BK from '../assets/Group 20.png';
import SM from '../assets/Group 21.png';


const Restaurants = () => {
  return (
      <div className="restaurant-images">
        <h3>Popular Restaurants</h3>
        <a href="#"><img src={McD} alt="McDonalds picture" /></a>
        <a href="#"><img src={PJ} alt="Papa Johns picture" /></a>
        <a href="#"><img src={KFC} alt="KFC picture" /></a>
        <a href="#"><img src={TC} alt="Texas Chicken picture" /></a>
        <a href="#"><img src={BK} alt="Burger king picture" /></a>
        <a href="#"><img src={SM} alt="Shaurma picture" /></a>
      </div>
  )
}

export default Restaurants
