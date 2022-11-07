"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ruleta = void 0;
const Juego_1 = require("./Juego");
class Ruleta extends Juego_1.Juego {
    constructor() {
        super("Ruleta");
        this.numeroElegido = -1;
        this.numeroGanador = -1;
    }
    getNroGanador() {
        return this.numeroGanador;
    }
    setNumeroElegido(pNroElegido) {
        this.numeroElegido = pNroElegido;
    }
    getNumeroElegido() {
        return this.numeroElegido;
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
        let ruta = "infoJuegos\\resultados\\ruleta.txt";
        this.guardarResultadoEnTxT(ruta, resultado);
    }
    mostrarInstrucciones() {
        this.leerArchivo("infoJuegos\\instrucciones\\ruleta.txt");
    }
}
exports.Ruleta = Ruleta;
let juegoRuleta = new Ruleta();
juegoRuleta.setNumeroElegido(10);
juegoRuleta.setApuesta(500);
juegoRuleta.mostrarInstrucciones();
juegoRuleta.jugar();
console.log(juegoRuleta.getResultado());