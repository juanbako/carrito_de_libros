import promLibros from "./catalogoLibros";
import peliculasGhibli from "./peliculasGhibli"


//const Catalogo = () => {
    //const [libros, setLibros] = useState([])
    //const [peliculas, setPeliculas] = useState([])
    
    
    //useEffect(() => {
        // promLibros
        // .then(res => { 
        //     setLibros(res)
        // })
        // peliculasGhibli
        // .then(res => {
        //     setPeliculas(res)
        // })
        
    //}, [])
    const libros = [promLibros]
    const peliculas = [peliculasGhibli]

    const catalogo = new Promise ((resolve, reject) => {
        resolve(libros.concat(peliculas))
        reject("error en catalogo")
    })
    
    console.log(catalogo)

//    return (
//        <h1>consologuea el catalogo</h1>
//)
//}
export default catalogo

