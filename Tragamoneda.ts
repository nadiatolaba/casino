import { Juego } from "./Juego";

export abstract class Tragamoneda extends Juego {
    protected simbolosDisponibles: string[];
    protected probabilidadDeGanar: number;
    protected valoresDeApuesta: number[];
    protected matrizGenerada: string [][]; // [[a1,a2,a3], [b1,b2,b3], [c1,c2,c3]];

    constructor(tematica: string, apuesta: number, simbolosDisponibles: string[], probabilidadDeGanar: number, valoresDeApuesta: number[]) {
        super(tematica, apuesta);
        this.simbolosDisponibles = simbolosDisponibles;
        this.probabilidadDeGanar = probabilidadDeGanar;
        this.valoresDeApuesta = valoresDeApuesta;
        this.matrizGenerada = [];
    }

    
    private obtenerUnElementoAlAzar(elementos: string[]): string {
        let pos: number = this.generarNroAleatorioEntreRango(0, elementos.length-1);
        return elementos[pos];
    }

    private generarLineaDeSimbolos(cantSimbolos: number): string[] {
        let lineaSimbolos: string[] = [];
    
        for (let i: number = 0; i < cantSimbolos; i++) {
            let simbolo: string = this.obtenerUnElementoAlAzar(this.simbolosDisponibles);
            lineaSimbolos.push(simbolo);
        }
        return lineaSimbolos;
    }

    protected generarMatrizCuadrada(dimension: number): string[][] {
        let matriz: string[][] = [];
    
        for (let i: number = 0; i < dimension; i++) {
            let lineaSimbolos: string[] = this.generarLineaDeSimbolos(dimension);
            matriz.push(lineaSimbolos);
        }
        return matriz;
    }

    protected verificarLinea(linea: string[]): boolean {
        let simbolo: string = linea[0];
        for (let i: number = 1; i < linea.length; i++) {
            if (simbolo != linea[i]) {
                return false;
            }
        }
        return true;
    }
    
    protected setMatrizGenerada(matriz: string[][]): void {
        this.matrizGenerada = matriz;
    }

    public mostrarMatrizGenerada(): string {
        let presentacion: string = "";
        for (let i: number = 0; i < this.matrizGenerada.length; i++) {
            presentacion += this.matrizGenerada[i] + "\n";
        }
        return presentacion;

    }

    public setSimbolosDisponibles(simbolos:string[]): void {
        this.simbolosDisponibles = simbolos;
    }

    public getSimbolosDisponibles(): string[] {
        return this.simbolosDisponibles;
    }

    public getValoresDeApuesta(): number[] {
        return this.valoresDeApuesta;
    }

    public setValoresDeApuesta(valores: number[]) {
        this.valoresDeApuesta = valores;
    }

    public getProbabilidadDeGanar(): number {
        return this.probabilidadDeGanar;
    }

    public setProbabilidadDeGanar(probabilidad: number): void {
        this.probabilidadDeGanar = probabilidad;
    }
    
}
