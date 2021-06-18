/**
 * Clase 3.3 IMPRIMIENDO CONTENIDO EN EL DOM
 */

import Course from "./classes/Course.js"

const html = new Course("HTML dede cero", "https://cdn.pixabay.com/photo/2014/07/08/09/58/html5-386614_960_720.jpg", 10)
const css = new Course("CSS dede cero", "https://media.istockphoto.com/vectors/concept-stamped-word-art-illustration-vector-id906564624?s=612x612", 8)

console.log(html)
console.log(css)

const element = document.getElementById("course")
const element2 = document.getElementById("course2")

element.innerHTML = `
<h3>${html.getName()}</h3>
<img src="${html.getPoster()}" />
<span> Cantidad de cursos: ${html.getSubjects()} </span>
`

element2.innerHTML = `
<h3>${css.getName()}</h3>
<img src="${css.getPoster()}" />
<span> Cantidad de cursos: ${css.getSubjects()} </span>
`

/* La estructura que has creado en el archivo .js de la clase que vas a utilizar te servirá para poder insertar contenido dinámico de una clase, en tu HTML haciendo un inner.html

Deberás crear la estructura en HTML donde quieras que este contenido sea insertado.

¿Cómo insertar este contenido dinámico?
Crearás una constante que será el document.getElementById("nombreDeId") el nombre que le hayas colocado a tu constante lo implementarás con el inner.html

¿Cómo imprimir el contenido de la clase en el DOM?
Para imprimir en el DOM usarás el nombre de tu constante más la nomenclatura punto y el parámetro inner.html y luego le asignarás con template strings los valores que vayas a utilizar. Dentro de las template strings o backstick crearás el contenido a imprimir en el DOM y dentro de una variable traerás con el método get los atributos de la clase.

EJ: `constante.innerHTML =

<h3>${nombreDelObjeto.getNombreDelMetodo()}</h3> */