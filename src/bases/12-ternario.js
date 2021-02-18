
const active = true;
let message = '';

if (!active) {
    message = 'Activo';
} else {
    message = 'Inactivo';
}
console.log(message);

// const message2 = (active ) ?  'Activado' : 'Inactivos';
// const message2 = (active ) ?  'Activado' : null;
//const message2 = !active && 'Activo'; 
const message2 = active && 'Activo';
console.log(message2);