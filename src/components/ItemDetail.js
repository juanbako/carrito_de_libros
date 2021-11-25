import ItemPelicula from "./ItemPelicula"
import { Grid } from "@mui/material"

const ItemDetail = ({peliculas}) => {
    console.log("peliculas:", peliculas)

    return(
        <>
            <Grid
            container
            spacing={5}
            justifyContent="center"
            alignItems="center"
            >    
                <ItemPelicula
                    key={peliculas.id} 
                    titulo={peliculas.titulo}
                    poster={peliculas.poster}
                    descripcion={peliculas.descripcion}
                    precio={peliculas.precio}
                    stock={peliculas.stock}
                    initial={peliculas.initial}
                />
            </Grid>
        </>
        )
}

export default ItemDetail
