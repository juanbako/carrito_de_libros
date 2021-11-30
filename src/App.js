import React from 'react'
import './App.css';
import NavBar from './components/navbar/navbar';
import ItemLibrosList from './components/libros/ItemLibrosList';
import ItemPeliculasList from './components/peliculas/ItemPeliculasList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailLibrosContainer from './components/libros/ItemDetailLibrosContainer';
import ItemDetailPeliculasContainer from './components/peliculas/ItemDetailPeliculasContainer';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="libros" element={ <ItemLibrosList /> } />     
          <Route path="peliculas" element={ <ItemPeliculasList /> } />
          <Route path="item/:id" element={ <ItemDetailLibrosContainer /> } />
          <Route path="itemp/:id" element={ <ItemDetailPeliculasContainer /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
