import React from 'react'
import './App.css';
import NavBar from './components/navbar/navbar';
import ItemListContainer from './components/libros/ItemListContainer';
import ItemDetailContainer from './components/peliculas/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/libros" element={ <ItemListContainer /> } />     
          <Route path="/peliculas" element={ <ItemDetailContainer /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
