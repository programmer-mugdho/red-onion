import React from 'react';
import './TopBanner.css'

const TopBanner = () => {
    return (
        <div className='top-banner'>
            <div>
                <h1>Best Food Waiting For Your Belly</h1>
                <div className="form">
                    <input type="text" placeholder='Search Food Items' className='form-control' />
                    <button className='nav-link' id='search'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;