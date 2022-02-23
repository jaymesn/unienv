import type { 
    YearAlarms,YearAlarmsJSON,
    MonthAlarms,MonthAlarmsJSON,
    DayAlarms,DayAlarmsJSON,
    WSAlarms,WSAlarmsJSON,
    Reminder,
    CalendarState,
    CalendarStateObject,
} from "./Types"

import { dateToDayNum, getDaysInMonth, range } from "../../../Utils"; 
import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type { Data as DataClass} from "./Data";
import { Data } from "./Data";

export class Controller {
    public debug:boolean
    public data:DataClass

    //do not update state in a ASYNC function with i could add rustlike rule to state that u
    //do that and the app stops syncing its dates correctly

    constructor(data:DataClass){
        this.debug = false;

        (window as any).state = this.data.state
        this.data = data;

        

       
    }

    setAlarm(year:number,month:number,day:number,wsName:string,reminder:Reminder,index?:number):void {
        /*
            makes it so that when u set a reminder for a . .     
            year,month,day or wsName that doesn't exist

            a new one is created
        */


        let wsReminders = this.data.alarms.get(year)?.get(month)?.get(day)?.get(wsName)
        if(wsReminders){
            if(index){
                let newWsReminders = 
                [
                    ...wsReminders.slice(index),
                    reminder,
                    ...wsReminders.slice(index+1,wsReminders.length)
                ]
               this.data.alarms.get(year).get(month).get(day).set(wsName,newWsReminders);
            }else{
                wsReminders.push(reminder)
                this.data.alarms.get(year).get(month).get(day).set(wsName,wsReminders);
            }
        }
        this.data.state.alarms.set({"affected":day , "action":"update"})
    }
    
    
    getAlarm<T>(year?:number,month?:number,day?:number,wsName?:string,reminderName?:string|number):T{
        // find out where the check is going wrong over here
        // * and u didn't debug as u built this too!

        let checkString = 
            `${typeof year === "number"}` + // true
            `${typeof month === "number"}` + // ture
            `${typeof day === "number"}` + // true
            `${typeof wsName === "string"}` + //true
            `${
                (typeof reminderName === "string" || typeof reminderName === "number") ? 
                    typeof reminderName : false}` // true | false | number


        const findName = (reminderArr:Reminder[]):Reminder|undefined => {
            let len = reminderArr.length;
            for( let i = 0 ; i < len ; i++ ){
                if(reminderArr[i].name === reminderName){
                    return reminderArr[i]
                }
            }
        }
        switch ( checkString ) {
            case "truetruetruetruestring":
                return findName(this.data.alarms.get(year)?.get(month)?.get(day)?.get(wsName)) as unknown as T;
                break;

            case "truetruetruetruenumber":
                return this.data.alarms.get(year)?.get(month)?.get(day)?.get(wsName)[reminderName] 
                break;

            case "truetruetruetruefalse":
                return this.data.alarms.get(year)?.get(month)?.get(day)?.get(wsName) as unknown as T;
                break;

            case "truetruetruefalsefalse":
                return this.data.alarms.get(year)?.get(month)?.get(day) as unknown as T;
                break;

            case "truetruefalsefalsefalse":
                return this.data.alarms.get(year)?.get(month) as unknown as T;
                break;

            case "truefalsefalsefalsefalse":
                return this.data.alarms.get(year) as unknown as T;
                break;

            case "falsefalsefalsefalsefalse":
                return this.data.alarms as unknown as T;
                break;

            default:
                console.log("incorrect parameters:");
                console.log(checkString)
                return; 
                break;
        }


    }
}