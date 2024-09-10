import './css/App.css'
import { BannerDesc, BannerPhoto } from './components/Banners';
import { Calculator } from './components/Calculator';
import { ContactForm } from './components/ContactForm';
import Faq from './components/Faq';
import NavBar from './components/NavBar';

function App() {

  return (
    <>
      <div id="warme">
        <NavBar />
      </div>
      <div id="banner">
        <BannerPhoto />
      </div>
      <div id="desc">
        <BannerDesc />
      </div>
      <div id="calc">
        <Calculator />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Faq />
    </>
  )
}

export default App
