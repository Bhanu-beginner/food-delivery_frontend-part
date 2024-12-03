import Navigation from '../Components/Navigation';
import leftArrow from '../assets/arrow-left.png';
import '../Stylings/Profile.css';
import avatar from '../assets/Ellipse 11.png';
import walleticon from '../assets/Icon (1).png';
import plusicon from '../assets/Frame 100.png';
import pencil from '../assets/edit-3.png';



const Profile = () => {
  return (
    <>
        <Navigation/>     
        <div className='profile-sec'>
            <img src={leftArrow} alt="left arrow icon" />
            <h3>My Profile</h3>
            <img src={avatar} className='picture' alt="profile icon" />
            <h6>Engineer Grad</h6>
            <a href=""><span>Edit</span></a>
        </div> 
        <div className='label-section'>
            <label htmlFor='name'>Full Name</label><br />
            <input type="text" id="name" placeholder='Engineer Grad'/>
            <label htmlFor='emailaddress' className='email'>Email Address</label><br />
            <input type="text" id="emailaddress" placeholder='Engineer@yahoo.com'/>
            <label htmlFor='gender' className='gender'> Gender</label><br />
            <input type="text" id="gender" placeholder='Male'/>
            <label htmlFor='country' className='country'> Country</label><br />
            <input type="text" id="country" placeholder='India'/>
            <h5>Saved Payment Methods</h5>
        </div>
         <div className='first-card'>
            <img src={walleticon} alt="Wallet icon" />
            <p><span>xxxx xxxx xxxx 1234</span></p>
            <p className='eng'>Engineer Grad</p>
            <img src={pencil} className='pen-icon' alt="pen icon " />
         </div>
            
        <div className='second-card'>
            <img src={walleticon} alt="Wallet icon" />
            <p><span>xxxx xxxx xxxx 6789</span></p>
            <p className='eng'>Engineer Grad</p>
            <img src={pencil} className='pen-icon' alt="pen icon " />
        </div>
        

        <div className='third-card'>
            <img src={walleticon} alt="Wallet icon" />
            <p><span>xxxx xxxx xxxx 3468</span></p>
            <p className='eng'>Engineer Grad</p>
            <img src={pencil} className='pen-icon' alt="pen icon " />
        </div>
        <div className='fourth-card'>
            <img src={plusicon} className='addd' alt="adding icon" />
            <p>Add New Card</p>
        </div>
    </>
  )
}

export default Profile
