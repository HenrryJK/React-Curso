import { React } from "react";
import reactDom from "react-dom";
// import { ReactDOM } from "react-dom";
const welcome = <h1>Hello World !!!</h1>;


// console.log(welcome);

const divRoot = document.querySelector('#app-counter');

console.log(divRoot);

//renderiza o muestra algo

reactDom.render(welcome , divRoot)