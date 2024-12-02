import logo from '../assets/LOGO 1.png'
import profile from '../assets/Male User.png'
import '../Stylings/Navitems.css'
import MyOffer from '../Components/MyOffer'

const Navigation = () => {
    return (
      <>
      <MyOffer/>
      <img src={logo} className='picture' alt="logo image" />
       <div className="nav">
          <ul>
            <li><a href="/home">Home</a></li>
            <li>Special Offers</li>
            <li>Restaurants</li>
            <li>Track Order</li>
          </ul>
          <button><a href="">Hey Engineer</a></button><img src={profile} alt="" />
      </div>
      </>
      
    )
  }


export default Navigation;