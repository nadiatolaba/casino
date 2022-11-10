import { Tragamoneda } from "./Tragamoneda";

export class TragamonedaTradicional extends Tragamoneda {
    private simboloElegido: string;
    private acertoSimbolo: boolean;
    private lineaGanadora: string;

    constructor(valoresDeApuesta: number[], simbolosDisponibles: string[], probabilidadDeGanar: number) {
        super("Tragamoneda Tradicional", valoresDeApuesta, simbolosDisponibles, probabilidadDeGanar);
        this.simboloElegido = "No se eligio un simbolo";
        this.acertoSimbolo = false;
        this.lineaGanadora = "No hay linea ganadora";
    }


    public getSimboloElegido(): string {
        return this.simboloElegido;
    }

    public setSimboloElegido(simboloElegido: string): void {
        this.simboloElegido = simboloElegido;
    }

    public getLineaGanadora(): string {
        return this.lineaGanadora;
    }

    public isAcertoSimbolo(): boolean {
        return this.acertoSimbolo;
    }


    public jugar(): void {
        const dimension: number = 3;
        this.matrizGenerada = this.generarMatrizCuadrada(dimension);


        if (this.verificarLinea(this.matrizGenerada[1])) {
            this.setResultado(this.apuesta * 2);
            this.acertoSimbolo = this.matrizGenerada[1][1] == this.simboloElegido;
            this.lineaGanadora = "" + this.matrizGenerada[1];
            if (this.acertoSimbolo) {
                this.setResultado(this.resultado * 2);
            } 
        } else {
            this.setResultado(0);
            this.lineaGanadora = "No hay linea ganadora";
        }

        // Preparando INFO para guardar en txt
        let matriz = `\t\t\t${this.matrizGenerada[0]}\n\t\t\t${this.matrizGenerada[1]}\n\t\t\t${this.matrizGenerada[2]}`;

        let fechaActual: string = new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear();
        let horaActual: string = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();

        let resultado: string = `\nINFO - ${fechaActual} ${horaActual} - Juego: ${this.tematica} - Resultado apuesta: $${this.resultado} - Dinero apostado: $${this.apuesta} - simbolo Elegido ${this.simboloElegido} - Acerto simbolo: ${this.acertoSimbolo}\n\t - Matriz Generada:\n${matriz}`;

        let ruta: string = "infoJuegos\\resultados\\tragamonadaTradicional.txt";
        this.guardarResultadoEnTxT(ruta, resultado);

    }

    public mostrarInstrucciones(): void {
        this.leerArchivo("infoJuegos\\instrucciones\\tragamonedaTradicional.txt");
    }


}

// let simbolos = ["#", "$", "@"];
// let tragamonedaT = new TragamonedaTradicional([100, 300, 400],simbolos, 40);

// tragamonedaT.setApuesta(200);
// tragamonedaT.setSimboloElegido(tragamonedaT.getSimbolosDisponibles()[1]);
// tragamonedaT.jugar();
// console.log(tragamonedaT.getResultado();
// // tragamonedaT.get