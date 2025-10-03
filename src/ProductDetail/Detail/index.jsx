import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
const Detail = () => {
    return (
        <div className='detail container'>
            <div className="top">
                <h3>Текстильная резинка</h3>
            </div>
            <div className="wrap">
                <div className="left">
                    <img src="./images/Rectangle 11.png" alt="" />
                </div>
                <div className="right">
                    <h4>Ткацкая резинка</h4>
                    <p>Фабрика Рэдтекс готова предложить вязаную резинку оптом от производителя. <br />
                        Вязаная резинка наиболее бюджетный вариант в своей категории товаров. <br />
                        Мы производим эластичную ленту от 4 до 50 мм.</p>
                </div>
            </div>

           <div className="btn">
             <Link to={'/'} className="back">Заказать сейчас</Link>
           </div>
        </div>
    )
}

export default Detail