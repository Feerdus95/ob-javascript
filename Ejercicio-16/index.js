const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const papelera = document.querySelector(".papelera")

parrafos.forEach(parrafo =>{
    parrafo.addEventListener("dragstart", event =>{
        console.log("Estoy arrastrando el párrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
    })
    parrafo.addEventListener("dragend", event =>{
        console.log("Ha finalizado el arrastre")
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event =>{
        event.preventDefault()
        event.dataTransfer.dropEffect = "move"
    })
    seccion.addEventListener("drop", event =>{
        console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo_id = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo_id)
    })
})

papelera.addEventListener("dragover", event =>{
    event.preventDefault()
    event.dataTransfer.dropEffect = "copy"
})

papelera.addEventListener("drop", event =>{
    const id_parrafo = event.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove()
})
