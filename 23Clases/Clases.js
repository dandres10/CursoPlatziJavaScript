
class Persona {
    constructor(nombre, apellido, edad, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.altura = altura
    }

    saludar() {
        console.log(`hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`)
    }
    soyAlto() {
        return this.altura > 1.72
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altuta) {
        super(nombre, apellido, altuta)
       
    }

    saludar(){
        console.log(`Hola soy ${this.nombre} ${this.apellido} y soy Desarrollador/a`)
    }
}









var andres = new Persona('Andres', 'Leon', 22, 1.73)
var tesoro = new Persona('Alejandra', 'Leon', 21, 1.72)

