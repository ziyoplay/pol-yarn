import React from 'react'
import './style.css'


const Cards = () => {
  return (
    <div className='cards'>
        <div className="card">
            <h3>текстильная <br />резинка</h3>
            <p>Текстильная резинка представляет собой качественную эластичную тесьму, она широко применяется в швейном производстве.</p>
            <a href="">подробнее <img src="./images/arrow-right.png" alt="" /></a>
        </div>
        <div className="card">
            <h3>текстильная <br />резинка</h3>
            <p>Текстильная резинка представляет собой качественную эластичную тесьму, она широко применяется в швейном производстве.</p>
            <a href="">подробнее <img src="./images/arrow-right.png" alt="" /></a>
        </div>
    </div>
    
  )
}

export default Cards