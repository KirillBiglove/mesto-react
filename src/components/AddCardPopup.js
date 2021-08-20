import React from 'react';

function AddCardPopup(){
    return (
        <div className="popup root__popup popup-add-cards">
        <div className="popup__content">
            <button type="button" className="popup__close-btn popup-button-close link"></button>
            <h2 className="popup__cards-title">Новое место</h2>
            <form className="popup__form popup__cards-container" method="get" name="form-cards-edit" noValidate>
                <fieldset className="popup__group">
                    <input id="popup__input_type_title" className="popup__input popup__input_change-text" type="text"
                        name="name" value="" placeholder="Название" minLength="2" maxLength="30" required></input>
                    <span id="popup__input_type_title-error" className="popup__error"></span>
                </fieldset>
                <fieldset className="popup__group">
                    <input id="popup__input_type_image" className="popup__input popup__input_change-image" type="url"
                        name="link" value="" placeholder="Ссылка на картинку" required></input>
                    <span id="popup__input_type_image-error" className="popup__error"></span>
                </fieldset>
                <button type="submit" className="popup__button popup__save-btn" disabled></button>
            </form>
        </div>
    </div> 
    )
}

export default AddCardPopup;