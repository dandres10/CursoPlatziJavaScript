var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}


var personas = [sacha, alan, martin, dario, vicky, paula]

const esAlta = persona => persona.altura > 1.8

//primera forma de hacer filtro
var personasAltas1 = personas.filter(esAlta)

//segunda forma de hacer filtro 
var personasAltas2 = personas.filter((persona) => {
    return persona.altura > 1.8
});


var personasBajas1 = personas.filter((persona) => {
    return persona.altura < 1.8
});

console.log('Forma numero 1', personasAltas1)
console.log('Forma numero 2', personasAltas2)
console.log('Forma numero 3', personasBajas1)


//transformar un array forma 1
const pasarAlturaACms1 = persona => {
    persona.altura *= 10
    return {
        ...persona,
        altura: 170
    }
}


//transformar un array forma 1
const pasarAlturaACms2 = persona => ({
    ...persona,
    altura: 180

});

var personasCms = personas.map(pasarAlturaACms2)
console.log(personasCms)
