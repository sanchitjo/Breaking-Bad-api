import './App.css';
import FrontPage from './components/FrontPage';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CharacterDetails from './components/CharacterDetails';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FrontPage />} />
          <Route path='/characters/:id' element={<CharacterDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
