const myName = "Pepito"
const mySurname = "Pepón"
const object = {
    myName,
    mySurname
}
// sessionStorage.setItem("object", JSON.stringify(object))
// localStorage.setItem("object", JSON.stringify(object))
const now = new Date()
document.cookie = `object=${JSON.stringify(object)};expires=${new Date(now.getTime() + 2 * 60000)}`