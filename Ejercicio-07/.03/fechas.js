//Ejercicio-07.03 - Fechas

const fechaHoy = new Date();
const miCumple = new Date(1995,11,17);
const esHoyMasTarde = fechaHoy > miCumple;
const diaCumple = miCumple.getDate();       //.getDate -> Fecha(1->30/31), .getDay(0->6, día de la semana)
const mesCumple = miCumple.getMonth()+1;    //Enero -> 0, Diciembre -> 11. +1 para mostrar correctamente el mes.
const anyoCumple = miCumple.getFullYear();