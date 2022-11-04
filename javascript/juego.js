"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Juego = void 0;
class Juego {
    constructor(pTematica, pApuesta) {
        this.tematica = pTematica;
        this.apuesta = pApuesta;
        this.resultado = 0;
    }
    generarNroAleatorioEntreRango(minimo, maximo) {
        let nroAleatorio = Math.floor(Math.random() * ((maximo - minimo) + 1) + minimo);
        return nroAleatorio;
    }
    setResultado(paramResultado) {
        this.resultado = paramResultado;
    }
    ;
    getResultado() {
        return this.resultado;
    }
}
exports.Juego = Juego;
