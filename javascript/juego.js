"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Juego = void 0;
const fs = __importStar(require("fs"));
class Juego {
    constructor(pTematica, apuestasPermitidasAux) {
        this.tematica = pTematica;
        this.apuesta = 0;
        this.resultado = 0;
        this.apuestasPermitidas = apuestasPermitidasAux;
    }
    setApuesta(pApuesta) {
        this.apuesta = pApuesta;
    }
    getApuesta() {
        return this.apuesta;
    }
    getTematica() {
        return this.tematica;
    }
    generarNroAleatorioEntreRango(minimo, maximo) {
        let nroAleatorio = Math.floor(Math.random() * ((maximo - minimo) + 1) + minimo);
        return nroAleatorio;
    }
    guardarResultadoEnTxT(ruta, resultado) {
        fs.appendFileSync(ruta, resultado);
        // fs.appendFile(ruta, resultado, (error) => {
        //     if (error) {
        //         console.log(error);
        //         return
        //     }
        // });
    }
    leerArchivo(ruta) {
        console.log(fs.readFileSync(ruta, 'utf-8'));
        // fs.readFile(ruta,'utf-8',(error, texto) => {
        //     if(!error){
        //         console.log(texto)
        //     }
        //     else{ 
        //         console.log(error)
        //     }
        // });
    }
    setResultado(paramResultado) {
        this.resultado = paramResultado;
    }
    ;
    getResultado() {
        return this.resultado;
    }
    setApuestasPermitidas(apuestas) {
        this.apuestasPermitidas = apuestas;
    }
    getApuestasPermitidas() {
        return this.apuestasPermitidas;
    }
}
exports.Juego = Juego;
