import './css/App.css'
import { BannerDesc, BannerPhoto } from './components/Banners';
import { Calculator } from './components/Calculator';
import { ContactForm } from './components/ContactForm';
import Faq from './components/Faq';
import NavBar from './components/NavBar';

function App() {

  return (
    <>
      <NavBar/>
      <BannerPhoto/>
      <BannerDesc/>
      <Calculator/>
      <ContactForm/>
      <Faq/>
    </>
  )
}

export default App
