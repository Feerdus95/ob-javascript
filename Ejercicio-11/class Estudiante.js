//Ejercicio-11-POO

class Estudiante {
    nombre = "Ermenegildo";
    asignaturas = ["Javascript", "HTML", "CSS"];
    obtenDatos(nombre,asignaturas) {
        return{
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
    }
}
const nuevo_estudiante = new Estudiante();
console.log(nuevo_estudiante.obtenDatos);