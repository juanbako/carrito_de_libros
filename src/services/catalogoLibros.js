const librosEnStock = [
    {
        "id":1,
        "titulo":"Nuestra parte de noche",
        "autor":"Enriquez, Mariana",
        "editorial":"Anagrama",
        "categoria":"Novela",
        "precio":"2000",
        "stock":"5"
    },
    {
        "id":2,
        "titulo":"Cronica del pajaro que da cuerda al mundo",
        "autor":"Murakami, Haruki",
        "editorial":"Tusquets",
        "categoria":"Novela",
        "precio":"1800",
        "stock":"2"
    },
    {
        "id":3,
        "titulo":"El sol mueve la sombra de las cosas quietas",
        "autor":"Kamiya, Alejandra",
        "editorial":"Bajo la luna",
        "categoria":"Relatos",
        "precio":"1500",
        "stock":"6"
    },
    {
        "id":4,
        "titulo":"Por qué volvias cada verano",
        "autor":"Lopez Peiro, Belen",
        "editorial":"Madreselva",
        "categoria":"Novela biografica",
        "precio":"1100",
        "stock":"3"
    },
    {
        "id":5,
        "titulo":"Rayuela",
        "autor":"Cortazar, Julio",
        "editorial":"Alfa",
        "categoria":"Novela",
        "precio":"2300",
        "stock":"1"
    }
]

const promLibros = new Promise ((resolve, reject) => {
    resolve(librosEnStock)
    reject("Fallo promLibros")
})

export default promLibros