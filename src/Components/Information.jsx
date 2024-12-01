import bell from '../assets/order-food 1.png';
import fooditems from '../assets/food 1.png';
import updateicon from '../assets/order 1.png';

const Information = () => {
  return (
    <>
      <div className="know-container">
        <h3>Know more about us!</h3>
        <a href="#" className="faq">Frequent Questions</a>
        <a href="#">Who we are?</a>
        <a href="#">Partner Program</a>
        <a href="#">Help & Support</a>
      </div>
      <div className="info-container">
        <h5>How does Order.UK work?</h5>
        <h6>What payment methods are accepted?</h6>
        <h6 className="track">Can I track my order in real-time?</h6>
        <h6 className="next-line">Are there any special discounts or <p>promotions available?</p></h6>
        <h6 className="next-line">Is Order.UK available in my area?</h6>
      </div>
        <div className="bell-icon">
            <h6>Place an Order!</h6>
            <img src={bell} alt="Notification img" />
            <p>Place order through our <br />website or Mobile app</p>
        </div>
        <div className="food-items">
            <h6>Track Progress</h6>
            <img src={fooditems} alt="Food items img" />
            <p>Your can track your order <br />status with delivery time</p>
        </div>
        <div className="order-update">
            <h6>Get your Order!</h6>
            <img src={updateicon} alt="Update icon img" />
            <p>Receive your order at a <br />lighting fast speed!</p>
        </div>
        <div className='sentences'> 
            <p className='first-sentence'>Order.UK simplifies the food ordering process. Browse through our diverse menu,</p>
            <p className='second-sentence'>select your favorite dishes, and proceed to checkout. Your delicious meal will be</p>
            <p className='last-sentence'>on its way to your doorstep in no time!</p>
        </div>
        
    </>
  )
}

export default Information;                             