import React from 'react';
import ItemLibro from "./ItemLibro"
import { Grid } from "@mui/material"

const ItemLibrosMap = ({libros}) => {
    return(
        <>
            {libros.map(libro => {
                return(
                    <Grid
                    item 
                    >
                        <ItemLibro
                            key={libro.id}
                            id={libro.id} 
                            titulo={libro.title}
                            autor={libro.autor_director}
                            ed={libro.editorial}
                            categoria={libro.categoria}
                            precio={libro.precio}
                            stock={libro.stock}
                            imagen={libro.image}
                            descripcion={libro.description}
                        />
                    </Grid>
                )
            })}
        </>
        )
}

export default ItemLibrosMap
