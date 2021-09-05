import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import addButton from '../images/Vector_plus.svg'
import api from '../utils/Api';
import Card from './Card';


function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

    const profileData = useContext(CurrentUserContext);
    const [ cards, setCards ] = useState([]);


    useEffect(() => {
        api.getInitialCards()
        .then((res) => {
    setCards(res);
    })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    

    return (
        <main>
        <section className="profile page__profile">
            <div className="profile__avatar-change-icon">
                <img className="profile__avatar" src={profileData.avatar} onClick={onEditAvatar} alt="Аватар пользователя"></img>
            </div>
            <div className="profile__info">
                <div className="profile__info-container">
                    <h1 className="profile__title">{profileData.name}</h1>
                    <button className="profile__edit-button link" onClick={onEditProfile} type="button" aria-label="edit-button"></button>
                </div>
                <p className="profile__subtitle">{profileData.about}</p>
            </div>
            <button className="profile__add-button link" onClick={onAddPlace} type="button">
            <img className="profile__rectangle-plus" src={addButton} alt="кнопка добавить"></img>
            </button>
        </section>

        <section className="elements page__elements">
        
        {cards.map(card => 
        (<Card

            card = {card}
            key = {card._id}
            onCardClick = {onCardClick}

        />)
        )}
        </section>

        </main>
    )
}

export default Main;