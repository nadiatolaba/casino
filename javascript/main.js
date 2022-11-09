"use strict";
// Casino 
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*

    git checkout -b ramaNueva            <-- Para crear ramaNueva y posicionarse en ella
    git checkout nombreRama              <-- Para situarse en una rama
    git branch                           <-- Para mostrar ramas Exsitentes
    git branch ramaNoDeseada --delete    <-- Para borrar una rama

    Para unir una rama:
    1 - situarse en la rama que recibira los cambios de ramaConCambios
    2 - git merge ramaConCambios

*/
const rs = __importStar(require("readline-sync"));
const casino_1 = require("./casino");
const blackjack_1 = require("./blackjack");
const ruleta_1 = require("./ruleta");
const TragamonedaMultilinea_1 = require("./TragamonedaMultilinea");
let newRuleta = new ruleta_1.Ruleta([500, 1500, 3000]);
let newBlacJack = new blackjack_1.BlackJack([500, 1500, 3000]);
let newTragamonedasMultilinea = new TragamonedaMultilinea_1.TragamonedaMultilinea([500, 1500, 3000], ["#", "$", "@"], 0.5);
// let newTragamonedasTradicional
let newCasino = new casino_1.Casino([newRuleta, newBlacJack, newTragamonedasMultilinea]);
newCasino.presentarJuegos();
let juegos = [];
newCasino.getJuegosDisponibles().forEach(juego => juegos.push(juego.getTematica()));
console.log("Juegos Disponibles:");
let indice = rs.keyInSelect(juegos, 'Seleccione un juego'); // opcion CANCEL = -1
if (indice != -1) {
    newCasino.elegirJuego(indice);
    console.log(`Usted a elegido el juego ${newCasino.getJuegoElegido().getTematica()}`);
    if (newCasino.getJuegoElegido().getTematica() === newRuleta.getTematica()) {
        let apuestas = [];
        newRuleta.getApuestasPermitidas().forEach(apuesta => apuestas.push(String(apuesta)));
        let indice = rs.keyInSelect(apuestas, 'Seleccione su apuesta'); // opcion CANCEL = -1
        if (indice != -1) {
            newRuleta.setApuesta(newRuleta.getApuestasPermitidas()[indice]);
            let nroElegido = 0;
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
            console.log(`Usted ah apostado al número: ${newRuleta.getNumeroElegido()}`);
            console.log(`El número ganador es: ${newRuleta.getNroGanador()}`);
            console.log(`Usted gano: $ ${newRuleta.getResultado()}`);
        }
        else {
            console.log('Advertencia: para poder jugar debe realizar una apuesta.');
        }
    }
    else if (newCasino.getJuegoElegido().getTematica() === newTragamonedasMultilinea.getTematica()) {
        let apuestas = [];
        newTragamonedasMultilinea.getApuestasPermitidas().forEach(apuesta => apuestas.push(String(apuesta)));
        let indice = rs.keyInSelect(apuestas, 'Seleccione su apuesta'); // opcion CANCEL = -1
        if (indice != -1) {
            newTragamonedasMultilinea.setApuesta(newTragamonedasMultilinea.getApuestasPermitidas()[indice]);
            newTragamonedasMultilinea.jugar();
            console.log(`Usted apostó: $${newTragamonedasMultilinea.getApuesta()}`);
            console.log("Matriz Generada:  \n" + newTragamonedasMultilinea.mostrarMatrizGenerada());
            console.log("Cantidad de Lineas Ganadoras:" + newTragamonedasMultilinea.getCantLineasGanadoras());
            console.log("Lineas ganadoras: " + newTragamonedasMultilinea.getLineasGanadoras());
            console.log(`Usted gano: $${newTragamonedasMultilinea.getResultado()}`);
        }
        else {
            console.log('Advertencia: para poder jugar debe realizar una apuesta.');
        }
    }
    else if (newCasino.getJuegoElegido().getTematica() === newBlacJack.getTematica()) {
        let apuestas = [];
        newTragamonedasMultilinea.getApuestasPermitidas().forEach(apuesta => apuestas.push(String(apuesta)));
        let indice = rs.keyInSelect(apuestas, 'Seleccione su apuesta'); // opcion CANCEL = -1
        if (indice != -1) {
            newBlacJack.setApuesta(newBlacJack.getApuestasPermitidas()[indice]);
            console.log(`Usted apostó: $${newBlacJack.getApuesta()}`);
            newBlacJack.jugar();
            console.log(`Puntuacion de la Casa: ${newBlacJack.getCartasCasa()}`);
            console.log(`Puntuacion del Jugador: ${newBlacJack.getCartasJugador()}`);
            console.log(newBlacJack.getResultadoBlackJack());
            if (newBlacJack.getResultado() > 0) {
                console.log(`Usted gano: $${newBlacJack.getResultado()}`);
            }
        }
        else {
            console.log('Advertencia: para poder jugar debe realizar una apuesta.');
        }
    }
}
else {
    console.log('No se a elegido ningún juego!');
}
;
