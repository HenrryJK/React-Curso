 const nombre = 'Henrry';
 let apellido = 'Orbezo';

 let valorDado = 18;
 valorDado = 17;
 console.log(nombre ,apellido , valorDado);
//variables de scope
 if (true) {
     const nombre = 'Peter';
   //  let valorDado = 20;
   //  console.log(valorDado)
     console.log(nombre)
 }

 console.log(valorDado);