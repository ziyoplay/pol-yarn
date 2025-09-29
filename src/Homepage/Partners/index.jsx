import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Partners() {
    return (
        <section className="partners container">
            <div className='top'>
                <h3>Наши партнеры</h3>
            </div>
            <div className="wrap">
                <div className='logo'>
                    <img src="./images/Group (3).png" alt="" />
                </div>

                <div className='logo'>
                    <img src="./images/Group (1).png" alt="" />
                </div>

                <div className='logo'>
                    <img src="./images/Group (2).png" alt="" />
                </div>
                <div className='logo'>
                    <img src="./images/Group (2).png" alt="" />
                </div>
                

            </div>
        </section>
    );
}

export default Partners;
