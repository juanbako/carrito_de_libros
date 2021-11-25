import * as React from 'react';
import  { Component } from 'react';
import { Link } from 'react-router-dom'

class Categorias extends Component {

    render() {
        const categorias= ["Libros", "Peliculas"]

        return <>
            <Link to= "/"
                style={{
                color:"white", 
                fontSize:"25px", 
                margin:"10px", 
                textDecoration:"none"}}
            >
                Inicio
            </Link>
            <Link to= "/libros"
                style={{
                color:"white", 
                fontSize:"25px", 
                margin:"10px", 
                textDecoration:"none"}}
            >
                {categorias[0]}
            </Link>
            <Link to= "/peliculas"
                style={{
                color:"white", 
                fontSize:"25px", 
                margin:"10px", 
                textDecoration:"none"}}
            >
                {categorias[1]}
            </Link>
                </>;
    }
}

export default Categorias;
