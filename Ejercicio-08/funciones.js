//Ejercicio-08-Funciones

function alwaysTrue(){
    return true;
}
async function promSaludo() {
    return setTimeout(()=> console.log("Hola soy una promesa"),5000)
}
function* evenIndexGen(){
    let index=0;
    while(true){
        yield index+=2;
    }
}
const evenIndex = evenIndexGen();

