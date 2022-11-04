import * as fs from "fs";
export abstract class Juego {
    protected tematica: string;
    protected apuesta: number;
    protected resultado: number;

    constructor (pTematica:string, pApuesta:number){
        this.tematica = pTematica;
        this.apuesta = pApuesta;
        this.resultado = 0;
    }

    protected generarNroAleatorioEntreRango(minimo:number, maximo:number):number{
        let nroAleatorio:number = Math.floor(Math.random() * ((maximo - minimo) + 1) + minimo);
        return nroAleatorio;
    }

    protected guardarResultadoEnTxT(ruta: string, resultado: string):void {
        fs.appendFile(ruta, resultado, (error) => {
            if (error) {
                console.log(error);
                return 
            }
        });
    }

    protected leerArchivo(ruta:string) {
        fs.readFile(ruta,'utf-8',(error, texto) => {
            if(!error){
                console.log(texto)
            }
            else{ 
                console.log(error)
            }
        });
    }

    public abstract jugar():void;

    protected setResultado(paramResultado:number):void{
        this.resultado = paramResultado;
    };

    public getResultado():number{
        return this.resultado;
    }

    public abstract mostrarInstrucciones():void;
}
