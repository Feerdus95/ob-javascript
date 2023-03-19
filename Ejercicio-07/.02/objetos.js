//Ejercicio-07.02 - Objetos

const persData = {
    nombre: "Fernando",
    apellido: "V",
    edad: 27,
    altura: 1.63,
    eresDesarrolador: true
}
let getEdad = persData.edad;
const listAmigos = [{
    ...persData
},{
    nombre: "Esteban",
    apellido: "F",
    edad: 30,
    altura: 1.68,
    eresDesarrolador: false
},{
    nombre: "Ailén",
    apellido: "X",
    edad: 25,
    altura: 1.65,
    eresDesarrolador: false
}]

const dataAmigosOrdenada = listAmigos.sort((a, b) => b.edad - a.edad)
console.log(dataAmigosOrdenada)