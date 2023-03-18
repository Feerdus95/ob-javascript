//Strings


//Variables
let nombre = "Fernando";
let apellido = "Verdus";
//Operaciones
let estudiante = nombre.concat(" ", apellido);
var estudianteMayus = estudiante.toUpperCase();
var estudianteMinus = estudiante.toLowerCase();
let estudianteCaract = estudiante.length;
let nombrePL = nombre.charAt(0);
let apellidoPL = apellido[0];
let estudianteSinEspacios = estudiante.replaceAll(" ","");
let boolVar = estudiante.includes(nombre);
//Salida
console.log(nombre);
console.log(apellido)
console.log(estudiante)
console.log(estudianteMayus)
console.log(estudianteMinus)
console.log(estudianteCaract)
console.log(nombrePL)
console.log(apellidoPL)
console.log(estudianteSinEspacios)
console.log(boolVar)