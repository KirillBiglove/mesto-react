import { useState, useEffect} from 'react';
import profileAvatar from '../images/cousteau.jpg'
import addButton from '../images/Vector_plus.svg'
import api from '../utils/Api';


function Main({ onEditProfile, onAddPlace, onEditAvatar }) {

    const [ userName, setUserName ] = useState('');
    const [ userDescription, setUserDescription ]= useState('');
    const [ userAvatar, setUserAvatar ] = useState('');
    
    useEffect(() => {
        api.editProfile( setUserName, setUserDescription)
        .then((props) =>{
            setUserName(props.name)
            setUserDescription(props.about)
            setUserAvatar(props.avatar)    
            })
    }, [])
    

    return (
        <main>
        <section className="profile page__profile">
            <div className="profile__avatar-change-icon">
                <img className="profile__avatar" src={profileAvatar} style={{ backgroundImage: `url(${userAvatar})` }}  onClick={onEditAvatar} alt="Аватар пользователя"></img>
            </div>
            <div className="profile__info">
                <div className="profile__info-container">
                    <h1 className="profile__title">{userName}</h1>
                    <button className="profile__edit-button link" onClick={onEditProfile} type="button" aria-label="edit-button"></button>
                </div>
                <p className="profile__subtitle">{userDescription}</p>
            </div>
            <button className="profile__add-button link" onClick={onAddPlace} type="button">
            <img className="profile__rectangle-plus" src={addButton} alt="кнопка добавить"></img>
            </button>
        </section>

        <section className="elements page__elements">
            
        </section>

        </main>
    )
}

export default Main;