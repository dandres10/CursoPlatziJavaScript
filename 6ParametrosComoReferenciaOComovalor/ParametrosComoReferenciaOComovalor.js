
var andres = {
    nombre: 'Andres',
    apellido: 'Leon',
    edad: 22
};

var andrea = {
    nombre: 'Andres',
    apellido: 'Leon',
    edad: 26
};

var alejandra = {
    nombre: 'Alejandra',
    apellido: 'Leon',
    edad: 21
};

var mauricio = {
    nombre: 'Mauricio',
    apellido: 'Leon',
    edad: 48
};

var mercedes = {
    nombre: 'Mercedes',
    apellido: 'Leon',
    edad: 50
};



//forma uno
function imprimirNombreEnMayusculas1(persona) {

    console.log(persona.nombre.toUpperCase(), ' forma 1')
}

//forma dos
function imprimirNombreEnMayusculas2({ nombre }) {

    console.log(nombre.toUpperCase(), ' forma 2')
}


//forma tres
function imprimirNombreEnMayusculas3(persona) {
    //var nombre = persona.nombre , una mejor manera es la siguiente
    var { nombre } = persona
    console.log(nombre.toUpperCase(), ' forma 3')
}

function imprimirNombreYEdad(persona) {
    var { nombre } = persona
    var { edad } = persona
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombreEnMayusculas1(mauricio)

imprimirNombreEnMayusculas2(mauricio)

imprimirNombreEnMayusculas3(mauricio)

imprimirNombreYEdad(mauricio)


/*Parametros como referencia  */
/* para cambiar los objetos en js, toca asignar y guardar en una nueva variable */
var mauricioViejo
function cumpleanos(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }

}

console.log("Mauricio viejo",mauricioViejo =  cumpleanos(mauricio))