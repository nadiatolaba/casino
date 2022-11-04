import * as fs from "fs";
import { Juego } from "./Juego";
export class Ruleta extends Juego {

    private numeroElegido:number;

    constructor (pTematica:string, pApuesta:number, paramElegido:number){
        super(pTematica, pApuesta)
        this.numeroElegido = paramElegido;
    }

    public guardarResultadoEnTxT():void {
        
    }
    public jugar(): void {
        let resultado = this.generarNroAleatorioEntreRango(0,36);
        if(this.numeroElegido === resultado){
            this.setResultado(this.apuesta * 2)
        } else {
            this.setResultado(0);
        }
    }
    public mostrarInstrucciones(): void {
        let path: string = "casinoPOO\\ejemplo.txt";
        fs.readFile(path,'utf-8',(error:Error, data:string) => {
            if(!error){
                console.log(data)
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