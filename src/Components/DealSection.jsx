import Burger from '../assets/Group 10.png'
import dishes from '../assets/Group 11.png'
import hotdog from '../assets/Group 12.png'

const DealSection = () => {
  return (
    <>
       <div className="deal-section">
          <h3>Up to -40% 🎊 Order.uk exclusive deals</h3>      
          <a href="#" className="vegan">Vegan</a>
          <a href="#">Sushi</a>
          <a href="#" className="pizza">Pizza & Fast food</a>
          <a href="#">others</a>
       </div>
       <div className='dishes'>
       <img src={Burger} alt="Burger picture" />
       <img src={dishes} alt="Variety dishes" />
       <img src={hotdog} alt="Hotdog picture" />

       </div>
    </>
  )
}

export default DealSection
