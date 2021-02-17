import { getPersonajesById } from './bases/08-imp-exp'
import { heroes } from './data/heroes';
/*const promesa = new Promise ((resolve , reject) => {
    setTimeout( () => {
         // console.log('2 segundos despues... ')
       //     resolve();
        const data = getPersonajesById(2);
    resolve(data);
     //   reject ('No se pudo encontrar al heroe');
    }, 2000)

});

promesa.then((heroe) => {
    console.log('heroe' , heroe)
})
.catch (err => console.warn(err));*/

const getHeroeByIDSync = (id) => {
   //  const promesa = new Promise ((resolve , reject) => {
      return  new Promise ((resolve , reject) => {
        setTimeout( () => {
             // console.log('2 segundos despues... ')
           //     resolve();
            const data = getPersonajesById(id);
            if (data) { 
                resolve(data)
            }else{
        reject ('No se pudo encontrar al heroe');
            }
        resolve(data);
          
        }, 2000)
    
    });
}

getHeroeByIDSync(4)
.then(heroe => console.log('Heroe' , heroe) );

// otra forma 
getHeroeByIDSync(1)
.then(heroe => console.log('Heroe' , heroe) )
.catch(err => console.warn(err));
//otra forma
getHeroeByIDSync(10)
.then( console.log )
.catch(console.warn);