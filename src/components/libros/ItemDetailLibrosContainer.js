import * as React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import promLibros from '../../services/catalogoLibros'
import ItemDetailLibro from './ItemDetailLibro'
import { Grid } from '@mui/material'


const ItemDetailLibrosContainer = () => {
    const [item, setItem] = useState({})

    const { id }= useParams();
    console.log(id)

    useEffect(() => {
        promLibros.then((res) => {
            setItem(res.find((item) => item.id === parseInt(id)))
        })
        
    }, [id]); 

    return (
        <Grid
            container
            spacing={5}
            direction="row"
            justifyContent="center"
            alignItems="center">

            <ItemDetailLibro item={item} />
        </Grid>
    )
}

export default ItemDetailLibrosContainer