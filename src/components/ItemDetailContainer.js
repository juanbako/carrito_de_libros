import { useState, useEffect } from 'react';
import peliculasGhibli from '../services/peliculasGhibli';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
    const [peliculas, setPeliculas] = useState([])
    console.log('peliculas:', peliculas)
    
    useEffect(() => {
        peliculasGhibli
        .then(res => { 
            setTimeout(() => {
                setPeliculas(res)                
            }, 2000)
        })
    }, [])
    
    return (
        <>
        <ItemDetail peliculas={peliculas} />
        </>
        
        );        
}
    
export default ItemDetailContainer