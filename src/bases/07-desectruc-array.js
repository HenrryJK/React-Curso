const ocupattions = ['Mesero' , 'Carpintero' , 'Programador'];

/*console.log(ocupattions[0]);
console.log(ocupattions[1]);
console.log(ocupattions[2]);*/
const [variable1] = ocupattions;
const [,variable2] = ocupattions;
const [, , variable3] = ocupattions;
console.log(variable1);
console.log(variable2);
console.log(variable3);

const returnArray = () => {
    return ['HFG' , 456];
}
const [letters , numbers] = returnArray();
console.log(letters , numbers);

//tarea 
const userStatus = (values) => {
    return [values , () =>{ console.log('Hello World!!!!')}];
}
//  const arr = userStatus('Mayordomo');
    const [names , setName] = userStatus('Mayordomo');
console.log(names);

setName();