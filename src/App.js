import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroSection from './components/Herosection/HeroSection';
import Discover from './components/Discover/Discover';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Ordeform from './components/Orderform/Ordeform';
import Orderconfirmation from './components/Orderconformation/Orderconfirmation';

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={
        <>
        <Header/>
       <div id="home"> 
       <HeroSection/>
       </div>
        <div id="discover">
        <Discover/>
        </div>
        <div id="services">
        <Services/>
        </div>
        <div id="footer">
        <Footer/>
        </div>
        </>
      }
      />
      <Route path='/confirmation/:id' element={<Orderconfirmation/>}/>
      <Route path='/booking' element={<Ordeform/>}/>
    </Routes>
   </Router>
  );
}

export default App;
