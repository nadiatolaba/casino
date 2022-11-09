import { Tragamoneda } from "./Tragamoneda";

export class TragamonedaMultilinea extends Tragamoneda {
    private lineasGanadoras: string;
    private cantLineasGanadoras: number;

    constructor(valoresDeApuesta: number[], simbolosDisponibles: string[], probabilidadDeGanar: number) {
        super("Tragamoneda Multilinea", valoresDeApuesta, simbolosDisponibles, probabilidadDeGanar);
        this.lineasGanadoras = "No hay lineas ganadoras";
        this.cantLineasGanadoras = 0;
    }

    public mostrarInstrucciones(): void {
        let ruta: string = "infoJuegos\\instrucciones\\tragamonedaMultilinea.txt";
        this.leerArchivo(ruta);
    }

    public getLineasGanadoras(): string {
        return this.lineasGanadoras;
    }

    public getCantLineasGanadoras(): number {
        return this.cantLineasGanadoras;
    }

    public jugar(): void {
        const dimension: number = 3;
        this.matrizGenerada = this.generarMatrizCuadrada(dimension);

        this.cantLineasGanadoras = this.obtenerCantidadLineasGanadoras(this.matrizGenerada);
        if (this.cantLineasGanadoras > 0) {
            this.setResultado(this.apuesta * 2 * this.cantLineasGanadoras);
        } else {
            this.setResultado(0);
        }

        if (this.obtenerLineasGanadoras(this.matrizGenerada) != "") {
            this.lineasGanadoras = this.obtenerLineasGanadoras(this.matrizGenerada);
        } else {
            this.lineasGanadoras = "No hay lineas ganadoras";
        }

        // Preparando INFO para guardar en txt
        let matriz = `\t\t\t${this.matrizGenerada[0]}\n\t\t\t${this.matrizGenerada[1]}\n\t\t\t${this.matrizGenerada[2]}`;

        let fechaActual: string = new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear();
        let horaActual: string = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();

        let resultado: string = `\nINFO - ${fechaActual} ${horaActual} - Juego: ${this.tematica} - Resultado apuesta: $${this.resultado} - Dinero apostado: $${this.apuesta}\n\t - Matriz Generada:\n${matriz}\n\t - Cantidad de Lineas ganadoras: ${this.cantLineasGanadoras}\n\t - Lineas ganadoras: ${this.lineasGanadoras}`;

        let ruta: string = "infoJuegos\\resultados\\tragamonadaMultilinea.txt";
        this.guardarResultadoEnTxT(ruta, resultado);
    }

    // una cadena de texto que contiene las lineas ganadoras
    private obtenerLineasGanadoras(matriz: string[][]): string {
        let lineasGanadoras: string = "";

        for (let i: number = 0; i < matriz.length; i++) {
            let tieneSimbolosIguales = this.verificarLinea(matriz[i]);
            if (tieneSimbolosIguales) {
                lineasGanadoras += "horizontal " + (i + 1) + ": " + matriz[i] + "   ";
            }
        }

        let diagonal1: string[] = [matriz[0][0], matriz[1][1], matriz[2][2]];
        if (this.verificarLinea(diagonal1)) {
            lineasGanadoras += "diagonal 1: " + diagonal1 + "   ";
        }

        let diagonal2: string[] = [matriz[0][2], matriz[1][1], matriz[2][0]];
        if (this.verificarLinea(diagonal2)) {
            lineasGanadoras += "diagonal 2: " + diagonal2 + "   ";
        }
        return lineasGanadoras;
    }

    private obtenerCantidadLineasGanadoras(matriz: string[][]): number {
        let lineasGanadoras: number = 0;

        for (let i: number = 0; i < matriz.length; i++) {
            if (this.verificarLinea(matriz[i])) {
                lineasGanadoras += 1;
            }
        }
        let diagonal1: string[] = [matriz[0][0], matriz[1][1], matriz[2][2]];
        if (this.verificarLinea(diagonal1)) {
            lineasGanadoras += 1;
        }

        let diagonal2: string[] = [matriz[0][2], matriz[1][1], matriz[2][0]];
        if (this.verificarLinea(diagonal2)) {
            lineasGanadoras += 1;
        }
        return lineasGanadoras;
    }

}


// let simbolos = ["#", "$", "@"];
// let tragamoneda = new TragamonedaMultilinea(simbolos, 40, [100, 300, 400]);

// tragamoneda.setApuesta(300);
// tragamoneda.jugar()

// tragamoneda.mostrarInstrucciones();

// console.log();
// console.log(tragamoneda.mostrarMatrizGenerada());

// console.log("apuesta realizada: " + tragamoneda.getApuesta())
// console.log("resultado: " + tragamoneda.getResultado());