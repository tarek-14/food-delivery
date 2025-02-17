import { React, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className='food-display container mt-4' id='food-display'>
      <h2 className='mb-4'>Top dishes near you</h2>
      <div className=" d-grid gap-4" style={{gridTemplateColumns:" repeat(auto-fill, minmax(240px, 1fr))", rowGap:"50px"}}>
        {food_list.map((item, index) => {
          if (category === 'All' || category === item.category) {
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />;
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;