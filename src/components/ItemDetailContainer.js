import * as React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import promLibros from '../services/catalogoLibros'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    //const [item, setItem] = useState({})
    const [item, setItem] = useState([])

    const { id }= useParams();
    console.log(id)

    useEffect(() => {
        promLibros.then((res) => {
            setItem(res.find((item) => item.id === parseInt(id)))
        })
        
    }, [id]);

    return <ItemDetail item={item} />
}

export default ItemDetailContainer