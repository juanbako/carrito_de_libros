import * as React from 'react';
import { useState, useEffect } from 'react';
import LibroCard from './LibroCard';
import ItemList from './ItemList';
import catalogoPromise from '../services/catalogoPromise'


const ItemListContainer = () => {
    const [libros, setLibros] = useState([])
    console.log('libros:', libros)
    
    useEffect(() => {
        catalogoPromise
        .then(res => { 
            setTimeout(() => {
                setLibros(res)
            }, 2000)
        })
        .catch(error => alert(error))
    }, [])
    
    return (
        <>
        <ItemList libros={libros} />
        <LibroCard />
        </>
        
        );
        
}
    
export default ItemListContainer