import React from 'react';

import Menu from './components/Menu';
import Home from './components/Home';
import AboutUs from './components/About';
import ContactUs from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Menu />
      <Home />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
