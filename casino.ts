import { ReelSlot } from './reelSlot';
import { Roulette } from './roulette';
export class Casino {
    private casinoName:string;
    private reelSlotList:ReelSlot[];
    private rouletteList:Roulette[];
    //private crapsList:Craps[];
    private treasury:number;

    public constructor(pName:string,pProgressiveSlotList:ProgressiveSlot[],pReelSlotList:ReelSlot[],pRoulleteList:Roulette[],/*pCrapsList:Craps[],*/pTreasury:number){
        this.casinoName=pName;
        this.reelSlotList=pReelSlotList;
        this.treasury=pTreasury;
        //this.roulleteList=pRoulleteList;
        //this.crapsList=pCrapsList;
        
    }
    public getCasinoName():string{
        return this.casinoName;
    }
    public setCasinoName(newName:string):void{
        this.casinoName=newName;
    }
    public getReelSlot(id:number):boolean{
        let aux=false;
            for(let i=0;i<this.reelSlotList.length;i++){
                if(id===this.reelSlotList[i].getId()){
                    aux=true;
                } 
            } if(aux){
                return true;
            }
                else {
                    throw Error(`No existe esta maquina en el casino`);
                } 
    }
    public getRoullete(id:number):boolean{
        let aux=false;
            for(let i=0;i<this.rouletteList.length;i++){
                if(id===this.rouletteList[i].getId()){
                    aux=true;
                } 
            } if(aux){
                return true;
            }
                else {
                    throw Error(`No existe esta maquina en el casino`);
                } 
    }
    
    /*public getCraps(id:number):boolean{
        let aux=false;
            for(let i=0;i<this.crapsList.length;i++){
                if(id===this.crapsList[i].getId()){
                    aux=true;
                } 
            } if(aux){
                return true;
            }
                else {
                    throw Error(`No existe esta maquina en el casino`);
                } 
    } */
    public getTreasury():number{
        return this.treasury;
    }
    public setTreasury(amount:number):void{
        if(amount<=0){
            this.treasury+=amount;
        } else {
            this.treasury-=amount;
        }
    }
}