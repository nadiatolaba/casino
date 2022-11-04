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

    protected abstract guardarResultadoEnTxT(resultado: string):void;

    public abstract jugar():void;

    protected setResultado(paramResultado:number):void{
        this.resultado = paramResultado;
    };

    public getResultado():number{
        return this.resultado;
    }

    public abstract mostrarInstrucciones():void;
}
