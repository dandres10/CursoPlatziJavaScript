var Pedro = 
{
    nombre: 'Pedro',
    apellido: 'Martinez',
    altura: 1.75,
    cantidadLibros: 29,
    nota: 7.5
}

var Mario = 
{
    nombre: 'Mario',
    apellido: 'Juarez',
    altura: 1.80,
    cantidadLibros: 50,
    nota: 4.5
}

var Camila = 
{
    nombre: 'Camila',
    apellido: 'Milter',
    altura: 1.65,
    cantidadLibros: 110,
    nota: 8.9
}

var Fernanda = 
{
    nombre: 'Fernanda',
    apellido: 'Portillo',
    altura: 1.68,
    cantidadLibros: 80,
    nota: 6.9
}
var personas = [Pedro, Mario, Camila, Fernanda];

const reducer1 = (acum,{cantidadLibros}) =>  acum + cantidadLibros
const reducer2 = (acum,{nota}) =>  acum + nota

var totalDeLibros = personas.reduce(reducer1,0)
var promedioNotasPersonas = (personas.reduce(reducer2,0)/personas.length).toFixed(1)


console.log(`En total todos tienen ${totalDeLibros} libros`)
console.log(`Promedio del las personas en sus estudios es: ${promedioNotasPersonas}`)