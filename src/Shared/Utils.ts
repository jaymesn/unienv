/*  if no default start value 1 provided and will be used*/
export const Names = {
    month:[ "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December" ],
    day:["Monday ","Tuesday ","Wednesday ","Thursday ","Friday ","Saturday ","Sunday "]
}
export const getDayNum = (week,day) => ( (week-1)*7 + day );

export function getNumberEnding(){

        // [ (new Date).getDate().toString().length ]
        let number =  (new Date).getDate();

        if( [1,21,31].includes(number) ){       // selects for numbers that end in "st" ie Monday,January 1st
            return "st";

        }else if( [2,22,32].includes(number) ){ // selects for numbers that end in "nd" ie Monday,January 2nd
            return "nd";

        }else if( [3,23,33].includes(number) ){ // selects for numbers that end in "rd" ie Monday,January 3rd 
            return "rd";

        }else if( range(20,4).includes(number) || range(30,24).includes(number) ){
            return "th";

        }else {
            return "ERROR";

        }
        

    }
/* 1 - 12 */
export function daysInMonth(month:number){

    if( [1,3,5,7,8,10,12].includes(month) ){
        return 31

    }else if( [4,6,9,11].includes(month) ){
        return 30

    }else if (month === 2){
        let year = (new Date).getFullYear();
        if ( (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){ // checks to see if th years a leap year
            return 29

        }else {
            return 28
        }
    }
}

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