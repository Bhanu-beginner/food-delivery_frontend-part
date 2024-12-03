import '../Stylings/Address.css';
import Navigation from '../Components/Navigation';
import leftArrow from '../assets/arrow-left.png';
import addIcon from '../assets/Frame 100.png';

const Address = () => {
  return (
    <>
      <Navigation/>
      <div className='address-section'>
        <img src={leftArrow} alt="left Arrow icon" />
        <h3>Your Addresses</h3>
      </div>
      <div className='adding-address'>
        <a href="/Address Edit"><img src={addIcon} alt="plus icon" /></a>
        <p>Add Address</p>
      </div>
      <div className='default-address'>
        <h6>Engineer Grad</h6>
        <p className='default'>Default</p>
        <p className='street-no'>45, Green Street, Sector 12,<br />New Delhi, 110001, India</p>
        <p className='street-no'>Phone Number: 8734637468</p>
        <p className='edit'>Edit</p>
        <p className='rem'>Remove</p>
      </div>
      <div className='work-address'>
        <h6>Engineer Grad</h6>
        <p className='work'>Office 704, Tower B, Techno Plaza, <br />Bengaluru, Karnataka, 560100 India</p>
        <p className='ph-no'>Phone Number: 8937447362</p>
        <p className='edit'>Edit</p>
        <p className='remov'>Remove</p>
      </div>
    </>
  )
}

export default Address
