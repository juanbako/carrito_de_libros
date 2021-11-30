import React from "react"
import catalogo from '../services/catalogo'
import { useState, useEffect } from "react"
import { Grid } from "@mui/material"
import ItemCatalogo from "./ItemCatalogo"

const CatalogoList = () => {
    const [catalogoList, setCatalogoList] = useState([]) 
    
    useEffect(() => {
        catalogo
        .then(res => { 
            setCatalogoList(res)                
        })
        console.log(catalogoList)
    }, [])
    
    return(
        <Grid
        container
        spacing={5}
        direction="row"
        justifyContent="center"
        alignItems="center"
        >
            <ItemCatalogo catalogo={catalogoList}/>
        </Grid>

    );
}

export default CatalogoList