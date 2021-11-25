import ItemPelicula from "./ItemPelicula"
import { Grid } from "@mui/material"

const ItemDetail = ({peliculas}) => {
    console.log("peliculas:", peliculas)

    return(
        <>
        {peliculas.map(pelicula => {
            return(
            <Grid
            item
            >    
                <ItemPelicula
                    key={pelicula.id} 
                    titulo={pelicula.title}
                    poster={pelicula.image}
                    descripcion={pelicula.description}
                    precio={200}
                    stock={4}
                />
            </Grid>
        )})}
        </>
        )
}

export default ItemDetail
