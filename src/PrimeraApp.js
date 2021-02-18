import React, { Fragment } from 'react';
import  PropTypes from 'prop-types';


// Functional Components
////               (props)
            ///    ({message})
const PrimeraApp = ({message}) => { 
   // const message = 'Hurry Up! Country Alemania!..';
    const poblations = 1262.32000;
    const numbers = [1 , 2 , 3,4,5,6]
   /* if (message) {
        throw new Error('Is neccesary this welcome any country')
    }*/


    const persona ={
        first_name : 'Henrry' , 
        ages : 18
    }
  //  console.log(props);
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
   
    PrimeraApp.propTypes = {
        message: PropTypes.string.isRequired
    }



export default PrimeraApp;