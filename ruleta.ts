import { Juego } from "./Juego";
export class Ruleta extends Juego {
    private numeroElegido: number;
    private numeroGanador: number;

    constructor(paramApuestas: number[]) {
        super("Ruleta", paramApuestas);
        this.numeroElegido = -1;
        this.numeroGanador = -1;
    }

    public getNumeroGanador(): number {
        return this.numeroGanador;
    }

    public setNumeroElegido(pNroElegido: number): void {
        this.numeroElegido = pNroElegido;
    }

    public getNumeroElegido(): number {
        return this.numeroElegido;
    }

    public jugar(): void {
        this.numeroGanador = this.generarNroAleatorioEntreRango(0, 36);
        if (this.numeroElegido === this.numeroGanador) {
            this.setResultado(this.apuesta * 3);
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
        this.leerArchivo("infoJuegos\\instrucciones\\ruleta.txt");
    }

}

// let juegoRuleta: Ruleta = new Ruleta ();
// juegoRuleta.setNumeroElegido(10);
// juegoRuleta.setApuesta(500);
// juegoRuleta.mostrarInstrucciones();
// juegoRuleta.jugar();
// console.log(juegoRuleta.getResultado());
