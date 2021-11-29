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
                            titulo={libro.titulo}
                            autor={libro.autor}
                            ed={libro.editorial}
                            categoria={libro.categoria}
                            precio={libro.precio}
                            stock={libro.stock}
                            imagen={libro.imagen}
                            descripcion={libro.descripcion}
                        />
                    </Grid>
                )
            })}
        </>
        )
}

export default ItemLibrosMap
