import React, { useState } from 'react';
import './FoodDetail.css'
import { useParams } from 'react-router-dom';
import foodData from '../../images/foods'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const FoodDetail = () => {
    const { id } = useParams()
    const { name, price, image } = foodData.find(food => food.id == id)
    const [count, setCount] = useState(1)
    const handleCount = (q) => {
        if (price*count > 0) {
            setCount(count + q)
        }
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-5 description">
                    <h1>{name}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur maiores minima dolores fugiat saepe reiciendis nihil quibusdam iste error facere?</p>
                    <div className="price-quantity">
                        <h2>${(price*count).toFixed(2)}</h2>
                        <div className="quantity-container">
                            <h4 className='minus' onClick={() => handleCount(-1)}>-</h4>
                            <h4 className='quantity'>{count}</h4>
                            <h4 className='plus' onClick={() => handleCount(+1)}>+</h4>
                        </div>
                    </div>
                    <button className='addbtn'><FontAwesomeIcon icon={faShoppingCart} /> Add</button>
                    <div className="row">
                        <div className="col-md-6">
                            <img width='100%' src={foodData[0].image} alt="" />
                        </div>
                        <div className="col-md-6">
                            <img width='100%' src={foodData[1].image} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-6">
                    <img width='100%' src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FoodDetail;