import { React } from "react";
import reactDom from "react-dom";
import PrimeraApp from "./PrimeraApp";
// import { ReactDOM } from "react-dom";
import './index.css';
// console.log(welcome);

const divRoot = document.querySelector('#app-counter');
//renderiza o muestra algo
// reactDom.render( <PrimeraApp  message='Hurry Up! Country Alemania!..'/>   , divRoot)
//reactDom.render( <PrimeraApp welcome={123}/>   , divRoot)
reactDom.render( <PrimeraApp message='Welcome this Country Alemania German'/>   , divRoot)

