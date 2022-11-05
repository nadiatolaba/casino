"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tragamoneda = void 0;
const Juego_1 = require("./Juego");
class Tragamoneda extends Juego_1.Juego {
    constructor(tematica, apuesta, simbolosDisponibles, probabilidadDeGanar, valoresDeApuesta) {
        super(tematica, apuesta);
        this.simbolosDisponibles = simbolosDisponibles;
        this.probabilidadDeGanar = probabilidadDeGanar;
        this.valoresDeApuesta = valoresDeApuesta;
        this.matrizGenerada = [];
    }
    obtenerUnElementoAlAzar(elementos) {
        let pos = this.generarNroAleatorioEntreRango(0, elementos.length - 1);
        return elementos[pos];
    }
    generarLineaDeSimbolos(cantSimbolos) {
        let lineaSimbolos = [];
        for (let i = 0; i < cantSimbolos; i++) {
            let simbolo = this.obtenerUnElementoAlAzar(this.simbolosDisponibles);
            lineaSimbolos.push(simbolo);
        }
        return lineaSimbolos;
    }
    generarMatrizCuadrada(dimension) {
        let matriz = [];
        for (let i = 0; i < dimension; i++) {
            let lineaSimbolos = this.generarLineaDeSimbolos(dimension);
            matriz.push(lineaSimbolos);
        }
        return matriz;
    }
    verificarLinea(linea) {
        let simbolo = linea[0];
        for (let i = 1; i < linea.length; i++) {
            if (simbolo != linea[i]) {
                return false;
            }
        }
        return true;
    }
    setMatrizGenerada(matriz) {
        this.matrizGenerada = matriz;
    }
    mostrarMatrizGenerada() {
        let presentacion = "";
        for (let i = 0; i < this.matrizGenerada.length; i++) {
            presentacion += this.matrizGenerada[i] + "\n";
        }
        return presentacion;
    }
}
exports.Tragamoneda = Tragamoneda;
