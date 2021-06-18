/**
 * Clase 3.4 MOSTRANDO MÁS CURSOS EN EL DOM
 */

import Course from "./classes/Course.js"

// Instanciando objetos de la clase Course
const html = new Course("HTML dede cero", "https://cdn.pixabay.com/photo/2014/07/08/09/58/html5-386614_960_720.jpg", 10)
const css = new Course("CSS dede cero", "https://media.istockphoto.com/vectors/concept-stamped-word-art-illustration-vector-id906564624?s=612x612", 8)


const element = document.getElementById("courses")

// Imprime curso en el Dom
// Recibe un objeto tipo Course
function showCourse(curse) {
    const hijo = document.createElement("div")
hijo.innerHTML = `
<h3>${curse.getName()}</h3>
<img src="${curse.getPoster()}" />
<span> Cantidad de cursos: ${curse.getSubjects()} </span>
`
element.appendChild (hijo)
}

// Llamadas a la función mostrar curso
showCourse(html)
showCourse(css)


/* El parámetro inner.HTML solo podrá mostrar 1 objeto en el DOM, para poder mostrar varios objetos se utilizará appendChild()

Con appendChild() ya no se creará el contenido a imprimir en el DOM dentro de las template strings, sino que, se creará un elemento como parámetro.

Dentro de una constante la cual deberás asignarle el mismo nombre del elemento de appendChild() le asignarás a esta constante un document.createElement("div") el div se creará cuando el elemento sea llamado.

Luego llamarás a tu elemento del appendChild(elemento) más él innerHTML y a esto le asignarás toda la información contenida en las template strings.

En resumen, crearás un elemento donde entrarás el contenido, crearás un hijo que estará dentro de ese elemento y será él div. Al hijo se le agregará él inner.HTML y se introducirá con appendChild() el hijo.

Para agregar nuevos cursos esto implicará repetir el contenido y como ya sabes, esto no es una buena práctica por lo que se procedería a crear una función. Todas las indicaciones anteriores deberás colocarlas dentro de una función.

¿Cómo puedes hacer para que tu objeto sea dinámico?
A tu función le deberás dar un parámetro para que este sea la constante de cada atributo del objeto y al llamar la función, le deberás colocar la constante donde está creada la clase.

Como buena práctica siempre es recomendable documentar la funcionalidad de tu código. */