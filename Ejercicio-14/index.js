const elemento = document.getElementById("btn-click");

elemento.addEventListener("click", ()=> alert("Click en el botón"));

$("#btn-jquery").click(function() {
    console.log("Hola, estoy utilizando jQuery");
})