import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddCardPopup(){
    return (
        <PopupWithForm
        
        name = 'add-cards'
        title = 'Новое место'
        buttonText = 'Сохранить'

        >

            <fieldset className="popup__group">
                    <input id="popup__input_type_title" className="popup__input popup__input_change-text"
                        type="text" name="name" value="" placeholder="Название" minLength="2" maxLength="30" required></input>
                    <span id="popup__input_type_title-error" className="popup__error"></span>
            </fieldset>
                <fieldset className="popup__group">
                    <input id="popup__input_type_image" className="popup__input popup__input_change-image" type="url"
                        name="link" value="" placeholder="Ссылка на картинку" required></input>
                    <span id="popup__input_type_image-error" className="popup__error"></span>
                </fieldset>
            


        </PopupWithForm>
    )
}

export default AddCardPopup;