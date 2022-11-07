import { Juego } from "./Juego"

export class BlackJack extends Juego{

    private numGanador:number;
    constructor (){
        super('BlackJack')
        this.numGanador = 21;
    }

    public jugar():void {
        let suma1: number = (this.generarNroAleatorioEntreRango(1,11));
        let suma2:number = (this.generarNroAleatorioEntreRango(1,11))
        let suma3: number = (this.generarNroAleatorioEntreRango(1,11));
        let suma4:number = (this.generarNroAleatorioEntreRango(1,11))
        let cartasJugador: number = suma1+suma3;
        let cartasCasa:number = suma2+suma4;
        if(cartasJugador === this.numGanador){
            this.setResultado(this.apuesta * 3);
            console.log(`¡BLACKJACK! ¡GANASTE!`)
        }else if(cartasJugador>cartasCasa){
            this.setResultado(this.apuesta * 2);
            console.log('¡Ganaste por mayor puntuacion!')
        }else if(cartasCasa>cartasJugador){
            this.setResultado(0);
            console.log('Perdiste!')
        }
        else{
            console.log('Empate!')
        }
        let fechaActual: string = new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear();
        let horaActual: string = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
        let resultado: string = `\nINFO - ${fechaActual} ${horaActual} - Juego: ${this.tematica} - Resultado apuesta: $${this.resultado} - Dinero apostado: $${this.apuesta} - Cartas Jugador: ${cartasJugador} - Cartas Casa: ${cartasCasa}`;
        let ruta: string = "infoJuegos\\resultados\\blackjack.txt";
        this.guardarResultadoEnTxT(ruta, resultado);
    }

    public mostrarInstrucciones(): void {
        this.leerArchivo("infoJuegos\\instrucciones\\blackjack.txt")
    }
}
let newBlackJack: BlackJack = new BlackJack ();
newBlackJack.mostrarInstrucciones();
newBlackJack.setApuesta(1000);
newBlackJack.jugar();
console.log(newBlackJack.getResultado());