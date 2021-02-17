// import {heroes , owners} from "../data/heroes";
import {heroes} from "../data/heroes";

// console.log(owners);
/*const getPersonajesById = (id) => {
    return heroes.find ((heroe) => {
        if (heroe.id === id) {
            return true;
        }else{
            return false;
        }
    });
}
*/



export const getPersonajesById = (id) => {
    return heroes.find ((heroe) => heroe.id === id);
}
// console.log(getPersonajesById(2));

export const getHeroesByOwner = (owner) => {
    return heroes.filter((heroe) => heroe.owner === owner);
}

// console.log(getHeroesByOwner('DC'));