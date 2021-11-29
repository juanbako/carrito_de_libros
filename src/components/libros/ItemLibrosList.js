import * as React from 'react';
import { useState, useEffect } from 'react';
import ItemLibrosMap from './ItemLibrosMap';
import promLibros from '../../services/catalogoLibros'
import { Grid } from '@mui/material';

const ItemLibrosList = () => {
    const [libros, setLibros] = useState([])
    console.log('libros:', libros)
    
    useEffect(() => {
        promLibros
        .then(res => { 
            setTimeout(() => {
                setLibros(res)
            }, 2000)
        })
        .catch(error => alert(error))
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
                <ItemLibrosMap libros={libros} />
            </Grid>
        </>
        );
        
}
    
export default ItemLibrosList