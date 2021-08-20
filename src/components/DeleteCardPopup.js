import React from 'react';

function DeleteCardPopup() {
    return (
        <div className="popup root__popup-delete-card popup-delete-card">
            <button type="button" className="popup__delete-close-btn popup-button-close link"></button>
            <form className="popup__form popup__form-delete">
                <h2 className="popup__title popup__title-delete">Вы уверены?</h2>
                <button className="popup__button popup__save-btn popup__save-btn-delete" type="submit"></button>
            </form>
        </div>
    )
}

export default DeleteCardPopup;