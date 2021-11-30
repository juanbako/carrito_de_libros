const librosEnStock = [
    {
        "id":1,
        "key": 1,
        "title":"Nuestra parte de noche",
        "autor_director":"Enriquez, Mariana",
        "editorial":"Anagrama",
        "categoria":"Novela",
        "precio":"2000",
        "description":"reseña del libro",
        "stock":"5",
        "image":"../img/nuestra-parte-de-noche_enriquez.jpeg"
    },
    {
        "id":2,
        "key": 2,
        "title":"Cronica del pajaro que da cuerda al mundo",
        "autor_director":"Murakami, Haruki",
        "editorial":"Tusquets",
        "categoria":"Novela",
        "precio":"1800",
        "description":"reseña del libro",
        "stock":"2",
        "image":"../img/cronica-del-pajaro-que-da-cuerda-al-mundo_murakami.jpg"
    },
    {
        "id":3,
        "key": 3,
        "title":"El sol mueve la sombra de las cosas quietas",
        "autor_director":"Kamiya, Alejandra",
        "editorial":"Bajo la luna",
        "categoria":"Relatos",
        "precio":"1500",
        "description":"reseña del libro",
        "stock":"6",
        "image":"../img/el-sol-mueve-la-sombra-de-las-cosas-quietas_kamiya.jpg"
    },
    {
        "id":4,
        "key": 4,
        "title":"Por qué volvias cada verano",
        "autor_director":"Lopez Peiro, Belen",
        "editorial":"Madreselva",
        "categoria":"Novela biografica",
        "precio":"1100",
        "description":"reseña del libro",
        "stock":"3",
        "image":"../img/por-que-volvias-cada-verano_lopez-peiro.jpg"
    },
    {
        "id":5,
        "key": 5,
        "title":"Rayuela",
        "autor_director":"Cortazar, Julio",
        "editorial":"Alfa",
        "categoria":"Novela",
        "precio":"2300",
        "description":"reseña del libro",
        "stock":"1",
        "image":"../img/rayuela_cortazar.jpeg"
    },
    {
        "id":6,
        "key": 6,
        "title":"Primera persona del singular",
        "autor_director":"Murakami, Haruki",
        "editorial":"Tusquets",
        "categoria":"Cuentos",
        "precio":"1900",
        "description":"reseña del libro",
        "stock":"3",
        "image":"../img/primera-persona-del-singular_murakami.jpg"
    }
]

const promLibros = new Promise ((resolve, reject) => {
    resolve(librosEnStock)
    reject("Fallo promLibros")
})

export default promLibros