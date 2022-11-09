"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlackJack = void 0;
const Juego_1 = require("./Juego");
class BlackJack extends Juego_1.Juego {
    constructor(apuestasPermitidas) {
        super('BlackJack', apuestasPermitidas);
        this.numGanador = 21;
        this.cartasCasa = 0;
        this.cartasJugador = 0;
        this.resultadoBlackJack = "No se encontro el resultado.";
    }
    jugar() {
        let suma1 = (this.generarNroAleatorioEntreRango(1, 11));
        let suma2 = (this.generarNroAleatorioEntreRango(1, 11));
        let suma3 = (this.generarNroAleatorioEntreRango(1, 11));
        let suma4 = (this.generarNroAleatorioEntreRango(1, 11));
        this.cartasJugador = suma1 + suma3;
        this.cartasCasa = suma2 + suma4;
        if (this.cartasJugador === this.numGanador) {
            this.setResultado(this.apuesta * 3);
            this.resultadoBlackJack = `¡BLACKJACK! ¡GANASTE!`;
        }
        else if (this.cartasJugador > this.cartasCasa) {
            this.setResultado(this.apuesta * 2);
            this.resultadoBlackJack = '¡Ganaste por mayor puntuacion!';
        }
        else if (this.cartasCasa > this.cartasJugador) {
            this.setResultado(0);
            this.resultadoBlackJack = 'Perdiste!';
        }
        else {
            this.resultadoBlackJack = 'Empate!';
        }
        let fechaActual = new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear();
        let horaActual = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
        let resultado = `\nINFO - ${fechaActual} ${horaActual} - Juego: ${this.tematica} - Resultado apuesta: $${this.resultado} - Dinero apostado: $${this.apuesta} - Cartas Jugador: ${this.cartasJugador} - Cartas Casa: ${this.cartasCasa}`;
        let ruta = "infoJuegos\\resultados\\blackjack.txt";
        this.guardarResultadoEnTxT(ruta, resultado);
    }
    mostrarInstrucciones() {
        this.leerArchivo("infoJuegos\\instrucciones\\blackjack.txt");
    }
    getCartasJugador() {
        return this.cartasJugador;
    }
    getCartasCasa() {
        return this.cartasCasa;
    }
    getResultadoBlackJack() {
        return this.resultadoBlackJack;
    }
}
exports.BlackJack = BlackJack;
// let newBlackJack: BlackJack = new BlackJack ();
// newBlackJack.mostrarInstrucciones();
// newBlackJack.setApuesta(1000);
// newBlackJack.jugar();
// console.log(newBlackJack.getResultado());
