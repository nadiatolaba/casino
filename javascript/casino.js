"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casino = void 0;
class Casino {
    constructor(juegosDisponibles) {
        this.juegosDisponibles = juegosDisponibles;
        this.juegoElegido = null;
    }
    presentarJuegos() {
        this.juegosDisponibles.forEach(juego => juego.mostrarInstrucciones());
    }
    elegirJuego(indice) {
        this.juegoElegido = this.juegosDisponibles[indice];
    }
    getJuegoElegido() {
        return this.juegoElegido;
    }
    realizarApuesta(apuesta) {
        if (this.juegoElegido != null) {
            this.juegoElegido.setApuesta(apuesta);
            return true;
        }
        else {
            //mensaje de main.ts
            console.log("Para realizar una apuesta primero debe elegir un juego");
            return false;
        }
    }
    getResultadoApuesta() {
        if (this.juegoElegido != null && this.juegoElegido.getApuesta() > 0) {
            return this.juegoElegido.getResultado();
        }
        else {
            return -1;
        }
    }
    getJuegosDisponibles() {
        return this.juegosDisponibles;
    }
}
exports.Casino = Casino;
