import React from 'react';

function ImagePopup({ card, onClose }){

    return (

        <div className={`popup root__popup-open-image popup-full-image ${card.name && 'popup_opened'}`} onClick={onClose}>
            <div className="popup__image-container">
                <button type="button" className="popup__image-full-close-btn popup-button-close link"></button>
                <img className="popup__image-full" src={card.link} alt={card.name}></img>
                <p className="popup__image-text">{card.name}</p>
            </div>
        </div>

    )
}

export default ImagePopup;