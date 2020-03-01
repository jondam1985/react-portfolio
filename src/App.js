import React, { useState } from 'react';
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Modals from './components/Modals';

function App() {
  const [active, setActive] = useState("unactive");

  return (
    <>
    <main>
      <Hero />
      <Navigation setActive={setActive} />
      </main>
      <div className="modal">
      <Modals active={active} setActive={setActive} />
      </div>
      </ >
  );
}

export default App;
