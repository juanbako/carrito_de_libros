import React from 'react'
import { Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import peliculasGhibli from '../../services/peliculasGhibli';
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
        <Grid
        container
        spacing={5}
        direction="row"
        justifyContent="center"
        alignItems="center"
        >
            <ItemDetail peliculas={peliculas} />
        </Grid>
        </>
        );        
}
    
export default ItemDetailContainer