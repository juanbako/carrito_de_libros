//import axios from "axios";

const peliculasGhibliStock = {
        "id":1,
        "titulo":"La tumba de las luciernagas",
        "poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/qG3RYlIVpTYclR9TYIsy8p7m7AT.jpg",
        "descripcion":"In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
        "precio":"200",
        "stock":"5"
    }

//const peliculasGhibli = new Promise ((resolve, reject) => {
//    resolve((axios.get('https://ghibliapi.herokuapp.com/films?limit=5')
//            .then(response => response.data))
//    )
//    reject("Error en Peliculas")
//})

const peliculasGhibli = new Promise ((resolve, reject) => {
    resolve(peliculasGhibliStock)
    reject("Fallo peliculas")
})

export default peliculasGhibli