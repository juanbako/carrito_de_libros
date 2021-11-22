import Item from "./Item"

const ItemList = ({libros}) => {
    return(
        <div>
            {libros.map(libro => {
                return(
                    <Item 
                        key={libro.id}
                        id={libro.id} 
                        titulo={libro.titulo}
                        autor={libro.autor}
                        ed={libro.editorial}
                        categoria={libro.categoria}
                        precio={libro.precio}
                        stock={libro.stock}
                    />
                )
            })}
        </div>
        )
}

export default ItemList
