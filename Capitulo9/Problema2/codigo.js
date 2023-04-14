// Crear un sistema que permita al docente elegir a qué mesa se presentará el estudiante.

class Alumnos {
    static instanceCount = 0;

    constructor (nombre,apellido,mail,materias) {
        Alumnos.instanceCount++;
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.materias = materias;
    }
}

const alumno1 = new Alumnos("Xander","Greene","xgreene@zmail.com",["Ciencias Sociales","Matemática"]);
const alumno2 = new Alumnos("Avia","Rayne","arayne@vmail.com", ["Matemática","Ciencias Sociales"]);
const alumno3 = new Alumnos("Jaxon","Cruz","jcruz@fmail.com", ["Música","Dibujo"]);
const alumno4 = new Alumnos("Kaia","Lee","klee@pmail.com", ["Matemática","Música","Dibujo","Educación Física","Programación"]);
const alumno5 = new Alumnos("Kieran","Bank","kbanks@qmail.com",["Matemática","Música","Dibujo","Educación Física","Programación"]);
const alumno6 = new Alumnos("Lyra","Blake","lblake@bmail.com",["Matemática","Música","Dibujo","Educación Física","Programación"]);
const alumno7 = new Alumnos("Milo","Hayes","mhayes@tmail.com",["Matemática","Música","Dibujo","Educación Física","Programación"]);
const alumno8 = new Alumnos("Nia","Patel","npatel@jmail.com",["Matemática","Música","Dibujo","Educación Física","Programación"]);
const alumno9 = new Alumnos("Orion","Jensen","ojensen@nmail.com",["Matemática","Música","Dibujo","Educación Física","Programación"]);
const alumno10 = new Alumnos("Phoebe","Ellis","pellis@kmail.com",["Matemática","Música","Dibujo","Educación Física","Programación"]);
const alumno11 = new Alumnos("Cofla","Cofla","cofla@cofla.com",["Matemática","Música","Dibujo"]);

const desplegable = document.querySelector(".desplegable");
const opcion = document.querySelectorAll(".opcion");
const confirmarAlumno = document.querySelector(".confirmarAlumno");
const materiasContainer = document.querySelector(".materias");
let alumnoElegido

confirmarAlumno.addEventListener("click", insertarMaterias);

function insertarMaterias () {
    alumnoElegido = desplegable.options[desplegable.selectedIndex].value;
    let materiasHTML = '';
    eval(alumnoElegido).materias.forEach(materia => {
        materiasHTML += materia + `<br><button type="button" value="${materia}" class="confirmarMesa1">Anotar en Mesa 1</button></form>
        <button type="button" value="${materia}" class="confirmarMesa2">Anotar en Mesa 2</button></form>` + "<br>";
    });
    materiasContainer.innerHTML = materiasHTML;
}

materiasContainer.addEventListener("click", function (event){
    const botonElegido = event.target;

    if (botonElegido.matches(`.confirmarMesa1`)) {
        const mesaValue = event.target.value;
        const mesaIndex = eval(alumnoElegido).materias.indexOf(mesaValue);
        eval(alumnoElegido).materias[mesaValue] = [];
        eval(alumnoElegido).materias[mesaValue].push(1);
        alert (`Gracias por haber confirmado la mesa de ${eval(alumnoElegido).nombre} ${eval(alumnoElegido).apellido}. Se le notificará que ha sido anotado a la mesa N° 1 de ${mesaValue} a la dirección de correo electrónico "${eval(alumnoElegido).mail}".`);
        console.log(mesaValue);
        console.log(mesaIndex);
        console.log(eval(alumnoElegido).materias);
    } else if (botonElegido.matches(`.confirmarMesa2`)) {
        const mesaValue = event.target.value;
        const mesaIndex = eval(alumnoElegido).materias.indexOf(mesaValue);
        eval(alumnoElegido).materias[mesaValue] = [];
        eval(alumnoElegido).materias[mesaValue].push(2);
        alert (`Gracias por haber confirmado la mesa de ${eval(alumnoElegido).nombre} ${eval(alumnoElegido).apellido}. Se le notificará que ha sido anotado a la mesa N° 2 de ${mesaValue} a la dirección de correo electrónico "${eval(alumnoElegido).mail}".`);
        console.log(mesaValue);
        console.log(mesaIndex);
        console.log(eval(alumnoElegido).materias);
    }
});



// EL eval() TRANSFORMA UN STRING EN EL NOMBRE DEL OBJETO. UTILIZAR SOLO EN ÁMBITOS CONTROLADOS.
//  SI QUEREMOS HACER REFERENCIA A UN OBJETO DE CLASE X QUE HA SIDO CREADO DE MANERA DINÁMICA, PODEMOS HACER QUE SE REGISTREN TODOS LOS CLICKS QUE SE HACEN DENTRO DEL CONTENEDOR DEL MISMO Y QUE EJECUTE UNA FUNCIÓN
//  CUANDO SE ELIJE CUALQUIER OBJETO DE CLASE X.



