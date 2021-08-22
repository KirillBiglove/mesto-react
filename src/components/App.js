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

  return (
    <div className="root">
      <div className="page root__container">
        <Header />
        <Main />  
        <Footer />
      </div>
      <EditProfilePopup />
      <AddCardPopup />
      <FullImagePopup />
      <DeleteCardPopup />
      <ChangeAvatarPopup />
    </div>
  );
}

export default App;


