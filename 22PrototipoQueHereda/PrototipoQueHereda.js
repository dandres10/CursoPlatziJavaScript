function heredaDe(prototipoHijo,prototipoPadre){
         var fn = function () {}
         fn.prototype = prototipoPadre.prototype
         prototipoHijo.prototype = new fn
         prototipoHijo.prototype.constructor = prototipoHijo
}


function Persona(nombre, apellido, edad, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.altura = altura
}


Persona.prototype.saludar = function () {
    console.log(`hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`)

}

Persona.prototype.SoyAlto = function () {
    return this.altura > 1.72
}


function Desarrollador (nombre,apellido){
    this.nombre = nombre
    this.apellido = apellido
}
heredaDe(Desarrollador,Persona)
Desarrollador.prototype.saludar = function (){
    console.log(`Hola soy ${this.nombre} ${this.apellido} y soy Desarrollador/a`)
}




var andres = new Persona('Andres', 'Leon', 22, 1.73)
var tesoro = new Persona('Alejandra', 'Leon', 21, 1.72)

