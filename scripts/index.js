/**
 * Clase 3.9 Modificando array de objetos"
 */

import Course from "./classes/Course.js"
import Teacher from "./classes/Teacher.js"
import Student from "./classes/Student.js"

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
            <div class="s-center">
                <span class="small"># de clases : ${curse.getSubjects()}</span>
            </div>
        </div>
    `
    element.appendChild (hijo)
}

const formulario = document.getElementById("formCursos")
formulario.addEventListener("submit", event => {
    event.preventDefault()
    const target = event.target
    const course = new Course(target.nameCourse.value, target.posterCourse.value, target.classCourse.value)
    showCourse(course)
})


const teacher = new Teacher("Maggie", "Sarmiento", "gsmaggie001@gmail.com", true, ["React", "Javascript"], 10)


const student1 = new Student("Sergio", "Hernández", "helier215@gmail.com", false, ["React", "Javascript"])
const student2 = new Student("Sharon", "Hernández", "sharon@gmail.com", true, ["React", "Javascript"])


const html = new Course("HTML desde cero", "mi-poster.png", 10)
html.setInscribed([...html.getInscribed(),student1])
console.log(html)

html.setInscribed([...html.getInscribed(),student2])
console.log(html)


/* ¿Cómo agregar un alumno sin que pierda su valor?
Utilizarás la nomenclatura de los spread operators de ECMAscript 6 de la siguiente manera.

Lo que necesitarás es agregar un objeto a un array, deberás traer todo el contenido del array ya existente, y como último elemento del array que has creado para inscribir un alumno en esa última posición dejarás el nuevo alumno a crearse, y como primer elemento del array será el elemento que ya existe que lo podrás traer con el método get. Pero esto no será suficiente, ya que tendrás un array dentro de otro array, para solucionar esto están los spread operator ...

EJ: html.setInscritos([...html.getInscritos(),alumno1]) */