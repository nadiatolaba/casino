"use strict";
exports.__esModule = true;
exports.Juego = void 0;
var fs = require("fs");
var Juego = /** @class */ (function () {
    function Juego(pTematica, pApuesta) {
        this.tematica = pTematica;
        this.apuesta = pApuesta;
        this.resultado = 0;
    }
    Juego.prototype.setApuesta = function (pApuesta) {
        this.apuesta = pApuesta;
    };
    Juego.prototype.getApuesta = function () {
        return this.apuesta;
    };
    Juego.prototype.getTematica = function () {
        return this.tematica;
    };
    Juego.prototype.generarNroAleatorioEntreRango = function (minimo, maximo) {
        var nroAleatorio = Math.floor(Math.random() * ((maximo - minimo) + 1) + minimo);
        return nroAleatorio;
    };
    Juego.prototype.guardarResultadoEnTxT = function (ruta, resultado) {
        fs.appendFile(ruta, resultado, function (error) {
            if (error) {
                console.log(error);
                return;
            }
        });
    };
    Juego.prototype.leerArchivo = function (ruta) {
        fs.readFile(ruta, 'utf-8', function (error, texto) {
            if (!error) {
                console.log(texto);
            }
            else {
                console.log(error);
            }
        });
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
