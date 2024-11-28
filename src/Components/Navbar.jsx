import logo from '../assets/LOGO 1.png'
import profile from '../assets/Male User.png'
const Navbar = () => {
  return (
    <div className="navitems">
        <img src={logo} className="logo1"  alt="logo image" />
        <a href="#" className='home'>Home</a>
        <a href="#">Browse Menu</a>
        <a href="#">Special Offers</a>
        <a href="#">Restaurants</a>
        <a href="#">Track Order</a>    
        <a href="/"><img src={profile} alt="" /><button className='button'>Login/Signup</button></a>
    </div>
  )
}

export default Navbar;