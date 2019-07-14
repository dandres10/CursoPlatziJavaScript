var andres = {
    nombre: 'andres',
    apellido: 'leon',
    edad: 22,
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


function imprimirSiEsMayorDeEdad(persona) {
    if (persona.edad > 17) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} no es mayor de edad`)
    }
}



imprimirProfesiones(andres)
imprimirSiEsMayorDeEdad(andres)