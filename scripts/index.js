/**
 * Clase 3.6 MARCADO DE FORMULARIO
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

/* En el mundo real, también se utiliza la interfaz web para permitirle al usuario crear contenido desde un navegador. La forma correcta de realizar esta acción será creando un formulario y permitirle a este formulario crear objetos que se impriman en el DOM.

Dirígete a tu index.html y crea un formulario con ed-grid

En la url de la web por defecto aparecerán todos los valores que se enviaron en el formulario hay que evitar que esto suceda y agarrar estos valores para hacer con ellos lo que se necesite. */