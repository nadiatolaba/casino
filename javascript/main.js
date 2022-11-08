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
let newRuleta = new ruleta_1.Ruleta();
let newBlacJack = new blackjack_1.BlackJack();
let newTragamonedasMultilinea = new TragamonedaMultilinea_1.TragamonedaMultilinea(["#", "$", "@"], 0.5, [500, 1500, 3000]);
// let newTragamonedasTradicional
newRuleta.mostrarInstrucciones();
newBlacJack.mostrarInstrucciones();
newTragamonedasMultilinea.mostrarInstrucciones();
let newCasino = new casino_1.Casino([newRuleta, newBlacJack, newTragamonedasMultilinea]);
// for(let i:number=0;i<newCasino.getJuegosDisponibles().length;i++){
//     newCasino.getJuegosDisponibles()[i].mostrarInstrucciones();
// }
let juegos = [];
newCasino.getJuegosDisponibles().forEach(juego => juegos.push(juego.getTematica()));
console.log("Juegos Disponibles:");
let indice = rs.keyInSelect(juegos, 'Seleccione un juego'); // opcion CANCEL = -1
if (indice != -1) {
    newCasino.elegirJuego(indice);
}
console.log(newCasino.getJuegoElegido());
