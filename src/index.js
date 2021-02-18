import { React } from "react";
import reactDom from "react-dom";
import PrimeraApp from "./PrimeraApp";
// import { ReactDOM } from "react-dom";
import './index.css';
// console.log(welcome);

const divRoot = document.querySelector('#app-counter');
//renderiza o muestra algo
reactDom.render( <PrimeraApp/>  , divRoot)