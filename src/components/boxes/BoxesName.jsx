import React, {} from 'react'
import "../css/stylesCompo.css"

const BoxesName = ({boxName, image, onBoxClick, isActive}) => {
  return (
    <div>
        <div 
            id="nameOfBoxes" 
            onClick={onBoxClick}
            className={`boxName ${isActive ? 'active' : ''}`}
            style={{ backgroundColor: isActive ? 'coral' : '#ffff66'}}
        >
                <p>{boxName}</p>
                <img src={image} alt='pictures' />
        </div>
    </div>
)
}

export default BoxesName