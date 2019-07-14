

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

    console.log(persona.nombre.toUpperCase())
}

//forma dos
function imprimirNombreEnMayusculas2({ nombre }) {

    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas1(mauricio)

imprimirNombreEnMayusculas2(mauricio)
imprimirNombreEnMayusculas2({nombre: 'Pepito'})