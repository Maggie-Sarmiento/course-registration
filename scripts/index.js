/**
 * Clase 3.8 CLASES PARA USUARIOS
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
console.log(teacher)

const student1 = new Student("Sergio", "Hernández", "helier215@gmail.com", false, ["React", "Javascript"])
const student2 = new Student("Sharon", "Hernández", "sharon@gmail.com", true, ["React", "Javascript"])
console.log(student1)

const html = new Course("HTML desde cero", "mi-poster.png", 10)
html.setInscribed([student1, student2])
console.log(html)

/* Tened en cuenta que al actualizar la página del navegador, los valores que hayas generado a través de tu formulario van a ser reseteados (se perderán). Para que este valor que se ha introducido por un formulario en el cliente (navegador) no se pierda, entra el concepto de persistencia de datos.

La persistencia de datos es poder guardar información en bases de datos, en archivos, o de alguna otra manera. Tened en cuenta que es muy importante aprender a que tu información persista, puedes aprender sobre bases de datos, sistemas de ficheros o archivos, etc.

Crear las clases con las que seguirás trabajando, siempre como buena práctica crear estas clases en otros archivos diferentes al index.js. Si ya tienes las clases creadas solo quedaría exportar e importar al index.js estas clases como ya has aprendido. Para comprobar que la exportación y la importación han sido correctamente efectuadas, crearás una constante para instanciar la clase que quieras probar y pasarle los atributos que necesite esta clase.

Asignarle nombres descriptivos a tus atributos. (Buena práctica).

Inscribir un alumno a un curso.
Para inscribir un alumno a tu clase curso deberás crear una constante para instanciar la clase Alumnos, luego crearás una constante para instanciar la clase Curso.

A tu clase curso con nomenclatura punto le traerás el método set para agregarle el nuevo alumno dentro de un array.

EJ: html.setInscritos([alumno1]) */