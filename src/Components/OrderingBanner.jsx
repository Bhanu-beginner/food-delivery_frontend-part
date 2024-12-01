import bannerimage from '../assets/friends-laughing-using-mobiles 2.png';
import logo from '../assets/LOGO 1.png';
import badges from '../assets/app-store-badges-en 1.png'

const OrderingBanner = () => {
  return (
    <>
      <div className="order-banner">
        <img src={bannerimage} className='couple-banner'  alt="couple ordering picture" />
          <div className='span-element'>
              <p>Personalised</p>
              <p className='instant'> & Instant</p>
          </div>
      </div>
      <div className='app-badges'>
         <img src={logo} className='order-logo' alt="" /><span>ing is more </span>
         <p>Download the Order.uk app for faster ordering</p>
        <img src={badges} className='icons'  alt="downloading resoure images" />
      </div>
    </>
  )
}

export default OrderingBanner
