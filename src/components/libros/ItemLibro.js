import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { CardMedia } from '@mui/material';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

//backtick: `

const ItemLibro = ({id, ed, titulo, autor, categoria, imagen, precio, stock, descripcion}, setItemDetail) => {

    return(
            <Link to={`/item/${id}`}>
                <Grid
                    item
                    marginBottom={5}
                    marginTop={3}
                >
                    <Card sx={{ maxWidth: 200, margin: 2, textDecoration:"none"}}>
                        <CardMedia sx={{ margin: "auto" }}
                            component="img"
                            height="fit"
                            width="fit"
                            image={imagen}
                            alt={titulo}
                        />
                    
                        <CardContent sx={{textDecoration:"none"}}>
                            <Typography>
                                {titulo}
                            </Typography>
                            <Typography color="text.secondary">
                                {autor}
                            </Typography>
                            <Typography>
                                $ {precio}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Link>
    )
}

export default ItemLibro
