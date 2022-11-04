"use strict";
exports.__esModule = true;
exports.Juego = void 0;
var Juego = /** @class */ (function () {
    function Juego(pTematica, pApuesta) {
        this.tematica = pTematica;
        this.apuesta = pApuesta;
        this.resultado = 0;
    }
    Juego.prototype.generarNroAleatorioEntreRango = function (minimo, maximo) {
        var nroAleatorio = Math.floor(Math.random() * ((maximo - minimo) + 1) + minimo);
        return nroAleatorio;
    };
    Juego.prototype.setResultado = function (paramResultado) {
        this.resultado = paramResultado;
    };
    ;
    Juego.prototype.getResultado = function () {
        return this.resultado;
    };
    return Juego;
}());
exports.Juego = Juego;
