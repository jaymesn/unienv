/*  if no default start value 1 provided and will be used*/

export function range(Stop:number,Start?:number):Array<number>{
    let arr = [];
    if(Start === undefined){
        Start = 1; 
    }
    for(let i = Start;i<Stop+1;i++){
        arr.push(i);
    }
    return arr
}