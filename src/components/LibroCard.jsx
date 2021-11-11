import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ItemCount from './ItemCount'; 


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    
    return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        }),
    }));

export default function LibroCard() {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345, margin: 2}}>
        
            <CardMedia sx={{ margin: 2}}
                component="img"
                height="310"
                image="\img\primera-persona-del-singular_murakami2.jpg"
                alt="Primera persona del singular - Haruki Murakami"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                El esperado nuevo libro de relatos de Haruki Murakami. Cuando los recuerdos de adolescencia y 
                juventud difuminan las fronteras entre realidad y ficción.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Reseña:</Typography>
                    <Typography paragraph>
                    Amores de adolescencia evocados con serena nostalgia, jóvenes apenas vislumbradas, 
                    reseñas de jazz sobre discos imposibles, un poeta amante del béisbol, un simio parlante 
                    que trabaja como masajista y un anciano que habla del círculo con varios centros… 
                    Los personajes y las escenas de este esperadísimo volumen de relatos hacen saltar 
                    por los aires los límites entre la imaginación y el mundo real. Y nos devuelven, intactos, 
                    los amores perdidos, las relaciones truncadas y la soledad, la adolescencia, los reencuentros 
                    y, sobre todo, la memoria del amor, porque «nadie podrá arrebatarnos el recuerdo de haber 
                    amado o de haber estado enamorados alguna vez en la vida», asegura el narrador. Un narrador 
                    en primera persona que, a veces, podría ser el propio Murakami.
                    </Typography>
                </CardContent>
            </Collapse>
            <ItemCount stock={20} initial={1} />
        </Card>
    );
}