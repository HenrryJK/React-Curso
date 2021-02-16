const person = {
    first_name : 'Henrry' , 
    last_name : 'Orbezo' , 
    ages: 18,
    address: {
        city : 'Lima' ,
        URL: 'Av.Masmorras' ,
        Mz: 35 , 
        Lote: '13 A'
    }
};

// console.log({ person:person });
// console.log({ person });

console.log( person );
 // console.table({ person });

// const person2 = person;
const person2 = {...person};
person2.first_name = 'Santiago';

console.log(person2);