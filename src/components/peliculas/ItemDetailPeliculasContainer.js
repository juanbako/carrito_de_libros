import * as React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ItemDetailPelicula from './ItemDetailPelicula'
import { Grid } from '@mui/material'
import peliculasGhibli from '../../services/peliculasGhibli'


const ItemDetailPeliculasContainer = () => {
    const [item, setItem] = useState({})

    const { id }= useParams();
    console.log(id)

    useEffect(() => {
        peliculasGhibli.then((res) => {
            setItem(res.find((item) => item.id == id))
        })
        
    }, [id]); 
    
    return (
        <Grid
            container
            spacing={5}
            direction="row"
            justifyContent="center"
            alignItems="center">

            <ItemDetailPelicula item={item} precio={200} stock={4} />
        </Grid>
    )
}

export default ItemDetailPeliculasContainer