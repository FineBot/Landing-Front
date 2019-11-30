import React from 'react';
import Header from './modules/header/Header';
import About from './modules/about/About';
import Projects from './modules/projects/Projects';
//import News from './modules/news/News';
import Contacts from './modules/contacts/Contacts';
import Footer from './modules/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      {/* <News/> */}
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;