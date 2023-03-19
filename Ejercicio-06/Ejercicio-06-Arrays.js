//Ejercicio-06-Arrays

//Lista de Compras, añadir y eliminar item del array.
let listaCompra = ["Papas","Zanahorias","Lechugas","Huevos","Leche"];
listaCompra.push("Aceite de Girasol");
console.log(listaCompra);
listaCompra.pop();
console.log(listaCompra);

//Lista de Películas (objetos con propiedades), 
let listaPeliculas = [
        {
        titulo:"IT - Capítulo 1",
        director:"Andrés Muschietti",
        fecha: new Date(2017,8,21)
    },
    {
        titulo:"Final Fantasy VII - Advent Children",
        director:"Tetsuya Nomura",
        fecha: new Date(2005,8,17)
    },
    {
        titulo:"Der Untergang",
        director:"Oliver Hirschbiegel",
        fecha: new Date(2004,5,02)
    }
]

//Extracción de items de Arrays para generar nuevas listas
const listaPeliP2010 = listaPeliculas.filter(x=>x.fecha > new Date(2010,0,1))
console.log(listaPeliP2010)
const directores = listaPeliculas.map(x=>{
    return x.director
})
console.log(directores)
const titulos = listaPeliculas.map(x=>{
    return x.titulo;
})
console.log(titulos)

//Concatenaciones en base a 2 arrays.
const concatTitDir = directores.concat(titulos)
console.log(concatTitDir)
const propagTitDir = [...directores, ...titulos]
console.log(propagTitDir)