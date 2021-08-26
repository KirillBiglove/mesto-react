import React from 'react';


function PopupWithForm({ name, title, children, buttonText, isOpen, isClose }) {
    return (
        <div className={`popup root__popup popup-${name} ${isOpen && 'popup_opened'}`}>
            <div className="popup__content">
            <button type="button" className="popup__close-btn popup-button-close link" onClick={isClose} ></button>
            <h2 className="popup__title">{title}</h2>
            <form className="popup__form popup__container" method="get" name={`form-${name}`} noValidate>
                {children}
                <button type="submit" className="popup__button popup__save-btn" disabled>{buttonText}</button>
            </form>
            </div>
        </div>
        
    )
}

export default PopupWithForm;