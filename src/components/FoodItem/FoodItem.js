import React from 'react';
import { useHistory } from 'react-router-dom';
import './FoodItem.css'

const FoodItem = (props) => {
    const { name, image, detail, price, id } = props.food
    let history = useHistory()
    const handleClick = id => {
        history.push(`item/${id}`)
    }
    return (
        <div className="col-md-4">
            <div className="card" onClick={() => handleClick(id)} style={{ width: "18rem", height: "23rem" }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{detail}</p>
                    <h4 className='price'>${price}</h4>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;