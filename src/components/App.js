import { useState, useEffect } from 'react';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import EditProfilePopup from './EditProfilePopup.js';
import AddCardPopup from './AddCardPopup.js';
import DeleteCardPopup from './DeleteCardPopup.js';
import ChangeAvatarPopup from './ChangeAvatarPopup.js';
import ImagePopup from './ImagePopup.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import api from '../utils/Api.js';

function App() {

  const [ onEditProfile , isEditProfilePopupOpen] = useState(false);
  const [ onAddPlace, isAddPlacePopupOpen ] = useState(false);
  const [ onEditAvatar, isEditAvatarPopupOpen ] = useState(false);
  const [ selectedCard, isSelectedCard ] = useState({ name: '', link: ''});
  const [ currentUser, setCurrentUser ] = useState({});

  useEffect(() => {
    api.getUserData()
    .then((props) => {
      console.log(props)
      setCurrentUser(props)
    })
        .catch((err) => {
            console.log(err);
        })
}, [])
  

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

        />  
        <Footer />
      </div>
      <EditProfilePopup

        isOpen = {onEditProfile}
        isClose = {closeAllPopups}

      />
      <AddCardPopup
      
        isOpen = {onAddPlace}
        isClose = {closeAllPopups}

      />
      <DeleteCardPopup />
      <ImagePopup 
      

      card = {selectedCard}
      onClose = {closeAllPopups}

      />
      <ChangeAvatarPopup
      
        isOpen = {onEditAvatar}
        isClose = {closeAllPopups}

      />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;


