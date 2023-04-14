const info = window.screen;
const width = info.availWidth;
const height = info.availHeight;

console.log (width);
console.log (height);

alert(`Esta computadora tiene una resolución de ${width} px por ${height} px.`);

if (width >= 1920 && height >= 1000) {
    let confirmar = confirm(`Esta computadora tiene resolución FullHD. ¿Desea comprarla?`);
    if (confirmar == true) {
        alert (`Felicitaciones, has comprado una nueva computadora.`);
    }
    else {
        alert (`Has declinado la compra de la computadora.`);
    }
}
else {
    let confirmar = confirm(`Esta computadora no tiene resolución FullHD. ¿Desea comprarla igual?`);
    if (confirmar == true) {
        alert (`Felicitaciones, has comprado una nueva computadora.`);
    }
    else {
        alert (`Has declinado la compra de la computadora.`);
    }
}

const href = window.location.href;
const host = window.location.hostname;
const path = window.location.pathname;
const proto = window.location.protocol;

console.log (`Actualmente te encontrás navegando ${href}. Éste pertenece al sitio ${host} y su path es ${path}.`);
if (proto == "https:") {
    console.log (`Este sitio web tiene un certificado ${proto}, por lo cual es seguro.`);
}
else {
    console.log(`Este sitio web tiene un certificado ${proto}, por lo cual no es seguro.`);
}