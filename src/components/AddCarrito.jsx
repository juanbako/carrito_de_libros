import React, {useState} from "react";

const AddCarrito = () => {
    const stock = 20;

    const [carrito, setCarrito] = useState(0);

    const sumando = () => {
        if (carrito < stock) {
            setCarrito(carrito => carrito + 1)} else {
            alert(`no quedan mas productos en stock`)
        }
    };

    const restando = () => {
        if (carrito >= 1) {
            setCarrito(carrito => carrito - 1)} 
    };

    return (
        <div>
            <h5>Cantidad en el carrito {carrito}</h5>
            <button type="button" onClick={sumando}>Agregar al carrito</button>
            <button type="button" onClick={restando}>Sacar del carrito</button>
        </div>
    )
}

export default AddCarrito