import React from 'react';

function EditProfilePopup() {
    return (
        <div className="popup root__popup popup-profile">
            <div className='popup__content'>
                <button type="button" class="popup__close-btn popup-button-close link"></button>
                <h2 className="popup__title">Редактировать профиль</h2>
                <form className="popup__form popup__container" method="get" name="form-edit" noValidate>
                    <fieldset className="popup_group">
                        <input id="popup__input_type_name" className="popup__input popup__input_change_profile-title"
                        type="text" name="name" value="Жак-Ив Кусто" placeholder="Имя" minlength="2" maxlength="40"
                        required></input>
                    <span className="popup__error" id="popup__input__type_name-error"></span>
                    </fieldset>
                    <fieldset className="popup__group">
                    <input id="popup__input_type_about" className="popup__input popup__input_change_profile-subtitle"
                        type="text" name="about" value="Исследователь океана" placeholder="Род деятельности"
                        minlength="2" maxlength="200" required></input>
                    <span id="popup__input_type_about-error" className="popup__error"></span>
                    </fieldset>
                <button type="submit" className="popup__button popup__button-disabled popup__save-btn" disabled></button>
                </form>
            </div>
        </div>
    )
}

export default EditProfilePopup;