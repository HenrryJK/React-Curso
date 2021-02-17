//desectructuracion

const person = {
    first_name : 'Henrry' ,
    ages : 25 ,
    clave : '12345Henrry'
}

/*const {ages , clave , first_name} = person;

console.log(first_name);
console.log(ages);
console.log(clave);*/

/*const returnPerson = (user) => {
    const {ages , clave , first_name} = user;
    console.log(ages , clave , first_name);
}

returnPerson(person);*/

const userContext = ({clave ,first_name , ages , ocupattion = 'Admin'}) => {
   
 //   console.log(ages , ocupattion , first_name);
 return { 
        NombreClave : clave ,
        anios : ages ,
        address : {
            url: 'Av.Monterico' ,
            Lote: '13-A'
        }
 }
}
const employee = userContext (person);

//desetructurando
const {NombreClave , anios , address: {url , Lote}} = userContext (person);

console.log(employee);
console.log(NombreClave , anios);
console.log(url , Lote);
