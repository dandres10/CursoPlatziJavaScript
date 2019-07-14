function Persona(nombre, apellido, edad, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.altura = altura
}


Persona.prototype.saludar = function () {
    console.log(`hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`)
    this.SoyAlto();
}

Persona.prototype.SoyAlto = function () {
    if (this.altura > 1.72) {
        console.log(`Mido mucho`)
    } else {
        console.log(`Mido poquito`)
    }
}



var andres = new Persona('Andres', 'Leon', 22, 1.73)
var tesoro = new Persona('Alejandra', 'Leon', 21, 1.72)
andres.saludar()
tesoro.saludar()