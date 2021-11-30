import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount';
import { Grid } from '@mui/material';

const ItemDetailPelicula = ({item, precio, stock}) => {
    
    return (
        <Grid
        item
        marginBottom={5}
        marginTop={3}
        >
            <Card sx={{ maxWidth: 445 }}>
                <Grid 
                item
                xs={8}
                margin="auto"
                >
                    <CardHeader
                        title={item.title}
                        subheader={item.director} />
                    
                    <CardMedia
                        component="img"
                        height="fit"
                        image={item.image}
                        alt={item.title}
                    />
                
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        {item.description}
                        </Typography>
                    </CardContent>
            
                    <Typography>
                        $ {precio}
                    </Typography>

                    <ItemCount stock={stock} initial={1} />
                </Grid>
            </Card>
        </Grid>
    );
}

export default ItemDetailPelicula
