import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';

const ItemPelicula = ({titulo, poster, descripcion, precio, stock}) => {
    return (
        <Grid
            item
            marginBottom={5}
            marginTop={3}
        >
            <Card sx={{ maxWidth: 400,
                color: 'black.main'}}>
                <CardMedia
                    component="img"
                    height="600"
                    image={poster}
                    alt={titulo} 
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {titulo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {descripcion}
                    </Typography>
                </CardContent>
                <Typography>
                    $ {precio}
                </Typography>
                <ItemCount stock={stock} initial={1}/>
            </Card>
        </Grid>
    );
}

export default ItemPelicula
