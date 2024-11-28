import image from '../assets/LOGO 2.png';
import appimages from '../assets/app-store-badges-en 1.png';
import fb from '../assets/Facebook.png';
import snap from '../assets/Snapchat.png';
import tiktok from '../assets/TikTok.png';
import insta from '../assets/Instagram.png';

const Footer = () => {
  return (
    <>
     <footer className="footer"> 
        <div className="container"> 
            <img src={image} alt="footer logo" />
            <img src={appimages} alt="download sources" />
            <p className="below">Company # 490039-445, Registered with <br/>House of companies. </p>
        </div> 
        <div className='social-links'>
            <h5>Get Exclusive Deals in your Inbox</h5>
            <input className='field'  type="email" placeholder='youremail@gmail.com'/>
            <input className='button' type="button" value="Subscribe" />
            <p>we wont spam, read our email policy</p>
            <a href="https://www.facebook.com/?_rdr"><img src={fb} alt="facebook icon" /></a>
            <a href="https://www.instagram.com/accounts/login/?hl=en"><img src={insta} alt="instagram icon" /></a>
            <a href="https://www.tiktok.com/login"><img src={tiktok} alt="tiktok icon" /></a>
            <a href="https://www.snapchat.com/"> <img src={snap} alt="snapchat icon" /></a>
        </div>
        <div className='info'>
          <h5>Legal Pages</h5>
          <a href="#">Terms and conditions</a>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
          <a href="#">Modern Slavery Statement</a>
        </div>
        <div className='static-links'>
          <h5>Important Links</h5>
          <a href="#">Get help </a>
          <a href="#">Add your restaurant</a>
          <a href="/signup">Sign up to deliver</a>
          <a href="#">Create a business account</a>
        </div>  
    </footer>
    <div className='end'> 
      <p>Order.uk Copyright 2024, All Rights Reserved.</p>
      </div>
      <div className='base-links'>
      <a href="#">Privacy Policy  </a> 
      <a href="#"> Terms</a>
      <a href="#">Pricing</a>
      <a href="#">Do not sell or share my personal information</a>
     </div>
    </>
   
  )
}

export default Footer


                          


