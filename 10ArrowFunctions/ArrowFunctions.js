var andres = {
    nombre: 'andres',
    apellido: 'leon',
    edad: 17,
    ingeniero: true,
    cocinero: false,
    cantante: true,
    baterista: false,
    drone: false
}


function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)
    if (persona.ingeniero) {
        console.log('Ingeniero')
    } else {
        console.log('no es Ingeniero')
    }

    if (persona.cocinero) {
        console.log('Cocinero')
    } else {
        console.log('no es Cocinero')
    }

    if (persona.cantante) {
        console.log('Cantante')
    } else {
        console.log('no es Cantante')
    }

    if (persona.baterista) {
        console.log('Baterista')
    } else {
        console.log('no es Baterista')
    }

    if (persona.drone) {
        console.log('Drone')
    } else {
        console.log('no vuela Drones')
    }
}
/*otra manera de declarar una funcion */
const MAYORIA_DE_EDAD = 18;

//forma numero 1
const esMayorDeEdad1 = function (persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}

//forma numero 2
const esMayorDeEdad2 = (persona) => {
    return persona.edad >= MAYORIA_DE_EDAD
};

//froma numero 3
const esMayorDeEdad3 = persona => persona.edad >= MAYORIA_DE_EDAD

//destructurando el objeto para pasarlo como parametro
const esMayorDeEdad4 = ({edad}) => edad >= MAYORIA_DE_EDAD


//sin Arrow function 
function imprimirSiEsMayorDeEdad1(persona) {
    if (esMayorDeEdad4(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} no es mayor de edad`)
    }
}

//Arrow function 

const imprimirSiEsMayorDeEdad2 = persona =>
  esMayorDeEdad4(persona)? 
   console.log(`${persona.nombre} es mayor de edad`):
   console.log(`${persona.nombre} no es mayor de edad`)
   

imprimirProfesiones(andres)
imprimirSiEsMayorDeEdad1(andres)



function permitirAcceso(persona){
    if (!esMayorDeEdad4(persona)) {
        console.log('ACCESO DENEGADO')
    }else{
        console.log('ACCESO Permitido')
    }
}


permitirAcceso(andres)
imprimirSiEsMayorDeEdad2(andres)

