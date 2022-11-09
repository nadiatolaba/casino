"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TragamonedaMultilinea = void 0;
const Tragamoneda_1 = require("./Tragamoneda");
class TragamonedaMultilinea extends Tragamoneda_1.Tragamoneda {
    constructor(valoresDeApuesta, simbolosDisponibles, probabilidadDeGanar) {
        super("Tragamoneda Multilinea", valoresDeApuesta, simbolosDisponibles, probabilidadDeGanar);
        this.lineasGanadoras = "No hay lineas ganadoras";
        this.cantLineasGanadoras = 0;
    }
    mostrarInstrucciones() {
        let ruta = "infoJuegos\\instrucciones\\tragamonedaMultilinea.txt";
        this.leerArchivo(ruta);
    }
    getLineasGanadoras() {
        return this.lineasGanadoras;
    }
    getCantLineasGanadoras() {
        return this.cantLineasGanadoras;
    }
    jugar() {
        const dimension = 3;
        this.matrizGenerada = this.generarMatrizCuadrada(dimension);
        this.cantLineasGanadoras = this.obtenerCantidadLineasGanadoras(this.matrizGenerada);
        if (this.cantLineasGanadoras > 0) {
            this.setResultado(this.apuesta * 2 * this.cantLineasGanadoras);
        }
        if (this.obtenerLineasGanadoras(this.matrizGenerada) != "") {
            this.lineasGanadoras = this.obtenerLineasGanadoras(this.matrizGenerada);
        }
        console.log(this.lineasGanadoras);
        // Preparando INFO para guardar en txt
        let matriz = `\t\t\t${this.matrizGenerada[0]}\n\t\t\t${this.matrizGenerada[1]}\n\t\t\t${this.matrizGenerada[2]}`;
        let fechaActual = new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear();
        let horaActual = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
        let resultado = `\nINFO - ${fechaActual} ${horaActual} - Juego: ${this.tematica} - Resultado apuesta: $${this.resultado} - Dinero apostado: $${this.apuesta}\n\t - Matriz Generada:\n${matriz}\n\t - Cantidad de Lineas ganadoras: ${this.cantLineasGanadoras}\n\t - Lineas ganadoras: ${this.lineasGanadoras}`;
        let ruta = "infoJuegos\\resultados\\tragamonadaMultilinea.txt";
        this.guardarResultadoEnTxT(ruta, resultado);
    }
    // una cadena de texto que contiene las lineas ganadoras
    obtenerLineasGanadoras(matriz) {
        let lineasGanadoras = "";
        for (let i = 0; i < matriz.length; i++) {
            let tieneSimbolosIguales = this.verificarLinea(matriz[i]);
            if (tieneSimbolosIguales) {
                lineasGanadoras += "horizontal " + (i + 1) + ": " + matriz[i] + "   ";
            }
        }
        let diagonal1 = [matriz[0][0], matriz[1][1], matriz[2][2]];
        if (this.verificarLinea(diagonal1)) {
            lineasGanadoras += "diagonal 1: " + diagonal1 + "   ";
        }
        let diagonal2 = [matriz[0][2], matriz[1][1], matriz[2][0]];
        if (this.verificarLinea(diagonal2)) {
            lineasGanadoras += "diagonal 2: " + diagonal2 + "   ";
        }
        return lineasGanadoras;
    }
    obtenerCantidadLineasGanadoras(matriz) {
        let lineasGanadoras = 0;
        for (let i = 0; i < matriz.length; i++) {
            if (this.verificarLinea(matriz[i])) {
                lineasGanadoras += 1;
            }
        }
        let diagonal1 = [matriz[0][0], matriz[1][1], matriz[2][2]];
        if (this.verificarLinea(diagonal1)) {
            lineasGanadoras += 1;
        }
        let diagonal2 = [matriz[0][2], matriz[1][1], matriz[2][0]];
        if (this.verificarLinea(diagonal2)) {
            lineasGanadoras += 1;
        }
        return lineasGanadoras;
    }
}
exports.TragamonedaMultilinea = TragamonedaMultilinea;
// let simbolos = ["#", "$", "@"];
// let tragamoneda = new TragamonedaMultilinea(simbolos, 40, [100, 300, 400]);
// tragamoneda.setApuesta(300);
// tragamoneda.jugar()
// tragamoneda.mostrarInstrucciones();
// console.log();
// console.log(tragamoneda.mostrarMatrizGenerada());
// console.log("apuesta realizada: " + tragamoneda.getApuesta())
// console.log("resultado: " + tragamoneda.getResultado());
