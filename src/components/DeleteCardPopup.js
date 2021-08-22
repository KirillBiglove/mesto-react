import React from 'react';
import PopupWithForm from './PopupWithForm';

function DeleteCardPopup() {
    return (
        <PopupWithForm
        
        name = 'delete-card'
        title = 'Вы уверены?'
        buttonText = 'да!'

        >

        </PopupWithForm>
    )
}

export default DeleteCardPopup;