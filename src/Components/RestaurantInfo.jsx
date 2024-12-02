import tracking from '../assets/Tracking.png';
import id from '../assets/ID Verified.png';
import clock from '../assets/Clock.png';
import '../Stylings/RestaurantInfo.css';

const RestaurantInfo = () => {
  return (
    <>
      <div className="total-info">
<div className="information">
 <img src={tracking} alt="location icon" />
 <h3>Delivery information</h3>
 <ul>
   <li><span>Monday:</span> 12:00 AM-3:00 AM, 8:00 AM-3:00 AM</li>
   <li><span>Tuesday:</span> 8:00 AM-3:00 AM </li>
   <li><span>Wednesday:</span> 8:00 AM-3:00 AM</li>
   <li><span>Thursday:</span> 8:00 AM-3:00 AM</li>
   <li><span>Friday:</span> 8:00 AM-3:00 AM</li>
   <li><span>Saturday:</span> 8:00 AM-3:00 AM</li>
   <li><span>Sunday:</span> 8:00 AM-12:00 AM</li>
   <li><span>Estimated time until delivery:</span> 20 min</li>
 </ul>
 </div>
 <div className="contact-info">
   <img src={id} alt="user verified picture" />
   <h3>Contact information</h3>
   <ul>
     <li>If you have allergies or other dietary</li>
     <li>restrictions, please contact the restaurant. The</li>
     <li>restaurant will provide food-specific</li>
     <li>information upon request.</li>
     <li><span>Phone number</span></li>
     <li>+934443-43</li>
     <li><span>Website</span></li>
     <li>http://texaschicken.uk/</li>
   </ul>
 </div>
 <div className="operational-times">
   <img src={clock} alt="clock image" />
   <h3>Operational Times</h3>
   <ul>
     <li><span>Monday:</span> 8:00 AM-3:00 AM</li>
     <li><span>Tuesday:</span> 8:00 AM-3:00 AM</li>
     <li><span>Wednesday:</span> 8:00 AM-3:00 AM</li>
     <li><span>Thursday:</span> 8:00 AM-3:00 AM</li>
     <li><span>Friday:</span> 8:00 AM-3:00 AM</li>
     <li><span>Saturday:</span> 8:00 AM-3:00 AM</li>
     <li><span>Sunday:</span> 8:00 AM-3:00 AM</li>
   </ul>
 </div>
</div>
    </>
  )
}

export default RestaurantInfo


