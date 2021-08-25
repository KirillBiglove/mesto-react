import React from 'react';
import PopupWithForm from './PopupWithForm';


function EditProfilePopup( { isOpen, isClose }) {
    return (

        <PopupWithForm
        
        name = 'profile'
        title = 'Редактировать профиль'
        buttonText = 'Сохранить'

        isOpen={isOpen}
        isClose={isClose}

        >

            <fieldset className="popup__group">
                    <input id="popup__input_type_name" className="popup__input popup__input_change_profile-title"
                        type="text" name="name" defaultValue="Жак-Ив Кусто" placeholder="Имя" minLength="2" maxLength="40"
                        required></input>
                    <span id="popup__input_type_name-error" className="popup__error"></span>
            </fieldset>
                <fieldset className="popup__group">
                    <input id="popup__input_type_about" className="popup__input popup__input_change_profile-subtitle"
                        type="text" name="about" defaultValue="Исследователь океана" placeholder="Род деятельности"
                        minLength="2" maxLength="200" required></input>
                    <span id="popup__input_type_about-error" className="popup__error"></span>
                </fieldset>
            


        </PopupWithForm>




    )
}

export default EditProfilePopup;