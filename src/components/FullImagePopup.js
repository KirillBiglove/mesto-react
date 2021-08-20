import React from 'react';

function FullImagePopup() {
    return (
        <div className="popup root__popup-open-image popup-full-image">
        <div className="popup__image-container">
            <button type="button" className="popup__image-full-close-btn popup-button-close link"></button>
            <img className="popup__image-full" src="#" alt="#"></img>
            <p className="popup__image-text"></p>
        </div>
    </div>
    )
}

export default FullImagePopup;