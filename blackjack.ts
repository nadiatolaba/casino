import { Juego } from "./Juego"

export class BlackJack extends Juego{
    private numGanador:number;
    private cartasJugador: number;
    private cartasCasa:number;
    private resultadoBlackJack:string;
    constructor (apuestasPermitidas:number[]){
        super('BlackJack',apuestasPermitidas)
        this.numGanador = 21;
        this.cartasCasa = 0;
        this.cartasJugador = 0;
        this.resultadoBlackJack = "No se encontro el resultado.";
    }

    public jugar():void {
        let suma1: number = (this.generarNroAleatorioEntreRango(1,11));
        let suma2:number = (this.generarNroAleatorioEntreRango(1,11))
        let suma3: number = (this.generarNroAleatorioEntreRango(1,11));
        let suma4:number = (this.generarNroAleatorioEntreRango(1,11))
        this.cartasJugador = suma1+suma3;
        this.cartasCasa = suma2+suma4;
        if(this.cartasJugador === this.numGanador){
            this.setResultado(this.apuesta * 3);
            this.resultadoBlackJack = `¡BLACKJACK! ¡GANASTE!`
        }else if(this.cartasJugador>this.cartasCasa){
            this.setResultado(this.apuesta * 2);
            this.resultadoBlackJack ='¡Ganaste por mayor puntuacion!';
        }else if(this.cartasCasa>this.cartasJugador){
            this.setResultado(0);
            this.resultadoBlackJack ='Perdiste!';
        }
        else{
            this.resultadoBlackJack ='Empate!';
        }
        let fechaActual: string = new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear();
        let horaActual: string = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
        let resultado: string = `\nINFO - ${fechaActual} ${horaActual} - Juego: ${this.tematica} - Resultado apuesta: $${this.resultado} - Dinero apostado: $${this.apuesta} - Cartas Jugador: ${this.cartasJugador} - Cartas Casa: ${this.cartasCasa}`;
        let ruta: string = "infoJuegos\\resultados\\blackjack.txt";
        this.guardarResultadoEnTxT(ruta, resultado);
    }

    public mostrarInstrucciones(): void {
        this.leerArchivo("infoJuegos\\instrucciones\\blackjack.txt")
    }

    public getCartasJugador():number{
        return this.cartasJugador;
    }

    public getCartasCasa():number{
        return this.cartasCasa
    }

    public getResultadoBlackJack():string{
        return this.resultadoBlackJack;
    }

}
// let newBlackJack: BlackJack = new BlackJack ();
// newBlackJack.mostrarInstrucciones();
// newBlackJack.setApuesta(1000);
// newBlackJack.jugar();
// console.log(newBlackJack.getResultado());