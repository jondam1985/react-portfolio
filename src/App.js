import React from 'react';
import './App.css';
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Puppy from './components/Puppies'

function App() {
  return (
    <main style={{backgroundColor: "red"}}>
      <Hero />
      <Navigation />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Puppy />
    </main>
  );
}

export default App;
