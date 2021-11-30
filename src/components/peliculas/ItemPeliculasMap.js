import React from 'react';
import ItemPelicula from "./ItemPelicula"
import { Grid } from "@mui/material"

const ItemPeliculasMap = ({peliculas}) => {
    console.log("peliculas:", peliculas)

    return(
        <>
        {peliculas.map(pelicula => {
            return(
            <Grid
            item
            >    
                <ItemPelicula
                    id={pelicula.id}
                    key={pelicula.id} 
                    title={pelicula.title}
                    image={pelicula.image}
                    description={pelicula.description}
                    precio={200}
                    stock={4}
                />
            </Grid>
        )})}
        </>
        )
}

export default ItemPeliculasMap
