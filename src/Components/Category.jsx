import fastfood from '../assets/Rectangle 13.png'
import salads from '../assets/Rectangle 15.png'
import pasta from '../assets/Rectangle 17.png'
import piza from '../assets/Rectangle 19.png'
import vada from '../assets/Rectangle 21.png'
import soups from '../assets/Rectangle 23.png'

const Category = () => {
  return (
    <>
        <div className="category">
            <h3>Order.uk Popular Categories 🤩</h3>
        </div>
        <div className='various-items'>
            <div className="item1">
                <img src={fastfood} alt="Fastfoods picture" />
                <h6>Burgers & Fast food</h6>
                <p>21 Restaurants</p>
            </div>

            <div className="item2"> 
                <img src={salads} alt="Salads picture" />
                <h6>Salads</h6>
                <p>32 Restaurants</p>
            </div>

            <div className="item3">
                <img src={pasta} alt="Pasta picture" />
                <h6>Pasta & Casuals</h6>
                <p>4 Restaurants</p>
            </div>

            <div className="item4">
                <img src={piza} alt="Pizza picture" />
                <h6>Pizza</h6>
                <p>32 Restaurants</p>
            </div>


            <div className="item5">
                <img src={vada} alt="Vada picture" />
                <h6>Breakfast</h6>
                <p>4 Restaurants</p>
            </div>


            <div className="item6">
                <img src={soups} alt="Soups picture" />
                <h6>Soups</h6>
                <p>32 Restaurants</p>
            </div>
        </div>
    </>

  )
}

export default Category
