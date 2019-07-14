var andres = {
    nombre: 'Andres',
    apellido: 'Leon',
    edad: 22,
    peso: 60
}

console.log(`Al inicio del año ${andres.nombre} pesa ${andres.peso} Kg`)

const INCREMENTO_PESO = 0.2
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const DIAS_DEL_ANO = 365

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
    var random = Math.random()
    if (random < 0.25) {
        aumentarDePeso(andres)
    } else if (random < 0.5) {
        adelgazar(andres)
    }

}


console.log(`Al final del año ${andres.nombre} pesa ${andres.peso.toFixed(1)} Kg`)