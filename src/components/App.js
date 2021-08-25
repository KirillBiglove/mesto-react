import { useState, useEffect } from 'react';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import EditProfilePopup from './EditProfilePopup.js';
import AddCardPopup from './AddCardPopup.js';
import DeleteCardPopup from './DeleteCardPopup.js';
import ChangeAvatarPopup from './ChangeAvatarPopup.js';
import ImagePopup from './ImagePopup.js';

function App() {

  const [ onEditProfile , isEditProfilePopupOpen] = useState(false);
  const [ onAddPlace, isAddPlacePopupOpen ] = useState(false);
  const [ onEditAvatar, isEditAvatarPopupOpen ] = useState(false);
  const [ selectedCard, isSelectedCard ] = useState(false);

function handleCardClick(){
  isSelectedCard(true);
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

function closeAllPopups() {
  isEditProfilePopupOpen(false);
  isAddPlacePopupOpen(false);
  isEditAvatarPopupOpen(false)
  isSelectedCard(false);
}

  return (
    <div className="root">
      <div className="page root__container">
        <Header />
        <Main 
        
        onEditProfile = {handleEditProfileClick}
        onAddPlace = {handleAddPlaceClick}
        onEditAvatar = {handleEditAvatarClick}

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
    </div>
  );
}

export default App;


