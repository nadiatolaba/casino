"use strict";
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
exports.Ruleta = void 0;
const fs = __importStar(require("fs"));
const Juego_1 = require("./Juego");
class Ruleta extends Juego_1.Juego {
    constructor(pTematica, pApuesta, paramElegido) {
        super(pTematica, pApuesta);
        this.numeroElegido = paramElegido;
        this.numeroGanador = -1;
    }
    guardarResultadoEnTxT(resultado) {
        let path = "infoJuegos\\resultados\\ruleta.txt";
        fs.appendFile(path, resultado, (error) => {
            if (error) {
                console.log(error);
                return;
            }
        });
    }
    jugar() {
        this.numeroGanador = this.generarNroAleatorioEntreRango(0, 36);
        if (this.numeroElegido === this.numeroGanador) {
            this.setResultado(this.apuesta * 2);
        }
        else {
            this.setResultado(0);
        }
        let fechaActual = new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear();
        let horaActual = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
        let resultado = `\nINFO - ${fechaActual} ${horaActual} - Juego: ${this.tematica} - Resultado apuesta: $${this.resultado} - Dinero apostado: $${this.apuesta} - Numero elegido: ${this.numeroElegido} - Numero ganador: ${this.numeroGanador}`;
        this.guardarResultadoEnTxT(resultado);
    }
    mostrarInstrucciones() {
        let path = "infoJuegos\\instrucciones\\ruleta.txt";
        fs.readFile(path, 'utf-8', (error, texto) => {
            if (!error) {
                console.log(texto);
            }
            else {
                console.log(error);
            }
        });
    }
}
exports.Ruleta = Ruleta;
let juegoRuleta = new Ruleta('Ruleta', 500, 10);
juegoRuleta.jugar();
console.log(juegoRuleta.getResultado());
juegoRuleta.mostrarInstrucciones();
