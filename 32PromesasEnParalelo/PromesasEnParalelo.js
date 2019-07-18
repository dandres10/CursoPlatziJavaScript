

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
//const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }



function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(url, opts, function (data) {
            resolve(data)
        }).fail(() => reject(id))
    })

}


var ids = [1, 2, 3, 4, 5, 6, 7]
//forma 1
// var promesas = ids.map(function(id){
//     return obtenerPersonaje(id)
// })


//forma2
var promesas = ids.map(id => obtenerPersonaje(id))

Promise.all(promesas)
    .then(personajes => console.log(personajes))
    .catch(id => console.log(`Error en el id ${id}`))

//personaje es la variabe data que nos envia el resolve
// obtenerPersonaje(1)
//     .then(personaje1 => {
//         console.log(`Hola, yo soy ${personaje1.name}`)
//         return obtenerPersonaje(2)
//     })
//     .then(personaje2 => {
//         console.log(`Hola, yo soy ${personaje2.name}`)
//         return obtenerPersonaje(3)
//     })
//     .then(personaje3 => {
//         console.log(`Hola, yo soy ${personaje3.name}`)
//         return obtenerPersonaje(4)
//     })
//     .then(personaje4 => {
//         console.log(`Hola, yo soy ${personaje4.name}`)
//         return obtenerPersonaje(5)
//     })
//     .then(personaje5 => {
//         console.log(`Hola, yo soy ${personaje5.name}`)
//         return obtenerPersonaje(6)
//     })

//     .catch(id => { console.log(`error en la respuesta del personaje ${id}`) })






