import { useState } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ItemCount = ({stock, initial}) => {
    const [contador, setContador] = useState(initial)

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1)}
    }
    
    const restar = () => {
        if (contador > initial) {
        setContador(contador - 1)} 
    }

    const onAdd = () => {
            alert(`Agregaste ${contador} productos al carrito`)
    }

    return (
        <>
        <div>
            <Stack direction="row" justifyContent="center" spacing={2}>
                <Button  onClick={restar}> <RemoveIcon /> </Button>
                <h4> {contador} </h4>
                <Button onClick={sumar}> <AddIcon /> </Button>
            </Stack>
        </div>
        
        <Button onClick={onAdd}> Agregar al carrito </Button>
        </>
    )
}

export default ItemCount;