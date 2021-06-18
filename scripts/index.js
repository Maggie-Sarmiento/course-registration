/**
 * Clase 3.5 APLICANDO CLASES DE EDux
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
    hijo.classList.add("card")
    hijo.innerHTML = `
        <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src="${curse.getPoster()}" alt="${curse.getName()}" />
        </div>
        <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 class="t5 s-mb-2 s-center">${curse.getName()}</h3>
            <span class="small"># de clases : ${curse.getSubjects()}</span>
        </div>
    `
    element.appendChild (hijo)
}

// Llamadas a la función mostrar curso
showCourse(html)
showCourse(css)


/* En la web EDux encontrarás en la sección cards la estructura de como deberías crear un artículo para que se vea presentable, las clases que deberás utilizar son las mismas que están escritas en el blog, ya que este es una librería.

Estas clases las deberás agregar en el div que has creado anteriormente en JS con el nombre que le hayas dado al elemento hijo. hijo.classList.add("clase")

También dentro de tú hijo.innerHTML dentro de las template strings podrás seguir agregando la estructura de estilos para completar tus guías. */
