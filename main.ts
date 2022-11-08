// Casino 


/*

    git checkout -b ramaNueva            <-- Para crear ramaNueva y posicionarse en ella
    git checkout nombreRama              <-- Para situarse en una rama
    git branch                           <-- Para mostrar ramas Exsitentes
    git branch ramaNoDeseada --delete    <-- Para borrar una rama

    Para unir una rama:
    1 - situarse en la rama que recibira los cambios de ramaConCambios
    2 - git merge ramaConCambios

*/

import * as rs from "readline-sync";
import { Casino } from "./casino";
import { BlackJack } from "./blackjack";
import { Ruleta } from "./ruleta";
import { TragamonedaMultilinea } from "./TragamonedaMultilinea";

let newRuleta : Ruleta = new Ruleta();

let newBlacJack : BlackJack = new BlackJack();
let newTragamonedasMultilinea: TragamonedaMultilinea = new TragamonedaMultilinea(["#", "$", "@"], 0.5, [500,1500,3000]);

// let newTragamonedasTradicional

let newCasino:Casino = new Casino ([newRuleta,newBlacJack,newTragamonedasMultilinea]);

// for(let i:number=0;i<newCasino.getJuegosDisponibles().length;i++){
//     newCasino.getJuegosDisponibles()[i].mostrarInstrucciones();
// }

let juegos:string[] = [];
newCasino.getJuegosDisponibles().forEach(juego => juegos.push(juego.getTematica()));
console.log("Juegos Disponibles:")
let indice = rs.keyInSelect(juegos, 'Seleccione un juego'); // opcion CANCEL = -1
    if (indice != -1) {
    newCasino.elegirJuego(indice)
    }

console.log(newCasino.getJuegoElegido());
