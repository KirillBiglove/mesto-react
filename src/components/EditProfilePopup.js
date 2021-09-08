import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function EditProfilePopup( { isOpen, isClose, onUpdateUser }) {

    const [ name , setName ] = useState('');
    const [ description, setDescription ] = useState('');
    const currentUser = React.useContext(CurrentUserContext);

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateUser({
            name,
            about: description,
        });
    }

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]); 

    return (

        <PopupWithForm
        
        name = 'profile'
        title = 'Редактировать профиль'
        buttonText = 'Сохранить'

        isOpen={isOpen}
        isClose={isClose}
        onSubmit={handleSubmit}

        >

            <fieldset className="popup__group">
                    <input 
                    id="popup__input_type_name" 
                    className="popup__input popup__input_change_profile-title"
                    type="text" 
                    value={name || ''}
                    onChange={handleChangeName}
                    name="name" 
                    defaultValue={currentUser.name}
                    placeholder="Имя" 
                    minLength="2" 
                    maxLength="40"
                    required
                        ></input>
                    <span id="popup__input_type_name-error" className="popup__error"></span>
            </fieldset>
                <fieldset className="popup__group">
                    <input 
                    id="popup__input_type_about" 
                    className="popup__input popup__input_change_profile-subtitle"
                    type="text" 
                    value={description || ''}
                    onChange={handleChangeDescription}
                    name="about" 
                    defaultValue={currentUser.about}
                    placeholder="Род деятельности"
                    minLength="2"
                    maxLength="200" 
                    required
                    ></input>
                    <span id="popup__input_type_about-error" className="popup__error"></span>
                </fieldset>
            


        </PopupWithForm>




    )
}

export default EditProfilePopup;