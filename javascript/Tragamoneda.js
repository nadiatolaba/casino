"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tragamoneda = void 0;
const Juego_1 = require("./Juego");
class Tragamoneda extends Juego_1.Juego {
    constructor(tematica, apuestasPermitidas, simbolosDisponibles, probabilidadDeGanar) {
        super(tematica, apuestasPermitidas);
        this.simbolosDisponibles = simbolosDisponibles;
        this.probabilidadDeGanar = probabilidadDeGanar;
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
            presentacion += this.matrizGenerada[i];
            if (i != this.matrizGenerada.length - 1) {
                presentacion += "\n";
            }
        }
        return presentacion;
    }
    setSimbolosDisponibles(simbolos) {
        this.simbolosDisponibles = simbolos;
    }
    getSimbolosDisponibles() {
        return this.simbolosDisponibles;
    }
    getProbabilidadDeGanar() {
        return this.probabilidadDeGanar;
    }
    setProbabilidadDeGanar(probabilidad) {
        this.probabilidadDeGanar = probabilidad;
    }
}
exports.Tragamoneda = Tragamoneda;
