import React from 'react';
import Navbar from './components/navbar';
import Main from './components/main';
import './style.css';


function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <Main></Main>
    </div>
  );
}

export default App;
