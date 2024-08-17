import React from 'react'
import imageArrowDown from '/Images/arrow_down.png';
import './ArrowDown.css'

const ArrowDownComp = () => {
    return (
        <div className='customArrowDown'>
            <img src={imageArrowDown} alt="ArrowDown" />
        </div>
    )
}

export default ArrowDownComp