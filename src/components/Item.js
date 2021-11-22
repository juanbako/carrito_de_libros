import * as React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

const Item = ({ed, titulo, autor, categoria, precio}) => {
    return(
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <React.Fragment>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {ed}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {titulo}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {autor}
                        </Typography>
                        <Typography variant="body2">
                            {categoria}
                        </Typography>
                        <Typography>
                            ${precio}
                        </Typography>
                    </CardContent>
                </React.Fragment>
            </Card>
        </Box>
    )
}

export default Item
