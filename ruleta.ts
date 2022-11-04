import * as fs from "fs";
import { Juego } from "./Juego";
export class Ruleta extends Juego {
    private numeroElegido:number;
    private numeroGanador:number;

    constructor (pTematica: string, pApuesta: number, paramElegido: number){
        super(pTematica, pApuesta)
        this.numeroElegido = paramElegido;
        this.numeroGanador = -1;
    }

    public jugar(): void {
        this.numeroGanador = this.generarNroAleatorioEntreRango(0,36);
        if(this.numeroElegido ===  this.numeroGanador){
            this.setResultado(this.apuesta * 2);
        } else {
            this.setResultado(0);
        }
        let fechaActual: string = new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear();
        let horaActual: string = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
        let resultado: string = `\nINFO - ${fechaActual} ${horaActual} - Juego: ${this.tematica} - Resultado apuesta: $${this.resultado} - Dinero apostado: $${this.apuesta} - Numero elegido: ${this.numeroElegido} - Numero ganador: ${this.numeroGanador}`;
        let ruta: string = "infoJuegos\\resultados\\ruleta.txt";
        this.guardarResultadoEnTxT(ruta, resultado);
    }

    public mostrarInstrucciones(): void {
        let path: string ="infoJuegos\\instrucciones\\ruleta.txt"
        fs.readFile(path,'utf-8',(error, texto) => {
            if(!error){
                console.log(texto)
            }
            else{ 
                console.log(error)
            }
        });
    }

}

let juegoRuleta: Ruleta = new Ruleta ('Ruleta', 500, 10);
juegoRuleta.jugar();
console.log(juegoRuleta.getResultado());
juegoRuleta.mostrarInstrucciones();
