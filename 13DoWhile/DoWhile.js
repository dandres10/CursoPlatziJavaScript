var conatador = 0
const llueve = () => Math.random() < 0.3

do {
    conatador++
} while (!llueve())


if (conatador === 1) {
    console.log(`Fui a ver si llovia ${conatador} vez`)
} else {
    console.log(`Fui a ver si llovia ${conatador} veces`)
}
