import * as React from 'react';
import  { Component } from 'react';

class Categorias extends Component {

    render() {
        const categorias= ["Novelas", "Cuentos", "Biografias"]

        return <div>
                        {categorias.map( categoria => 
                            { return (
                                    <a href= "#" 
                                        style={{
                                            color:"white", 
                                            fontSize:"25px", 
                                            margin:"10px", 
                                            textDecoration:"none"}}
                                    >
                                        {categoria}
                                    </a>)
                            }
                        )}
                </div>;
    }
}

export default Categorias;
