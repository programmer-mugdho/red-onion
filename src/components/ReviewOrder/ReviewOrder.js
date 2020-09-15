import React from 'react';
import { useHistory } from 'react-router-dom';
import './ReviewOrder.css'

const ReviewOrder = () => {
    const history = useHistory()
    const handleClick = ()=>{
        history.push('/order')
    }
    return (
        <div className='container'>
            <div className="row" style={{paddingTop:'70px'}}>
                <div className="col-md-5 delivery-details">
                    <h4>Edit Delivery Details</h4>
                    <hr />
                    <input type="text" placeholder='House Name'/>
                    <input type="text" placeholder='Road No.'/>
                    <input type="text" placeholder='Flat or Floor'/>
                    <input type="text" placeholder='Business Name'/>
                    <input className='instruction' type="text" placeholder='Add Delivery Instructions'/>
                    <input type="submit" onClick={handleClick} value="Save & Continue" className='submit' />
                </div>
                <div className="col-md-3">

                </div>
                <div className="col-md-4">
                    <h6>From Gulshal Plaza Restaurant GPR</h6>
                    <h6>Arriving in 20-30 minutes</h6>
                    <h6>107 Road No 8</h6>
                </div>
            </div>
        </div>
    );
};

export default ReviewOrder;