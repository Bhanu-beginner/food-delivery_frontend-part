import logo from '../assets/LOGO 1.png'
import profile from '../assets/Male User.png'
import '../Stylings/Navitems.css'
import MyOffer from '../Components/MyOffer'

const NavItems = () => {
    return (
      <>
      <MyOffer/>
      <img src={logo} className='picture' alt="logo image" />
       <div className="nav">
          <ul>
            <li><a href="/home">Home</a></li>
            <li>Special Offers</li>
            <li className='highlighted'>Restaurants</li>
            <li>Track Order</li>
          </ul>
          <a href='/Profile' className='profile'><span>Hey Engineer</span></a><img src={profile} alt="" />
      </div>
      </>
      
    )
  }

  export default NavItems;