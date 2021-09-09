import React, { createRef } from 'react'
import PopupWithForm from './PopupWithForm';

function ChangeAvatarPopup( { isOpen, isClose, onUpdateAvatar }) {

    const avatarRef = createRef('');

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            avatar: avatarRef.current.value
        });
        debugger
    } 

    return (
        <PopupWithForm
        
        name = 'profile-image'
        title = 'Обновить Аватар'
        buttonText = 'Сохранить'

        isOpen = {isOpen}
        isClose = {isClose}
        onSubmit = {handleSubmit}

        >

            <input 
            id="popup__input_type_profile_image" 
            className="popup__input popup__input_type_profile-image"
            ref={avatarRef}
            name="link" 
            placeholder="Ссылка на картинку" 
            type="url" 
            required
            ></input>
            <span id="popup__input_type_profile_image-error" className="popup__error"></span>

        </PopupWithForm> 

        

    )
}

export default ChangeAvatarPopup;