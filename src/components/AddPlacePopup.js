import React, { createRef } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, isClose, onUpdatePlace }){

    const cardNameRef = createRef('');
    const cardLinkRef = createRef('');

    function handleNameSubmit(e) {
            e.preventDefault();
        onUpdatePlace({
            name: cardNameRef.current.value,
            link: cardLinkRef.current.value
        })
    }

    return (
        <PopupWithForm
        
        name = 'add-cards'
        title = 'Новое место'
        buttonText = 'Сохранить'

        isOpen={isOpen}
        isClose={isClose}
        onSubmit={handleNameSubmit}

        >

            <fieldset className="popup__group">
                    <input 
                    id="popup__input_type_title" 
                    className="popup__input popup__input_change-text"
                    type="text" 
                    name="name" 
                    ref={cardNameRef}
                    placeholder="Название" 
                    minLength="2" 
                    maxLength="30" 
                    required
                    ></input>
                    <span id="popup__input_type_title-error" className="popup__error"></span>
            </fieldset>
                <fieldset className="popup__group">
                    <input id="popup__input_type_image" 
                    className="popup__input popup__input_change-image" 
                    type="url"
                    name="link" 
                    ref={cardLinkRef}
                    placeholder="Ссылка на картинку" 
                    required
                    ></input>
                    <span id="popup__input_type_image-error" className="popup__error"></span>
                </fieldset>
            


        </PopupWithForm>
    )
}

export default AddPlacePopup;