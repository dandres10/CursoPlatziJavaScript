var andres = {
    nombre: 'Andres',
    apellido: 'Leon',
    edad: 22,
    peso: 60
}

console.log(`Al inicio del año ${andres.nombre} pesa ${andres.peso} Kg`)

const INCREMENTO_PESO = 0.3
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4
const DIAS_DEL_ANO = 365
const META = andres.peso - 3
var dias = 0

while (andres.peso > META) {

    if (comeMucho()) {
        aumentarDePeso(andres)
    }

    if (realizaDeporte) {
        adelgazar(andres)
    }
    dias += 1
}



console.log(`Pasaron ${dias} dias hasta que ${andres.nombre} adelgazo 3kg`)