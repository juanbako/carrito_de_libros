import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {

    console.log(item)
    
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardHeader
            title={item.titulo}
            subheader={item.autor} />
        <CardMedia
            component="img"
            height="194"
            image={item.imagen}
            alt={item.titulo}
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
            {item.descripcion}
            </Typography>
        </CardContent>
        
        <Typography>
            $ {item.precio}
        </Typography>

        <ItemCount stock={item.stock} initial={1} />
        </Card>
    );
}

export default ItemDetail
