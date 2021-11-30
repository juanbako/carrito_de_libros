import axios from "axios";

const peliculasGhibli = new Promise ((resolve, reject) => {
    resolve((axios.get('https://ghibliapi.herokuapp.com/films?limit=5')
        .then(response => response.data))
    )
    reject("Error en Peliculas")
})

export default peliculasGhibli