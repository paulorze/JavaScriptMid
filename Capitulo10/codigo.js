// Crear un sistema que permita al docente agregar notas a las materias de cada alumno y también saber el promedio resultante para esa materia.

class Alumnos {
    static instanceCount = 0;

    constructor (nombre,apellido,mail,materias) {
        Alumnos.instanceCount++;
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.materias = [];
        for (let i = 0; i < materias.length; i++) {
            let materia = {
            nombre: materias[i],
            calificaciones: []
            };
            this.materias.push(materia);
            }
    }
}

const alumno1 = new Alumnos("Xander","Greene","xgreene@zmail.com",["Sociales","Matemática"]);
const alumno2 = new Alumnos("Avia","Rayne","arayne@vmail.com", ["Matemática","Sociales"]);
const alumno3 = new Alumnos("Jaxon","Cruz","jcruz@fmail.com", ["Música","Dibujo"]);
const alumno4 = new Alumnos("Kaia","Lee","klee@pmail.com", ["Matemática","Música","Dibujo","Física","Programación"]);
const alumno5 = new Alumnos("Kieran","Bank","kbanks@qmail.com",["Matemática","Música","Dibujo","Física","Programación"]);
const alumno6 = new Alumnos("Lyra","Blake","lblake@bmail.com",["Matemática","Música","Dibujo","Física","Programación"]);
const alumno7 = new Alumnos("Milo","Hayes","mhayes@tmail.com",["Matemática","Música","Dibujo","Física","Programación"]);
const alumno8 = new Alumnos("Nia","Patel","npatel@jmail.com",["Matemática","Música","Dibujo","Física","Programación"]);
const alumno9 = new Alumnos("Orion","Jensen","ojensen@nmail.com",["Matemática","Música","Dibujo","Física","Programación"]);
const alumno10 = new Alumnos("Phoebe","Ellis","pellis@kmail.com",["Matemática","Música","Dibujo","Física","Programación"]);
const alumno11 = new Alumnos("Cofla","Cofla","cofla@cofla.com",["Matemática","Música","Dibujo"]);

const desplegable = document.querySelector(".desplegable");
const opcion = document.querySelectorAll(".opcion");
const confirmarAlumno = document.querySelector(".confirmarAlumno");
const materiasContainer = document.querySelector(".materias");
let alumnoElegido;

confirmarAlumno.addEventListener("click", elegirOpcion);
function elegirOpcion() {
    alumnoElegido = desplegable.options[desplegable.selectedIndex].value;
    let materiasHTML = '';
    eval(alumnoElegido).materias.forEach(materia => {
        materiasHTML += materia.nombre + `<form>
                                    <br><input type="text" class="${materia.nombre}-input">
                                    <br><button type="button" class="${materia.nombre}-btn btn">Añadir calificación</button>
                                    <br><button type="button" class="${materia.nombre}-promedio promedio">Obtener Promedio</button>
                                    </form>` + "<br>";
    });
    materiasContainer.innerHTML = materiasHTML;
}

materiasContainer.addEventListener("click", function (event){
    const alumnoCall = eval(alumnoElegido).materias;
    const botonElegido = event.target;

    if (botonElegido.matches(`.btn`)) {
        let btnClase = event.target.className;
        let clases = btnClase.split(`-`);
        let nombreMateria = eval(clases)[0];
        let input = document.querySelector(`.${nombreMateria}-input`);
        let inputValue = input.value;
        let indexMateria;
        try {
            if (inputValue == '') {
                throw `No has ingresado ningún dato`;
            }
            else if (isNaN(inputValue)) {
                throw `Lo que ingresaste no es un número`;
            } else if (parseFloat(inputValue) < 0) {
                throw `La nota no puede ser menor a 0. No creo que le haya ido tan mal.`;
            } else if (parseFloat(inputValue) > 10) {
                throw `La nota no puede ser mayor a 10. No trates que todo el mundo apruebe.`;
            } else {
                for (let index = 0; index < alumnoCall.length; index++) {
                    if (alumnoCall[index].nombre == nombreMateria) {
                        indexMateria = alumnoCall[index];
                    }
                }
                indexMateria.calificaciones.push(inputValue);
                console.log(indexMateria);
            }
        } catch (e) {
            alert(e);
        }
    }

    if (botonElegido.matches(`.promedio`)) {
        let clasesPromedio = event.target.className.split(`-`);
        let primeraClase = eval(clasesPromedio)[0];
        let materiaPromedio;
        let suma = 0;
        for (let index = 0; index < alumnoCall.length; index++) {
            if (alumnoCall[index].nombre == primeraClase) {
                materiaPromedio = alumnoCall[index];
            }
        }
        try {
            if (materiaPromedio.calificaciones.length <3) {
                throw `Lo sentimos, el estudiante ${eval(alumnoElegido).nombre} ${eval(alumnoElegido).apellido} no cuenta con el mínimo de 3 trabajos para ser evaluado.`
            } else {
                for (let index = 0; index < materiaPromedio.calificaciones.length; index++) {
                    suma += parseFloat(materiaPromedio.calificaciones[index]);
                }
                let resultado = suma / materiaPromedio.calificaciones.length;
                if (resultado >= 7) {
                alert (`El estudiante ${eval(alumnoElegido).nombre} ${eval(alumnoElegido).apellido} ha entregado un total de ${materiaPromedio.calificaciones.length} trabajos de la materia ${primeraClase}. La suma de las notas de esos trabajos es de ${suma} y el promedio final es de ${resultado}. Se le avisará al mail "${eval(alumnoElegido).mail}" que ha aprobado.`);
                } else {
                alert (`El estudiante ${eval(alumnoElegido).nombre} ${eval(alumnoElegido).apellido} ha entregado un total de ${materiaPromedio.calificaciones.length} trabajos de la materia ${primeraClase}. La suma de las notas de esos trabajos es de ${suma} y el promedio final es de ${resultado}. Se le avisará al mail "${eval(alumnoElegido).mail}" que ha desaprobado.`);
                }
            }
        } catch (error) {
            alert(error);
        }
    }
});



// alumnoElegido = desplegable.options[desplegable.selectedIndex].value; ESO ME SOLUCIONÓ MUCHOS PROBLEMAS A LA HORA DE LOGRAR UN VALUE
// EN UN SELECT.
// EL TRYCATCH CONDICIONAL NOS PERMITE ATAJAR COMPORTAMIENTO NO DESEADO DEL USUARIO. EN EL ÚLTIMO ELSE
// COLOQUÉ LO QUE DEBÍA SUCEDER SI EL COMPORTAMIENTO DEL USUARIO ERA EL ESPERADO.
// PODRÍA PONER UN SWITCH PARA DAR UNA RESPUESTA AJUSTADA A LAS NOTAS PERO NO ME PARECIÓ NECESARIO.