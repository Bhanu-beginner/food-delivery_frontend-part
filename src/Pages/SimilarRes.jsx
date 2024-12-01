import McD from '../assets/Group 16.png';
import PJ from '../assets/Group 17.png';
import KFC from '../assets/Group 18.png';
import TC from '../assets/Group 19.png';
import BK from '../assets/Group 20.png';
import SM from '../assets/Group 21.png';


const SimilarRes = () => {
  return (
    <div>
      <div className="similar">
        <h3>Similar Restaurants</h3>
        <a href="/McDonalds.com"><img src={McD} alt="McDonalds picture" /></a>
        <a href="/PapaJohns.com"><img src={PJ} alt="Papa Johns picture" /></a>
        <a href="/KFC.com"><img src={KFC} alt="KFC picture" /></a>
        <a href="TexasChicken.com"><img src={TC} alt="Texas Chicken picture" /></a>
        <a href="/BurgerKing.com"><img src={BK} alt="Burger king picture" /></a>
        <a href="/ShaurmaNo1.com"><img src={SM} alt="Shaurma picture" /></a>
      </div>
    </div>
  )
}

export default SimilarRes
