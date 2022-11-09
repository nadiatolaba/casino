import * as fs from "fs";
export abstract class Juego {
    protected tematica: string;
    protected apuesta: number;
    protected resultado: number;
    protected apuestasPermitidas: number[];

    constructor(pTematica: string, apuestasPermitidasAux: number[]) {
        this.tematica = pTematica;
        this.apuesta = 0;
        this.resultado = 0;
        this.apuestasPermitidas = apuestasPermitidasAux;
    }

    public setApuesta(pApuesta: number): void {
        this.apuesta = pApuesta;
    }

    public getApuesta(): number {
        return this.apuesta;
    }

    public getTematica(): string {
        return this.tematica;
    }

    protected generarNroAleatorioEntreRango(minimo: number, maximo: number): number {
        let nroAleatorio: number = Math.floor(Math.random() * ((maximo - minimo) + 1) + minimo);
        return nroAleatorio;
    }

    protected guardarResultadoEnTxT(ruta: string, resultado: string): void {
            fs.appendFileSync(ruta,resultado);        
        // fs.appendFile(ruta, resultado, (error) => {
        //     if (error) {
        //         console.log(error);
        //         return
        //     }
        // });
    }

    protected leerArchivo(ruta: string) {

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

    public abstract jugar(): void;

    protected setResultado(paramResultado: number): void {
        this.resultado = paramResultado;
    };

    public getResultado(): number {
        return this.resultado;
    }

    public abstract mostrarInstrucciones(): void;

    public setApuestasPermitidas(apuestas: number[]): void {
        this.apuestasPermitidas = apuestas;
    }

    public getApuestasPermitidas(): number[] {
        return this.apuestasPermitidas;
    }
}
