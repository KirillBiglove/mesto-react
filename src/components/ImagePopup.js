import React from 'react';

function ImagePopup({ card, closeAllPopups }){
    return (
        <div className="popup root__popup-open-image popup-full-image">
        <div className="popup__image-container">
            <button type="button" className="popup__image-full-close-btn popup-button-close link" onClick={closeAllPopups}></button>
            <img className="popup__image-full" src="#" alt="#"></img>
            <p className="popup__image-text"></p>
        </div>
    </div>
    )
}

export default ImagePopup;