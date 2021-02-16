const first_name = 'Henrry Jean Paul';
const last_name = 'Orbezo Perkga';

//const nombreCompleto = first_name + '' + last_name;
 const nombreCompleto = `${first_name} ${last_name} `;
 const saludo = ' Hola mundo ';
console.log (nombreCompleto);
console.log(saludo);
console.log(first_name , last_name);

/*function getSaludo() {
    return 'Bienvenido al trabajo';

}*/

function getSaludo(first_name) {
    return ' Bienvenido al trabajo ' + first_name;

}

console.log(` Este es un texto: ${getSaludo( first_name )} `)