import type { 
    AlarmsType,
    Alarms,AlarmsJSON, 
    DayAlarms, DayAlarmsJSON,
    Reminder, YearAlarms,MonthAlarms, 
} from "./Types"

import { getDaysInMonth, range } from "../../../Shared/Utils"; 
import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
export class Controller {
    public alarms:Alarms
    public debug:boolean
    public listeners:{
        alarms:Array<()=>void>
    }
    private fireListeners:()=>void

    //do not update state in a ASYNC function with i could add rustlike rule to state that u
    //do that and the app stops syncing its dates correctly
    public state:Writable<"loaded"|"loading"|"updating"|"updated">

    constructor(link:string){
        
        this.listeners = {alarms:[]};
        this.fireListeners = () =>{ this.listeners.alarms.forEach(listener=>listener()) }
        this.debug = false;
        this.importAlarms(link).then(alarms=>{
            this.alarms = alarms;
            this.fireListeners()
        });
        
    }

    setReminder(year:number,month:number,day:number,wsName:string,reminder:Reminder,index?:number):void{
        if(this.alarms.get(year)){
            let dayAlarms = this.getAlarm(year,month,day);
            if(typeof dayAlarms !== "string"){
                let wsAlarms = dayAlarms.get(wsName)
                if(wsAlarms){ // when there is a ws u put the reminder in
                    if(index){// when there a specifed index
                        let half1 = wsAlarms.slice(0,index)
                        let half2 = wsAlarms.slice(index)
                        wsAlarms = [...half1,reminder,...half2];
                    }else{   //  whern there isn't
                        wsAlarms.push(reminder)
                    }
                }else {      // we make a remidner array if the specified 
                            //workspace doesn't already exist instead of erroring out
                    wsAlarms = [reminder] 
                }
                dayAlarms.set(wsName,wsAlarms)
            }else {
                dayAlarms = new Map([ [ wsName,[reminder] ] ]); 
            }
            let yearlyAlarms = this.alarms.get(year);
            yearlyAlarms[month][day] = dayAlarms;
            this.alarms.set(year,yearlyAlarms)
        }else { // if their are no alarms then we add a year and the alarm
            let yearAlarms:YearAlarms<DayAlarms> = {} 
            yearAlarms[month] = new Map([ [ wsName,[reminder] ] ])
            this.alarms.set(year,yearAlarms)
        }
        this.fireListeners()
    }
    
    
    getAlarm(year:number,month?:number,day?:number,wsName?:string,reminder?:string|number):AlarmsType{
        let yearlyAlarms = this.alarms.get(year)
        if(yearlyAlarms){
            if(month){
                let monthlyAlarms:MonthAlarms<DayAlarms> = yearlyAlarms[month];
                if(monthlyAlarms){
                    if(day){
                        let dailyAlarms:DayAlarms|undefined = monthlyAlarms[day]
                        if(dailyAlarms){
                            if(wsName){
                                let wsAlarms = dailyAlarms.get(wsName)
                                if(wsAlarms){
                                    if(reminder !== undefined){
                                        let returnAlarm:Reminder;
                                        if(typeof reminder === "string"){
                                            wsAlarms.forEach(alarm =>{
                                                alarm.name === reminder ? returnAlarm = alarm : "alarm not present"
                                            })
                                        }else{
                                           wsAlarms[reminder] ? returnAlarm = wsAlarms[reminder] : "alarm not present"
                                        }
                                        return returnAlarm

                                    }else{
                                        return wsAlarms 
                                    }
                                }else{
                                    "workspace has no alarms"
                                }

                            }else{
                                return dailyAlarms
                            }

                        }else {
                            return "day has no alarms"
                        }
                    }else {
                        return monthlyAlarms
                    }
                }else {
                    return "month has no alarms"
                }

            }else {
                return yearlyAlarms 
            }

        }else {
            return "year has no alarms"
        }
    }
    




    async importAlarms(URL:string):Promise<Alarms>{
        let data_uninit:AlarmsJSON = await fetch(URL).then(string=>string.json());
        let AlarmData:Alarms = new Map();


        // looping through each YearAlarm
        data_uninit.forEach(item => {    
            let [year,yearAlarmsJSON] = item;
            let yearAlarms:YearAlarms<DayAlarms>={}; 

            range(12).forEach(monthNumber => {
            
                // first check to see if the month has alarms
                if(yearAlarmsJSON[monthNumber]){

                    // we assign a object to put alarms in that month 
                    yearAlarms[monthNumber] = {};

                    range( getDaysInMonth(monthNumber) ).forEach(dayNumber => {

                        yearAlarms[monthNumber][dayNumber] = undefined;
                        if(yearAlarmsJSON[monthNumber][dayNumber]){
                        
                            //assign the iterable DayAlarmsJSON as the argument for a new DayAlarms
                            yearAlarms[monthNumber][dayNumber] = new Map(yearAlarmsJSON[monthNumber][dayNumber]);

                        }

                    })
                }else {
                    // since it doesn't , the alarms for the month is left undefined
                    yearAlarms[monthNumber] = undefined;
                }
            })
            AlarmData.set(typeof year === "string"? parseInt(year):year,yearAlarms);
            

        })
        return AlarmData;
    }
}