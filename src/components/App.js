import React from 'react';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import EditProfilePopup from './EditProfilePopup.js';
import AddCardPopup from './AddCardPopup.js';
import FullImagePopup from './FullImagePopup.js';
import DeleteCardPopup from './DeleteCardPopup.js';
import ChangeAvatarPopup from './ChangeAvatarPopup.js';






function App() {

  const [ onEditProfile , isEditProfilePopupOpen] = React.useState(false);
  const [ onAddPlace, isAddPlacePopupOpen ] = React.useState(false);
  const [ onEditAvatar, isEditAvatarPopupOpen ] = React.useState(false);

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
      <FullImagePopup />
      <DeleteCardPopup />
      <ChangeAvatarPopup
      
        isOpen = {onEditAvatar}
        isClose = {closeAllPopups}

      />
    </div>
  );
}

export default App;


