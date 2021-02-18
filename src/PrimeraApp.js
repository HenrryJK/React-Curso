import React, { Fragment } from 'react';

// Functional Components
const PrimeraApp = () => { 
    const message = 'Hurry Up! Country Alemania!..';
    const poblations = 1262.32000;
    const numbers = [1 , 2 , 3,4,5,6]

    const persona ={
        first_name : 'Henrry' , 
        ages : 18
    }
    return (
        // <div>   </div>   // <>  </> 
        <Fragment> 
    <h1>{message}</h1>
    <p>Welcome people!! One more time at party Berlín!!</p>
    <p>Con {poblations} de Habitantes...!</p>
        <h3>{numbers}</h3>
    <h4> Autor : {JSON.stringify(persona)}</h4>
    <pre> Autor : {JSON.stringify(persona , null , 1)}</pre>
        </Fragment>
       ) ;
}
   

export default PrimeraApp;