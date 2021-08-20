import Header from '../src/components/Header.js'
import Main from '../src/components/Main.js'
import Footer from '../src/components/Footer.js'
import EditProfilePopup from '../src/components/EditProfilePopup.js';
import AddCardPopup from '../src/components/AddCardPopup.js';
import FullImagePopup from '../src/components/FullImagePopup.js';
import DeleteCardPopup from '../src/components/DeleteCardPopup.js';
import ChangeAvatarPopup from '../src/components/ChangeAvatarPopup.js';


function App() {
  return (
    <body className="root">
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
    </body>
      
  );
}

export default App;


