import React from 'react'

function ChangeAvatarPopup() {
    return (
        <div className="popup root__popup-profile-image">
            <button type="button" className="popup__delete-close-btn popup-button-close link"></button>
            <form className="popup__form popup__form-profile-image">
                <h2 className="popup__title popup__title-profile-image">Обновить Аватар</h2>
                <input id="popup__input_type_profile_image" className="popup__input popup__input_type_profile-image" name="link" value="" placeholder="Ссылка на картинку" type="url" required></input>
                <span id="popup__input_type_profile_image-error" className="popup__error"></span>
                <button type="submit" className="popup__button popup__button-disabled popup__save-btn" disabled></button>
            </form>
        </div>

    )
}

export default ChangeAvatarPopup;