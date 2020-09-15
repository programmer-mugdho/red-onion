import React, { useEffect, useState } from 'react';
import FoodItem from '../FoodItem/FoodItem';
import './FoodBanner.css'
import foodsData from '../../images/foods'
import { Link, useHistory } from 'react-router-dom';

const FoodBanner = (props) => {
    // const {category} = props
    const [foods, setFoods] = useState([])
    const [category, setCategory] = useState('lunch')
    useEffect(() => {
        const fetchFoods = foodsData.filter(food => food.category == category)
        setFoods(fetchFoods)
    }, [category])
    const history = useHistory()
    const handleClick = ()=>{
        history.push('/review')
    }

    const linkActiveStyle = {
        color: '#f91944',
        borderBottom: '2px solid #f91944'
    }

    return (
        <div className='container'>
            <div className="top-links">
                <a style={category == 'breakfast' ? linkActiveStyle : {}} onClick={() => setCategory('breakfast')}>Breakfast</a>
                <a style={category == 'lunch' ? linkActiveStyle : {}} onClick={() => setCategory('lunch')}>Lunch</a>
                <a style={category == 'dinner' ? linkActiveStyle : {}} onClick={() => setCategory('dinner')}>Dinner</a>
            </div>
            <div className="row">
                {
                    foods.map(food => <FoodItem food={food} key={food.name} />)
                }
            </div>
            <div className="btn-container">
                <button onClick={handleClick} className='checkout-btn'>Checkout Your Food</button>
            </div>
        </div>
    );
};

export default FoodBanner;