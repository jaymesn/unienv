import type { 
    YearAlarms,YearAlarmsJSON,
    MonthAlarms,MonthAlarmsJSON,
    DayAlarms,DayAlarmsJSON,
    WSAlarms,WSAlarmsJSON,
    Reminder,
    CalendarState,
    CalendarStateObject,
} from "./Types"

import type { ComponentSettings } from "../../Types.d"
import { dateToDayNum, getDaysInMonth, range } from "../../../Shared/Utils"; 
import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

export const state:CalendarStateObject = {
    alarms:writable(["all","static"])
}; 
export class Controller implements ComponentSettings {
    private alarms:YearAlarms
    private alarmCalState:Writable<CalendarStateObject>
    public debug:boolean
    public settings
    //do not update state in a ASYNC function with i could add rustlike rule to state that u
    //do that and the app stops syncing its dates correctly

    constructor(link:string){
        let localSettings = localStorage.getItem("settings");
        this.debug = false;
        this.importAlarms(link).then(alarms=>{
            this.alarms = alarms;
            state.alarms.set(["all","import"]);
        });
        
    }

    setAlarm(year:number,month:number,day:number,wsName:string,reminder:Reminder,index?:number):void {
        let wsReminders = this.alarms.get(year)?.get(month)?.get(day)?.get(wsName)
        if(wsReminders){
            if(index){
                let newWsReminders = 
                [
                    ...wsReminders.slice(index),
                    reminder,
                    ...wsReminders.slice(index+1,wsReminders.length)
                ]
               this.alarms.get(year).get(month).get(day).set(wsName,newWsReminders);
            }else{
                wsReminders.push(reminder)
                this.alarms.get(year).get(month).get(day).set(wsName,wsReminders);
            }
        }
        state.alarms.set([day,"update"])
    }
    
    
    getAlarm<T>(year?:number,month?:number,day?:number,wsName?:string,reminderName?:string|number):T{

        // find out where the check is going wrong over here
        // * and u didn't debug as u built this too!

        let checkArray = [
            typeof year === "number",
            typeof month === "number",
            typeof day === "number",
            typeof wsName === "number",
            (typeof reminderName === "string" || typeof reminderName === "number") ? typeof reminderName : false
        ]

        const findName = (reminderArr:Reminder[]):Reminder|undefined => {
            let len = reminderArr.length;
            for( let i = 0 ; i < len ; i++ ){
                if(reminderArr[i].name === reminderName){
                    return reminderArr[i]

                }else {
                    return

                }
            }
        }

        switch (checkArray) {

            case [true,true,true,true,"string"]:
                return findName(this.alarms.get(year)?.get(month)?.get(day)?.get(wsName)) as unknown as T;
                break;

            case [true,true,true,true,"number"]:
                return this.alarms.get(year)?.get(month)?.get(day)?.get(wsName)[reminderName] 
                break;

            case [true,true,true,true,false]:
                return this.alarms.get(year)?.get(month)?.get(day)?.get(wsName) as unknown as T;
                break; 

            case [true,true,true,false,false]:
                return this.alarms.get(year)?.get(month)?.get(day) as unknown as T;
                break;

            case [true,true,false,false,false]:

                return this.alarms.get(year)?.get(month) as unknown as T;
                break;

            case [true,false,false,false,false]:
                return this.alarms.get(year) as unknown as T;
                break;

            case [false,false,false,false,false]:
                return this.alarms as unknown as T;
                break;

            default:
                console.log("fail");
                return; 
                break;
        }


    }
    
     

    UnSerializeAlarm(yearAlarmsJSON:YearAlarmsJSON):YearAlarms{
        // left this unsafe since its unconventional 
        // when done safely
       
        let yearAlarms_uninit:[number,MonthAlarms][] = yearAlarmsJSON.map(Entry=>{

            let [yearNum,monthAlarmsJSON] = Entry; 
            let monthAlarms_uninit:[number,DayAlarms][] = monthAlarmsJSON.map(Entry => {

                let [ monthNum,dayAlarmsJson] = Entry;
                let dayAlarms_uninit:[number,WSAlarms][] = dayAlarmsJson.map(Entry=>{

                    let [dayNum,wsAlarmsJson] = Entry;
                    return [dayNum, new Map(wsAlarmsJson)];

                })
                return [monthNum,new Map(dayAlarms_uninit)];

            }) 
            return [yearNum,new Map(monthAlarms_uninit)];
        })
        

        
        return new Map(yearAlarms_uninit)

        

        "0"
        "010"
        "01010"

        /* 
        go from entries to maps
        so  . . . 
        [
            [ year , [
                [ month , [
                    [ day , [
                        [ wsName , string[] ]
                    ]]
                ] ]
            ] ]
        ]

        to . . . 

        Map<year,
            Map<month,
                Map<day,
                    Map< wsName , string[] >
                >
            >
        >

        */



    }

    async importAlarms(URL:string):Promise<YearAlarms>{
        let data_uninit:YearAlarmsJSON = await fetch(URL).then(string=>string.json());
        let data_init = this.UnSerializeAlarm(data_uninit);
        return data_init;

   }
}