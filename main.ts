import { ReelSlot } from "./class/reelSlot";
import { Roulette } from "./class/roulette";
import { Casino } from "./class/casino";
//Modulos
import * as fs from 'fs';
let readline=require('readline-sync');
let information:string=fs.readFileSync();
let clasificationText:string[]=information.split('\\');
//Instancias tragamonedas
let reelSlotBet = [5,10,15,20];
let reelSlotOne:ReelSlot=new ReelSlot(1001,reelSlotBet,"Animal",9,20,3,10000);
let reelSlotList:ReelSlot[]=[reelSlotOne];
//Instancia ruleta
let countTurns:number = 0;
let numberRed: number[] = new Array (1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36);
let rouletteOne : Roulette = new Roulette(1,numberRed,0);
let rouletteList:Roulette[]=[rouletteOne];
 
//Instancia casino
let newCasino:Casino=new Casino('Grupo Examen',,reelSlotList,rouletteList,500000);


//Informacion del casino
export function welcome():void{
    gameInformation(0);
    newPlayer();
    console.log(`Bienvenido ${playerOne.getName()}.`);
    main();
}
/* Funcionalidades de ruleta */
function rouletteMenu(option:number):void{
    switch(option){
        case 0:
            games();
            break;
        case 1:
            let value:number=readline.questionInt('Ingrese su apuesta: ');
            while (value > playerOne.getFoundsAvailable()){
                console.log ("Fondos Insuficientes")
                value=readline.questionInt('Ingrese su apuesta nuevamente: ');
            }
            let pleno:number=readline.questionInt('Ingrese Numero entre 1 y 36 para PLENO: ');
            while (pleno < 1 || pleno>36) {
                pleno=readline.questionInt('Ingrese Numero entre 1 y 36 para PLENO: ');
            }
            let color:string | undefined = undefined;
            let p_color: number = readline.questionInt('Ingrese Color para Jugar, Para ROJO (1), para NEGRO (2) o Pasar (3): ');
            switch(p_color) {
                case 1:
                    color = "ROJO";
                    break;
                case 2:
                    color = "NEGRO";
                    break;
                case 3:
                    color = undefined;
                    break;
                default:
                    console.log("El valor Ingresado es Invalido, no se jugara por este Item")
                    break;
            }
            let parOinpar:string | undefined= undefined;
            let p_parOinpar:number=readline.questionInt ('Ingrese PAR (1) o IMPAR (2) o Pasar (3): ');
            switch(p_parOinpar) {
                case 1:
                    parOinpar = "PAR";
                    break;
                case 2:
                    parOinpar = "IMPAR";
                    break;
                case 3:
                    parOinpar = undefined;
                    break;
                default:
                    console.log("El valor Ingresado es Invalido, no se jugara por este Item")
                    break;
            }

        //    if (parOinpar===""){
        //        parOinpar = undefined;
        //    }
            let docena :string| undefined= undefined;
            let p_docena:number=readline.questionInt('Ingrese 1ra Docena (1), 2da Docena (2) o 3ra Docena (3), o Pasar (4): ');
            switch (p_docena) {
                case 1:
                    docena = "1ra Docena";
                    break;
                case 2:
                    docena = "2da Docena";
                    break
                case 3:
                    docena = "3da Docena";
                    break;
                case 4:
                    docena = undefined;
                    break;
                default:
                    console.log("El valor Ingresado es Invalido, no se jugara por este Item")
                    break; 
            }
        //    if (docena===""){
        //        docena = undefined;
        //    }
            let altoObajo:string | undefined=undefined;
            let p_altoObajo:number =readline.questionInt('Apostar a Numero ALTO (1) o Numero BAJO(2), Pasar (3): ');
            switch(p_altoObajo){
                case 1:
                    altoObajo = "Numero ALTO";
                    break;
                case 2:
                    altoObajo = "Numero BAJO";
                    break;
                case 3:
                    altoObajo = undefined;
                    break;
                default:
                    console.log("El valor Ingresado es Invalido, no se jugara por este Item")
                    break; 
            }
        //    if (altoObajo===""){
        //        altoObajo = undefined;
        //    }

            let turningTurnOne: TurningTurn = new TurningTurn(countTurns+1,newCasino,rouletteOne,playerOne,value,pleno,color,parOinpar,docena,altoObajo)
            turningTurnOne.turning()
            console.log("----------------------------------------------------------------")
            subMenuRoulette()
            //callGame(3)
            //playGame(3,value);
            break;
        case 2:
            gameInformation(3);
            callGame(3);
        break;
    }
}
function subMenuRoulette():void{
    console.log('1: JUGAR \n2: COBRAR Y SALIR \n3: Volver al menú anterior');
    let gameOption:number=readline.questionInt();
        switch(gameOption){
            case 1:
                rouletteMenu(1)
                break;
            case 2:
                console.log ("----------------------------------------------------------------");
                console.log (`Su saldo actual es de: ${playerOne.getFoundsAvailable()}`);
                console.log ("----------------------------------------------------------------");
                //console.log(`Se retiró con ${founds} creditos.`);
                break;
            case 3:
                games();
                break;
            default:
                console.log(` -- El número ingresado es incorrecto ingrese un número valido ---`);
                subMenuRoulette();
            }
    }