import '../Stylings/Review.css';
import lessthan from '../assets/Group 57.png';
import greaterthan from '../assets/Group 56.png';
import review from '../assets/Group 53.png';
import rating from '../assets/Rectangle 64.png';

const Review = () => {
  return (
    <>
     <div className='whole-review-box'>
      <div className='dot'>
        <h3>Customer Reviews</h3>
        <img src={lessthan} alt="less than image" />
        <img src={greaterthan} alt="greater than image" />
       </div>
       <div className='review-imgs'>
            <img src={review} alt="first review image" />
            <img src={review} alt="second review image" />
            <img src={review} alt="third review image" />
        </div>
     </div>
        <img src={rating} className="restaurant-rating" alt="rating picture" />
    </>
  )
}

export default Review
