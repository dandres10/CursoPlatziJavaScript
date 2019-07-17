
/*Promesas tiene tres estados
si se resuelve
0.1 pending -> resuelve -> fulfilled [codigo] .then(val=>...)
seguir metiendo promesas
1.1 pending -> resuelve -> fulfilled -> resolve -> fulfilled
si no se resuelve
0.2 pending -> reject -> rejected [codigo] .catch(err =>...)
como se crea una promesa
Ej:
new Promise(funcion(resolve,reject){
    .....
}).then(valor =>{
    ...
}).catch(valor =>{
    ...
})
*/
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }



function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(url, opts, function (data) {
            resolve(data)
        }).fail(() => reject(id))
    })

}

//personaje es la variabe data que nos envia el resolve
obtenerPersonaje(1)
    .then((personaje) => console.log(`Hola, yo soy ${personaje.name}`))
    .catch((id) => { console.log(`error en la respuesta del personaje ${id}`) })






