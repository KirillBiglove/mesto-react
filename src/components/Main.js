import React from 'react';
import profileAvatar from '../images/cousteau.jpg'
import addButton from '../images/Vector_plus.svg'

function handleEditProfileClick() {
    const openEditProfile = document.querySelector('.popup-profile')
    openEditProfile.classList.add('popup_opened');
}

function handleEditAvatarClick() {
    const openEditAvatar = document.querySelector('.popup-profile-image')
    openEditAvatar.classList.add('popup_opened');
} 

function handleAddPlaceClick() {
    const openAddPlace = document.querySelector('.popup-add-cards')
    openAddPlace.classList.add('popup_opened');
}

function Main() {
    return (
        <main>
        <section className="profile page__profile">
            <div className="profile__avatar-change-icon">
                <img className="profile__avatar" src={profileAvatar} onClick={handleEditAvatarClick} alt="Аватар пользователя"></img>
            </div>
            <div className="profile__info">
                <div className="profile__info-container">
                    <h1 className="profile__title">Жак-Ив Кусто</h1>
                    <button className="profile__edit-button link" onClick={handleEditProfileClick} type="button" aria-label="edit-button"></button>
                </div>
                <p className="profile__subtitle">Исследователь Океана</p>
            </div>
            <button className="profile__add-button link" onClick={handleAddPlaceClick} type="button">
            <img className="profile__rectangle-plus"  src={addButton} alt="кнопка добавить"></img>
            </button>
        </section>

        <section className="elements page__elements">
            
        </section>

        </main>
    )
}

export default Main;