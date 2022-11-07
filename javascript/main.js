"use strict";
exports.__esModule = true;
exports.welcome = void 0;
var reelSlot_1 = require("./class/reelSlot");
var roulette_1 = require("./class/roulette");
var casino_1 = require("./class/casino");
//Modulos
var fs = require("fs");
var readline = require('readline-sync');
var information = fs.readFileSync();
var clasificationText = information.split('\\');
//Instancias tragamonedas
var reelSlotBet = [5, 10, 15, 20];
var reelSlotOne = new reelSlot_1.ReelSlot(1001, reelSlotBet, "Animal", 9, 20, 3, 10000);
var reelSlotList = [reelSlotOne];
//Instancia ruleta
var countTurns = 0;
var numberRed = new Array(1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36);
var rouletteOne = new roulette_1.Roulette(1, numberRed, 0);
var rouletteList = [rouletteOne];
//Instancia casino
var newCasino = new casino_1.Casino('Atlanta', progressiveSlotList, reelSlotList, rouletteList, 500000);
//Informacion del casino
function welcome() {
    gameInformation(0);
    newPlayer();
    console.log("Bienvenido ".concat(playerOne.getName(), "."));
    main();
}
exports.welcome = welcome;
/* Funcionalidades de tragamonedas tradicional */
function reelSlotMenu(option) {
    switch (option) {
        case 0:
            games();
            break;
        case 1:
            var value = readline.questionInt('Ingrese apuesta ( 5 - 10 - 15 - 20 ): ');
            if (reelSlotOne.verifyBet(value)) {
                playGame(1, value);
            }
            subMenuReel();
            break;
        case 2:
            gameInformation(1);
            callGame(1);
            break;
    }
}
function subMenuReel() {
    console.log('1: JUGAR \n2: MULTIPLICAR JUGADAS \n3: COBRAR Y SALIR');
    var gameOption = readline.questionInt();
    switch (gameOption) {
        case 1:
            reelSlotMenu(1);
            break;
        case 2:
            var times = readline.questionInt('Ingrese la cantidad de repeticiones:');
            var value = readline.questionInt('Ingrese su apuesta ( 5 - 10 - 15 - 20 ): ');
            if (reelSlotOne.verifyBet(value)) {
                replayGame(1, times, value);
            }
            subMenuReel();
            break;
        case 3:
            console.log("".concat(playerOne.getName(), " se retir\u00F3 con ").concat(playerOne.getFoundsAvailable(), " cr\u00E9ditos."));
            break;
        default:
            console.log(" -- El n\u00FAmero ingresado es incorrecto ingrese un n\u00FAmero valido ---");
            subMenuReel();
    }
}

/* Funcionalidades de ruleta */
function rouletteMenu(option) {
    switch (option) {
        case 0:
            games();
            break;
        case 1:
            var value = readline.questionInt('Ingrese su apuesta: ');
            while (value > playerOne.getFoundsAvailable()) {
                console.log("Fondos Insuficientes");
                value = readline.questionInt('Ingrese su apuesta nuevamente: ');
            }
            var pleno = readline.questionInt('Ingrese Numero entre 1 y 36 para PLENO: ');
            while (pleno < 1 || pleno > 36) {
                pleno = readline.questionInt('Ingrese Numero entre 1 y 36 para PLENO: ');
            }
            var color = undefined;
            var p_color = readline.questionInt('Ingrese Color para Jugar, Para ROJO (1), para NEGRO (2) o Pasar (3): ');
            switch (p_color) {
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
                    console.log("El valor Ingresado es Invalido, no se jugara por este Item");
                    break;
            }
            var parOinpar = undefined;
            var p_parOinpar = readline.questionInt('Ingrese PAR (1) o IMPAR (2) o Pasar (3): ');
            switch (p_parOinpar) {
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
                    console.log("El valor Ingresado es Invalido, no se jugara por este Item");
                    break;
            }
            //    if (parOinpar===""){
            //        parOinpar = undefined;
            //    }
            var docena = undefined;
            var p_docena = readline.questionInt('Ingrese 1ra Docena (1), 2da Docena (2) o 3ra Docena (3), o Pasar (4): ');
            switch (p_docena) {
                case 1:
                    docena = "1ra Docena";
                    break;
                case 2:
                    docena = "2da Docena";
                    break;
                case 3:
                    docena = "3da Docena";
                    break;
                case 4:
                    docena = undefined;
                    break;
                default:
                    console.log("El valor Ingresado es Invalido, no se jugara por este Item");
                    break;
            }
            //    if (docena===""){
            //        docena = undefined;
            //    }
            var altoObajo = undefined;
            var p_altoObajo = readline.questionInt('Apostar a Numero ALTO (1) o Numero BAJO(2), Pasar (3): ');
            switch (p_altoObajo) {
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
                    console.log("El valor Ingresado es Invalido, no se jugara por este Item");
                    break;
            }
            //    if (altoObajo===""){
            //        altoObajo = undefined;
            //    }
            var turningTurnOne = new TurningTurn_1.TurningTurn(countTurns + 1, newCasino, rouletteOne, playerOne, value, pleno, color, parOinpar, docena, altoObajo);
            turningTurnOne.turning();
            console.log("----------------------------------------------------------------");
            subMenuRoulette();
            //callGame(3)
            //playGame(3,value);
            break;
        case 2:
            gameInformation(3);
            callGame(3);
            break;
    }
}
function subMenuRoulette() {
    console.log('1: JUGAR \n2: COBRAR Y SALIR \n3: Volver al menú anterior');
    var gameOption = readline.questionInt();
    switch (gameOption) {
        case 1:
            rouletteMenu(1);
            break;
        case 2:
            console.log("----------------------------------------------------------------");
            console.log("Su saldo actual es de: ".concat(playerOne.getFoundsAvailable()));
            console.log("----------------------------------------------------------------");
            //console.log(`Se retiró con ${founds} creditos.`);
            break;
        case 3:
            games();
            break;
        default:
            console.log(" -- El n\u00FAmero ingresado es incorrecto ingrese un n\u00FAmero valido ---");
            subMenuRoulette();
    }
}
