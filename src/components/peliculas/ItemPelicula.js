import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const ItemPelicula = ({id, title, image, description, precio, stock}) => {
    return (
            <Link to={`/itemp/${id}`}>
                <Grid
                    item
                    marginBottom={5}
                    marginTop={3}
                >
                    <Card sx={{ maxWidth: 200,
                        color: 'black.main'}}>
                        <CardMedia
                            component="img"
                            height="fit"
                            image={image}
                            alt={title} 
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                        </CardContent>
                        <Typography>
                            $ {precio}
                        </Typography>
                    </Card>
                </Grid>
            </Link>
    );
}

export default ItemPelicula
