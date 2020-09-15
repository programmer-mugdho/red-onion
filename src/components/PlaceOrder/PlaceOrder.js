import React, { useContext } from 'react';
import './PlaceOrder.css'
import map from '../../images/map.PNG'
import bike from '../../images/Image/Group 1151.png'
import helmet from '../../images/Image/Group 1152.png'
import { UserContext } from '../../App';


const PlaceOrder = () => {
    const [user, setUser] = useContext(UserContext)
    console.log(user)
    return (
        <div className='container'>
            <div className="row order-container">
                <div className="col-md-8">
                    <img src={map} width='82%' style={{ borderRadius: '15px' }} alt="" />
                </div>
                <div className="col-md-4">
                    <div className="delivery-box">
                        <div className="container">
                            <img src={bike} width='40%' style={{ paddingLeft: '20px', marginLeft: '20px', marginTop: '20px' }} alt="" />
                        </div>
                        <div className="location-container">

                        </div>
                        <div className="rider-container">
                            <div className="row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="col-md-4">
                                    <img src={helmet} width='100%' alt="" />
                                </div>
                                <div className="col-md-8" >
                                    <h6>{user.name}</h6>
                                    <p>Your Rider</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;