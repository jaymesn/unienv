export const Names = {
    month:[ "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December" ],
    day:["Sunday","Monday ","Tuesday ","Wednesday ","Thursday ","Friday ","Saturday "]
}


// determines what day number(1-7) a given number n maps to
export const dateToDayNum= (n) => (n % 7 === 0) ? 7 : n - (( Math.floor(n / 7) ) * 7)

// takes the weekNum and dayNum of month and converts it to a dateNum
export const getDayNum = (week:number,day:number) => ( (week-1)*7 + day );

export function getNumEnd(number?:number){

        // [ (new Date).getDate().toString().length ]
        if(!number){number = (new Date).getDate()}

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
// 1 - 12  take a month number and outputs how many days it has 
export function getDaysInMonth(month:number){

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

/*  if no default start value 1 provided and will be used*/

// generates a range from 1 to a specified stop value with an optional starting 
export function range(Stop:number,Start?:number,inc?:number):Array<number>{
    let arr = [];
    if(Start === undefined){
        Start = 1; 
    }
    if(inc === undefined){
        inc = 1;
    }
    for(let i = Start;i<Stop+inc;i++){
        arr.push(i);
    }
    return arr
}
(window as any).range = range;