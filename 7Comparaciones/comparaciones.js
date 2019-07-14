var x = 4, y = '4'

console.log('Compara los datos', x == y)
console.log('Compara los datos si son del mismo tipo', x === y)

var andres = {
    nombre: 'andres',
    edad: 45
}

var otraPersona = {
    ...andres,
    edad: 25

}
console.log(`hacer una clon de un objeto en una variable
 nueva y si se quiere se pueden modificar 
 los datos y añadir mas Ej: la edad ${otraPersona.edad}`)
var mismoObj = andres
console.log('Compara los datos si son del mismo tipo [OBJETOS misma direccion en memoria]', andres === mismoObj)




