"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlackJack = void 0;
const Juego_1 = require("./Juego");
class BlackJack extends Juego_1.Juego {
    constructor() {
        super('BlackJack');
        this.numGanador = 21;
    }
    jugar() {
        let suma1 = (this.generarNroAleatorioEntreRango(1, 11));
        let suma2 = (this.generarNroAleatorioEntreRango(1, 11));
        let suma3 = (this.generarNroAleatorioEntreRango(1, 11));
        let suma4 = (this.generarNroAleatorioEntreRango(1, 11));
        let cartasJugador = suma1 + suma3;
        let cartasCasa = suma2 + suma4;
        if (cartasJugador === this.numGanador) {
            this.setResultado(this.apuesta * 3);
            console.log(`¡BLACKJACK! ¡GANASTE!`);
        }
        else if (cartasJugador > cartasCasa) {
            this.setResultado(this.apuesta * 2);
            console.log('¡Ganaste por mayor puntuacion!');
        }
        else if (cartasCasa > cartasJugador) {
            this.setResultado(0);
            console.log('Perdiste!');
        }
        else {
            console.log('Empate!');
        }
        let fechaActual = new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear();
        let horaActual = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
        let resultado = `\nINFO - ${fechaActual} ${horaActual} - Juego: ${this.tematica} - Resultado apuesta: $${this.resultado} - Dinero apostado: $${this.apuesta} - Cartas Jugador: ${cartasJugador} - Cartas Casa: ${cartasCasa}`;
        let ruta = "infoJuegos\\resultados\\blackjack.txt";
        this.guardarResultadoEnTxT(ruta, resultado);
    }
    mostrarInstrucciones() {
        this.leerArchivo("infoJuegos\\instrucciones\\blackjack.txt");
    }
}
exports.BlackJack = BlackJack;
// let newBlackJack: BlackJack = new BlackJack ();
// newBlackJack.mostrarInstrucciones();
// newBlackJack.setApuesta(1000);
// newBlackJack.jugar();
// console.log(newBlackJack.getResultado());
