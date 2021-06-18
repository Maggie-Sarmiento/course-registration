/**
 * Clase 3.7 Creando objetos desde el DOM
 */

import Course from "./classes/Course.js"

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


/* Para poder procesar los valores del formulario y que aparezca en tu JavaScript harás lo siguiente.

Crearás una variable y le asignarás un document.getElementById(" ") y le colocarás entre comillas el nombre de id del formulario que creaste en HTML. Ya creada la constante podrás comenzar a trabajar con lo que necesites.

Al nombre de la constante le podrás dar un addEventListener() esto para esperar un evento, en este caso el evento submit, y que cuando suceda el evento submit ejecute una función. Aquí necesitarás indicarle que cuando se le dé click al evento submit del formulario suceda una acción. La primera acción será que el evento del formulario no se ejecute. e.preventDefault().

Almacenar en una constante el evento e asignándole un .target e.target.

Con el atributo name de los input en el html traerás la información de cada input y para acceder al valor del input le agregarás un .value.

Una vez hayas accedido a todos los valores, crearás un curso dentro de una constante.

EJ: const curso = new Curso(target.nombreCurso.value) y separado por comillas, los demás valores necesarios. A esta constante la podrás llamar con la función que la mostrará en el DOM. */