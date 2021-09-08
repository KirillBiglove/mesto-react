import React, { createRef } from 'react'
import PopupWithForm from './PopupWithForm';

function ChangeAvatarPopup( { isOpen, isClose }) {

    

    return (
        <PopupWithForm
        
        name = 'profile-image'
        title = 'Обновить Аватар'
        buttonText = 'Сохранить'

        isOpen = {isOpen}
        isClose = {isClose}

        >

            <input 
            id="popup__input_type_profile_image" 
            className="popup__input popup__input_type_profile-image"
            name="link" 
            defaultValue="" 
            placeholder="Ссылка на картинку" 
            type="url" 
            required
            ></input>
            <span id="popup__input_type_profile_image-error" className="popup__error"></span>

        </PopupWithForm> 

        

    )
}

export default ChangeAvatarPopup;