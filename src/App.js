import React from 'react'
import './App.css';
import NavBar from './components/navbar/navbar';
import ItemLibrosList from './components/libros/ItemLibrosList';
import ItemPeliculasList from './components/peliculas/ItemPeliculasList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="libros" element={ <ItemLibrosList /> } />     
          <Route path="peliculas" element={ <ItemPeliculasList /> } />
          <Route path="item/:id" element={ <ItemDetailContainer /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
