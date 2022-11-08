import { Juego } from "./Juego";
export class Casino {
    private juegosDisponibles: Juego[];
    private juegoElegido: Juego | null;

    constructor(juegosDisponibles: Juego[]) {
        this.juegosDisponibles = juegosDisponibles;
        this.juegoElegido = null;
    }

    public presentarJuegos():void{
        this.juegosDisponibles.forEach(juego => juego.mostrarInstrucciones());
    }

    public elegirJuego(indice:number):void{
        this.juegoElegido = this.juegosDisponibles[indice]
    }

    public getJuegoElegido():Juego | null{
        return this.juegoElegido;
    }

    public realizarApuesta(apuesta:number):boolean{
        if (this.juegoElegido != null) {
            this.juegoElegido.setApuesta(apuesta);
            return true;
        }else{
            //mensaje de main.ts
            console.log("Para realizar una apuesta primero debe elegir un juego");
            return false;
        }
    }

    public getResultadoApuesta():number{
        if (this.juegoElegido != null && this.juegoElegido.getApuesta() > 0) {
            return this.juegoElegido.getResultado();
        } else {
            return -1;
        }
    }

    public getJuegosDisponibles():Juego[]{
        return this.juegosDisponibles;
    }
}