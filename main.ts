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

function eleccionSiNo(pregunta: string): boolean {
    let opcion: boolean | string = false;

    do {
        opcion = rs.keyInYN(pregunta); // y = true ; n = false ; cualquier otra tecla = ""
        if (typeof (opcion) == "string") {
            console.log("*** ingrese una opcion valida ***\n\tPara responder que SI presione la tecla y\n\tPara responder que NO presione la tecla n");
        }
    } while (typeof (opcion) == "string");

    return opcion;
}

let newRuleta: Ruleta = new Ruleta([500, 1500, 3000]);
let newBlacJack: BlackJack = new BlackJack([500, 1500, 3000]);
let newTragamonedasMultilinea: TragamonedaMultilinea = new TragamonedaMultilinea([500, 1500, 3000], ["#", "$", "@"], 0.5);
// let newTragamonedasTradicional
let newCasino: Casino = new Casino([newRuleta, newBlacJack, newTragamonedasMultilinea]);


newCasino.presentarJuegos();

let juegos: string[] = [];
newCasino.getJuegosDisponibles().forEach(juego => juegos.push(juego.getTematica()));

console.log("Juegos Disponibles:");
let indice = rs.keyInSelect(juegos, 'Seleccione un juego'); // // si elige opcion CANCEL --> indice = -1
if (indice != -1) {
    newCasino.elegirJuego(indice);
    console.log(`Usted a elegido el juego ${newCasino.getJuegoElegido().getTematica()}`);

    if (newCasino.getJuegoElegido().getTematica() === newRuleta.getTematica()) {
        let apuestas: string[] = [];
        newRuleta.getApuestasPermitidas().forEach(apuesta => apuestas.push(String(apuesta)));
        indice = rs.keyInSelect(apuestas, 'Seleccione su apuesta'); // si elige opcion CANCEL --> indice = -1
        if (indice != -1) {
            newRuleta.setApuesta(newRuleta.getApuestasPermitidas()[indice]);
            let nroElegido: number = 0;
            do {
                nroElegido = rs.questionInt("Ingrese el numero que saldra ganador: ");
                if (nroElegido >= 0 && nroElegido <= 36) {
                    break;
                }
                console.log("**El numero ingresado debe ser un numero entre 0 y 36**");
            } while (true);
            newRuleta.setNumeroElegido(nroElegido);
            newRuleta.jugar();
            console.log(`Usted apostó: $${newRuleta.getApuesta()}`);
            console.log(`Su apuesta fue al numero: ${newRuleta.getNumeroElegido()}`);
            console.log(`El número ganador fue: ${newRuleta.getNumeroGanador()}`);
            console.log(`Usted ganó: $ ${newRuleta.getResultado()}`);
        }
        else {
            console.log('Advertencia: para poder jugar debe realizar una apuesta.');
        }
    } else if (newCasino.getJuegoElegido().getTematica() === newTragamonedasMultilinea.getTematica()) {
        let apuestas: string[] = [];
        newTragamonedasMultilinea.getApuestasPermitidas().forEach(apuesta => apuestas.push(String(apuesta)));
        indice = rs.keyInSelect(apuestas, 'Seleccione su apuesta'); // si elige opcion CANCEL --> indice = -1
        if (indice != -1) {
            newTragamonedasMultilinea.setApuesta(newTragamonedasMultilinea.getApuestasPermitidas()[indice]);
            newTragamonedasMultilinea.jugar();
            console.log(`Usted apostó: $${newTragamonedasMultilinea.getApuesta()}`);
            console.log("Matriz Generada:  \n" + newTragamonedasMultilinea.mostrarMatrizGenerada());
            console.log("Cantidad de Lineas Ganadoras:" + newTragamonedasMultilinea.getCantLineasGanadoras());
            console.log("Lineas ganadoras: " + newTragamonedasMultilinea.getLineasGanadoras());
            console.log(`Usted ganó: $${newTragamonedasMultilinea.getResultado()}`);
        } else {
            console.log('Advertencia: para poder jugar debe realizar una apuesta.');
        }
    } else if (newCasino.getJuegoElegido().getTematica() === newBlacJack.getTematica()) {
        let apuestas: string[] = [];
        newTragamonedasMultilinea.getApuestasPermitidas().forEach(apuesta => apuestas.push(String(apuesta)));
        indice = rs.keyInSelect(apuestas, 'Seleccione su apuesta'); // si elige opcion CANCEL --> indice = -1
        if (indice != -1) {
            newBlacJack.setApuesta(newBlacJack.getApuestasPermitidas()[indice]);
            console.log(`Usted apostó: $${newBlacJack.getApuesta()}`);
            newBlacJack.jugar();
            console.log(`Puntuacion de la Casa: ${newBlacJack.getCartasCasa()}`);
            console.log(`Puntuacion del Jugador: ${newBlacJack.getCartasJugador()}`);
            console.log(newBlacJack.getResultadoBlackJack());
            if (newBlacJack.getResultado() > 0) {
                console.log(`Usted ganó: $${newBlacJack.getResultado()}`);
            }
        } else {
            console.log('Advertencia: para poder jugar debe realizar una apuesta.');
        }
    }

} else {
    console.log('No se a elegido ningún juego!');
};