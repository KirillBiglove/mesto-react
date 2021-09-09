import { useState, useEffect } from 'react';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import EditProfilePopup from './EditProfilePopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import DeleteCardPopup from './DeleteCardPopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import ImagePopup from './ImagePopup.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api.js';

function App() {

  const [ onEditProfile , isEditProfilePopupOpen] = useState(false);
  const [ onAddPlace, isAddPlacePopupOpen ] = useState(false);
  const [ onEditAvatar, isEditAvatarPopupOpen ] = useState(false);
  const [ selectedCard, isSelectedCard ] = useState({ name: '', link: ''});
  const [ currentUser, setCurrentUser ] = useState({});
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

  useEffect(() => {
    api.getUserData()
    .then((props) => {
      setCurrentUser(props)
    })
        .catch((err) => {
            console.log(err);
        })
}, [])
  

function handleCardLike(card) {
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const changeLike = isLiked ? api.deleteLike(card._id) : api.setLike(card._id)
  changeLike.then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
  })
} 

function handleCardDelete(card) {
  api.deleteCard(card._id)
      .then(() => {
          const newCard = cards.filter((c) => c._id !== card._id);
          setCards(newCard);
      })
      .catch((err) => console.log(err));
};

function handleCardClick(selectedCard){
  isSelectedCard({ name: selectedCard.name, link: selectedCard.link });
}

function handleEditProfileClick() {
    isEditProfilePopupOpen(true);
}

function handleAddPlaceClick() {
    isAddPlacePopupOpen(true);
}

function handleEditAvatarClick() {
    isEditAvatarPopupOpen(true);
} 

function closeAllPopups(){
  isEditProfilePopupOpen(false);
  isAddPlacePopupOpen(false);
  isEditAvatarPopupOpen(false)
  isSelectedCard({name: '', link: '' })
}

function handleUpdateUser({ name, about }) {
  api.editProfile(name, about)
  .then((res) => {
    setCurrentUser(res);
    isEditProfilePopupOpen(false);
  })
  .catch((err) => {
    console.log(err)
  })
}

function handleUpdateAvatar({ avatar }) {
  api.changeAvatar(avatar)
  .then((res) => {
    console.log(avatar)
    setCurrentUser(res);
    isEditAvatarPopupOpen(false)
  })
  .catch((err) => {
    console.log(err)
  })
}

function handleAddPlaceSubmit({name, link}) {
    api.addCard(name, link)
    .then((newCard) => {
      setCards([newCard, ...cards])
      isAddPlacePopupOpen(false);
    })
    .catch((err) => {
      console.log(err)
    })
}

  return (
    <div className="root">
      <CurrentUserContext.Provider value={currentUser}>
      <div className="page root__container">
        <Header />
        <Main 
        
        onEditProfile = {handleEditProfileClick}
        onAddPlace = {handleAddPlaceClick}
        onEditAvatar = {handleEditAvatarClick}
        onCardClick = {handleCardClick}
        cards = {cards}
        onCardLike = {handleCardLike}
        onCardDelete = {handleCardDelete}

        />  
        <Footer />
      </div>
      <EditProfilePopup

        isOpen = {onEditProfile}
        isClose = {closeAllPopups}
        onUpdateUser = {handleUpdateUser}

      />
      <AddPlacePopup
      
        isOpen = {onAddPlace}
        isClose = {closeAllPopups}
        onUpdatePlace = {handleAddPlaceSubmit}

      />
      <DeleteCardPopup />
      <ImagePopup 
      

      card = {selectedCard}
      onClose = {closeAllPopups}

      />
      <EditAvatarPopup
      
        isOpen = {onEditAvatar}
        isClose = {closeAllPopups}
        onUpdateAvatar = {handleUpdateAvatar}

      />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;


