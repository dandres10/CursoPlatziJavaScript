
class Persona {
    constructor(nombre, apellido, edad, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.altura = altura
    }

    saludar(fn) {
        var {nombre,apellido,edad} = this
        console.log(`hola me llamo ${nombre} ${apellido} y tengo ${edad} años`)
        if (fn) {
            fn(nombre,apellido)
        }
    }
    soyAlto() {
        return this.altura > 1.72
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altuta) {
        super(nombre, apellido, altuta)
       
    }

    saludar(fn){
        var {nombre,apellido} = this
        console.log(`Hola soy ${nombre} ${apellido} y soy Desarrollador/a`)
        if (fn) {
            fn(nombre,apellido,true)
        }
    }
}


function responderSaludo(nombre,apellido,esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`ah mira, no sabia que eras desarrollador`)
    }
}






var andres = new Persona('Andres', 'Leon', 22, 1.73)
var tesoro = new Desarrollador('Alejandra', 'Leon', 21, 1.72)

andres.saludar(responderSaludo)
tesoro.saludar(responderSaludo)

