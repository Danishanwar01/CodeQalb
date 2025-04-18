import React from 'react';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Home from './components/Home';
import Careers from './components/Careers';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/career' element={<Careers />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
