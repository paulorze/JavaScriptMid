// Crear un formulario para registrarse en la materia que se debe. Debe contener nombre completo, mail y materia adeudada. Se deben verificar los datos. Se debe enviar al servidor 
// de manera prolija.

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

const elegida = document.querySelector(".materia__elegida");
const options = document.querySelectorAll(".select__option");
const nombreIngresado = document.querySelector(".input__nombre");
const apellidoIngresado = document.querySelector(".input__apellido");
const mailIngresado = document.querySelector(".input__mail");
let verificacion = 0;
const submit = document.querySelector(".enviar");
let alumnosArray = [alumno1,alumno2,alumno3,alumno4,alumno5,alumno6,alumno7,alumno8,alumno9,alumno10,alumno11];
let optionValue;

options.forEach(function(option) {
    option.addEventListener("click", function() {
    optionValue = option.value; 
    seleccionarOpcion();
    }); 
});

function seleccionarOpcion() {
    elegida.value = optionValue; 
}

submit.addEventListener("click", function() {
    resultadoSolicitud();
    if (verificacion == alumnosArray.length) {
        alert(`Lo sentimos, alguno de los datos que ingresaste no son válidos.`);
    }
    verificacion = 0;
});

function resultadoSolicitud() {
        alumnosArray.forEach(alumno => {
            if (alumno.nombre == nombreIngresado.value && alumno.apellido == apellidoIngresado.value && alumno.mail == mailIngresado.value) {
                if (alumno.materias.includes(elegida.value)) {
                    alert(`Lo sentimos, ya estás anotado para esta materia.`);
                }
                else if (elegida.value == "") {
                    alert(`Tenés que elegir una materia en la que inscribirte.`);
                }
                else {
                    alumno.materias.push(elegida.value);
                    alert(`Muchas gracias ${nombreIngresado.value} ${apellidoIngresado.value}, te has inscripto a ${elegida.value}. Te llegará un mail de confirmación a ${mailIngresado.value}. Las materias en las que estás anotado son: ${alumno.materias}.`);
                    console.log(nombreIngresado.value);
                    console.log(apellidoIngresado.value);
                    console.log(mailIngresado.value);
                    console.log(elegida.value);
                }
            }
            else {
                verificacion++;
            }
        });
};
