var nombre = 'Andres'

function imprimirNombreEnMayusculas1(n){
    n = n.toUpperCase()
    console.log(n)
}

//mateniendo la variable global de nombre
function imprimirNombreEnMayusculas2(nombre){
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas1(nombre)