import bannerimage from '../assets/friends-laughing-using-mobiles 2.png';
import logo from '../assets/LOGO 1.png';
import badges from '../assets/app-store-badges-en 1.png'

const OrderingBanner = () => {
  return (
    <>
      <div className="order-banner">
        <img src={bannerimage} className='couple-banner'  alt="couple ordering picture" />
        <img src={logo} alt="" /><span>ing is more </span>
      </div>

      <div className='app-badges'>
        <img src={badges} alt="downloading resoure images" />
      </div>
    </>
  )
}

export default OrderingBanner
