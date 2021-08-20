import React from 'react';
import profileAvatart from '../images/cousteau.jpg'
import addButton from '../images/Vector_plus.svg'

function Main() {
    return (
        <section className="profile page__profile">
            <div className="profile__avatar-change-icon">
                <img className="profile__avatar" src={profileAvatart} alt="Аватар пользователя"></img>
            </div>
            <div className="profile__info">
                <div className="profile__info-container">
                    <h1 className="profile__title">Жак-Ив Кусто</h1>
                    <button className="profile__edit-button link" type="button" aria-label="edit-button"></button>
                </div>
                <p className="profile__subtitle">Исследователь Океана</p>
            </div>
            <button className="profile__add-button link" type="button">
            <img className="profile__rectangle-plus" src={addButton} alt="кнопка добавить"></img>
            </button>
        </section>

    )
}

export default Main;