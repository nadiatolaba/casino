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
exports.Ruleta = void 0;
var fs = require("fs");
var Juego_1 = require("./Juego");
var Ruleta = /** @class */ (function (_super) {
    __extends(Ruleta, _super);
    function Ruleta(pTematica, pApuesta, paramElegido) {
        var _this = _super.call(this, pTematica, pApuesta) || this;
        _this.numeroElegido = paramElegido;
        return _this;
    }
    Ruleta.prototype.guardarResultadoEnTxT = function () {
    };
    Ruleta.prototype.jugar = function () {
        var resultado = this.generarNroAleatorioEntreRango(0, 36);
        if (this.numeroElegido === resultado) {
            this.setResultado(this.apuesta * 2);
        }
        else {
            this.setResultado(0);
        }
    };
    Ruleta.prototype.mostrarInstrucciones = function () {
        var path = "casinoPOO\\ejemplo.txt";
        fs.readFile(path, 'utf-8', function (error, data) {
            if (!error) {
                console.log(data);
            }
            else {
                console.log(error);
            }
        });
    };
    return Ruleta;
}(Juego_1.Juego));
exports.Ruleta = Ruleta;
var juegoRuleta = new Ruleta('Ruleta', 500, 10);
juegoRuleta.jugar();
console.log(juegoRuleta.getResultado());
juegoRuleta.mostrarInstrucciones();
