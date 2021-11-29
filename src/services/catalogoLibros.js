const librosEnStock = [
    {
        "id":1,
        "key": 1,
        "titulo":"Nuestra parte de noche",
        "autor":"Enriquez, Mariana",
        "editorial":"Anagrama",
        "categoria":"Novela",
        "precio":"2000",
        "descripcion":"reseña del libro",
        "stock":"5",
        "imagen":"../img/nuestra-parte-de-noche_enriquez.jpeg"
    },
    {
        "id":2,
        "key": 2,
        "titulo":"Cronica del pajaro que da cuerda al mundo",
        "autor":"Murakami, Haruki",
        "editorial":"Tusquets",
        "categoria":"Novela",
        "precio":"1800",
        "descripcion":"reseña del libro",
        "stock":"2",
        "imagen":"../img/cronica-del-pajaro-que-da-cuerda-al-mundo_murakami.jpg"
    },
    {
        "id":3,
        "key": 3,
        "titulo":"El sol mueve la sombra de las cosas quietas",
        "autor":"Kamiya, Alejandra",
        "editorial":"Bajo la luna",
        "categoria":"Relatos",
        "precio":"1500",
        "descripcion":"reseña del libro",
        "stock":"6",
        "imagen":"../img/el-sol-mueve-la-sombra-de-las-cosas-quietas_kamiya.jpg"
    },
    {
        "id":4,
        "key": 4,
        "titulo":"Por qué volvias cada verano",
        "autor":"Lopez Peiro, Belen",
        "editorial":"Madreselva",
        "categoria":"Novela biografica",
        "precio":"1100",
        "descripcion":"reseña del libro",
        "stock":"3",
        "imagen":"../img/por-que-volvias-cada-verano_lopez-peiro.jpg"
    },
    {
        "id":5,
        "key": 5,
        "titulo":"Rayuela",
        "autor":"Cortazar, Julio",
        "editorial":"Alfa",
        "categoria":"Novela",
        "precio":"2300",
        "descripcion":"reseña del libro",
        "stock":"1",
        "imagen":"../img/rayuela_cortazar.jpeg"
    },
    {
        "id":6,
        "key": 6,
        "titulo":"Primera persona del singular",
        "autor":"Murakami, Haruki",
        "editorial":"Tusquets",
        "categoria":"Cuentos",
        "precio":"1900",
        "descripcion":"reseña del libro",
        "stock":"3",
        "imagen":"../img/primera-persona-del-singular_murakami.jpg"
    }
]

const promLibros = new Promise ((resolve, reject) => {
    resolve(librosEnStock)
    reject("Fallo promLibros")
})

export default promLibros