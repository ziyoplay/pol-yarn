import React from 'react'
import './style.css'


const Footer = () => {
  return (
    <div className='footer '>
        <div className="top">
            <h3>Оставьте заявку и мы с вами свяжемся</h3>
            <form action="">
                <input type="text" placeholder='Имя'/>
                <input type="text" placeholder='Фамилия'/>
                <input type="text" placeholder='Номер телефона'/>
                <input type="email" placeholder='Эл. почта'/>
                <button>Отправить</button>
            </form>
        </div>
        <div className="bottom container">
            <div className="tepa">
                <img src="/images/Group 19288.svg" alt="" />
                <div className="right">
                    <p>+998 91 611 11 24</p>
                    <img src="/images/Vector.svg" alt="" />
                    <img src="/images/Vector.svg" alt="" />
                    <img src="/images/Vector.svg" alt="" />
                </div>
            </div>
            <div className="past">
                <p>Pol Yarn Textile © 2020. Все права защищены</p>
            </div>
        </div>
    </div>
  )
}

export default Footer