/**
 * Se cambiaron las comillas dobles por simples y backticks respectivamente
 * en las constantes apellido y estudiante, mostrando los mensajes de error
 * esperados según la configuración del archivo ".eslintrc.json".
 * 
 * Al ejecutar en terminal el script "npm run lint-fix", dentro del package.json,
 * se reemplazaron por comillas dobles, solucionando el error automáticamente.
 */

const nombre = "Gorka"
const apellido = "Villar"
const estudiante = nombre.concat(" ").concat(apellido)

const estudianteMayus = estudiante.toUpperCase()
const estudianteMinus = estudiante.toLowerCase()

const estudianteLength = estudiante.length

// Todas válidas
// const inicialNombre = nombre[0]
// const inicialNombre = nombre.at(0)
const inicialNombre = nombre.substring(0, 1)
// Todas válidas
// const finalApellido = apellido[apellido.length - 1]
// const finalApellido = nombre.at(apellido.length - 1)
const finalApellido = apellido.substring(apellido.length - 1, apellido.length)

// Todas válidas
// const estudianteSinEspacios = estudiante.replace(" ", "")
const estudianteSinEspacios = estudiante.replace(/ /g, "")

const nombreEnEstudiante = estudiante.includes(nombre)