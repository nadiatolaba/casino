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
var Juego_1 = require("../Juego");
var Ruleta = /** @class */ (function (_super) {
    __extends(Ruleta, _super);
    function Ruleta(pTematica, pApuesta, paramElegido) {
        var _this = _super.call(this, pTematica, pApuesta) || this;
        _this.numeroElegido = paramElegido;
        _this.numeroGanador = -1;
        return _this;
    }
    Ruleta.prototype.jugar = function () {
        this.numeroGanador = this.generarNroAleatorioEntreRango(0, 36);
        if (this.numeroElegido === this.numeroGanador) {
            this.setResultado(this.apuesta * 2);
        }
        else {
            this.setResultado(0);
        }
        var fechaActual = new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear();
        var horaActual = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
        var resultado = "\nINFO - ".concat(fechaActual, " ").concat(horaActual, " - Juego: ").concat(this.tematica, " - Resultado apuesta: $").concat(this.resultado, " - Dinero apostado: $").concat(this.apuesta, " - Numero elegido: ").concat(this.numeroElegido, " - Numero ganador: ").concat(this.numeroGanador);
        var ruta = "infoJuegos\\resultados\\ruleta.txt";
        this.guardarResultadoEnTxT(ruta, resultado);
    };
    Ruleta.prototype.mostrarInstrucciones = function () {
        this.leerArchivo("infoJuegos\\instrucciones\\ruleta.txt");
    };
    return Ruleta;
}(Juego_1.Juego));
exports.Ruleta = Ruleta;
var juegoRuleta = new Ruleta('Ruleta', 500, 10);
juegoRuleta.mostrarInstrucciones();
juegoRuleta.jugar();
console.log(juegoRuleta.getResultado());
