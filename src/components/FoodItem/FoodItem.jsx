import './FoodItem.css'
import { assets } from './../../assets/assets';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id, name, description, price, image}) => {
    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-img' src={image} alt="Image" />
            {
                !cartItems[id] ? 
                <img onClick={() => addToCart(id)} className="add" src={assets.add_icon_white} alt="Icon" /> 
                : 
                <div className="food-item-counter">
                    <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItems[id]}</p>
                    <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="Rating" />
            </div>
            <p className="food-item-description">{description}</p>
            <p className="food-item-price">Price: ${price}</p>
        </div>
    </div>
  )
}

export default FoodItem