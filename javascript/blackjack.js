"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.BlackJack = void 0;
var Juego_1 = require("../Juego");
var BlackJack = /** @class */ (function (_super) {
    __extends(BlackJack, _super);
    function BlackJack() {
        return _super.call(this, 'BlackJack', 1000) || this;
    }
    BlackJack.prototype.jugar = function () {
        var suma1 = (this.generarNroAleatorioEntreRango(1, 11));
        var suma2 = (this.generarNroAleatorioEntreRango(1, 11));
        var suma3 = (this.generarNroAleatorioEntreRango(1, 11));
        var suma4 = (this.generarNroAleatorioEntreRango(1, 11));
        var cartasJugador = suma1 + suma3;
        var cartasCasa = suma2 + suma4;
        if (cartasJugador === 21) {
            this.setResultado(this.apuesta * 3);
            console.log("\u00A1BLACKJACK! \u00A1GANASTE!");
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
        var fechaActual = new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear();
        var horaActual = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
        var resultado = "\nINFO - ".concat(fechaActual, " ").concat(horaActual, " - Juego: ").concat(this.tematica, " - Resultado apuesta: $").concat(this.resultado, " - Dinero apostado: $").concat(this.apuesta, " - Cartas Jugador: ").concat(cartasJugador, " - Cartas Casa: ").concat(cartasCasa);
        var ruta = "infoJuegos\\resultados\\blackjack.txt";
        this.guardarResultadoEnTxT(ruta, resultado);
    };
    BlackJack.prototype.mostrarInstrucciones = function () {
        this.leerArchivo("infoJuegos\\instrucciones\\blackjack.txt");
    };
    return BlackJack;
}(Juego_1.Juego));
exports.BlackJack = BlackJack;
var newBlackJack = new BlackJack();
newBlackJack.mostrarInstrucciones();
newBlackJack.jugar();
console.log(newBlackJack.getResultado());
