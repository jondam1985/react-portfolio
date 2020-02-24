import React, { useState} from 'react';
import './App.css';
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Modals from './components/Modals';

function App() {
  const [active, setActive] = useState("unactive");

  return (
    <main style={{backgroundColor: "red"}}>
      <Hero />
      <Navigation setActive={setActive} />
      <Modals active={active} setActive={setActive} />
    </main>
  );
}

export default App;
