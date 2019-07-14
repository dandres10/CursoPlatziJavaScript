function Persona(nombre, apellido, edad, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.altura = altura
}
//el this en arrow function apunta a windows otro
// objeto, por eso se crean las funciones de esta manera

Persona.prototype.saludar = function () {
    console.log(`hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`)

}

Persona.prototype.SoyAlto = function () {
    return this.altura > 1.72
}



var andres = new Persona('Andres', 'Leon', 22, 1.73)
var tesoro = new Persona('Alejandra', 'Leon', 21, 1.72)
andres.saludar()
tesoro.saludar()
