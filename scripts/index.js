/**
 * Clase 3.2 CLASE CURSO
 */

import Course from "./classes/Course.js"

const html = new Course("HTML dede cero", "imagenes/imagen.jpg", 10)
console.log(html)

/* Lo primero que debes crear es, las estructuras donde podrás iniciar tus objetos. Estas estructuras son las clases que ya has aprendido como crearlas.

Para organizar tus scripts es recomendable que crees una sub-carpeta dentro de tu carpeta scripts con el nombre de classes en esta sub-carpeta crearás un archivo con el nombre de cada clase que vayas a utilizar. Luego de crear este archivo, deberás exportarlo a tu archivo index.js para poder utilizar esas clases creadas.

¿Cómo exportar un archivo .js?
Con export default escrito delante de la clase, podrás exportar la clase para que esta pueda ser reconocida e importada en tu archivo index.js

¿Cómo importar un archivo .js?
En tu archivo index.js realizarás lo siguiente: import más el nombre de la clase que se importará, from y entre comillas le indicarás de cuál carpeta y cuál archivo importarás.

EJ: import Clase from ".classes/Curso"

No es necesario colocarle al archivo la extensión .js sin embargo, si tienes levantado tu proyecto con liveserver deberás colocarle la extensión .js

Pero ojo! Todavía esta importación no funcionará hasta colocar en tu HTML a la etiqueta script el tipo del archivo como módulo.

EJ: <script type="module" src="index.js"></script>

Como buena práctica colocar los métodos getters y setters para cada atributo de cada clase. */