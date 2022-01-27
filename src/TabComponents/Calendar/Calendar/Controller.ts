import type { 
    AlarmsType,
    Alarms,AlarmsJSON, 
    DayAlarms, DayAlarmsJSON,
    Reminder, YearAlarms,MonthAlarms, 
    CalendarStateObject, CalendarState
} from "./Types"

import type { ComponentSettings } from "../../Types.d"
import { dateToDayNum, getDaysInMonth, range } from "../../../Shared/Utils"; 
import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

export const state:CalendarStateObject = {
    alarms:writable(["all","static"])
}; 
export class Controller implements ComponentSettings {
    private alarms:Alarms
    private alarmAutoSave:CalendarState
    public debug:boolean
    public settings
    //do not update state in a ASYNC function with i could add rustlike rule to state that u
    //do that and the app stops syncing its dates correctly

    constructor(link:string){
        let localSettings = localStorage.getItem("settings");
        state.alarms.subscribe((newState:CalendarState) => {

        });

        this.debug = false;
        this.importAlarms(link).then(alarms=>{
            this.alarms = alarms;
            state.alarms.set(["all","import"]);
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
        let data = new Date()

        state.alarms.set([day,"update"])
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
                            return `day has no alarms ` 
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
    


    UnSerializeAlarms(data:AlarmsJSON):Alarms{
        let data_uninit = data;
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
    
    SerializeAlarms(data:Alarms):AlarmsJSON{
        let data_uninit:AlarmsJSON = [];
        [...data].forEach(item=>{
            let yearAlarms_uninit:YearAlarms<DayAlarmsJSON>={};
            let [yearNum,yearAlarms] = item;
            range(12).forEach(monthNum=>{
                let monthAlarms_uninit:MonthAlarms<DayAlarmsJSON> ={};
                let monthAlarms = yearAlarms[monthNum];
                if(monthAlarms){
                    range( getDaysInMonth(monthNum) ).forEach(dayNum => {
                        let dayAlarms = monthAlarms[dayNum]
                        console.log(dayNum,dayAlarms);
                        if(dayAlarms){
                            let dayAlarms_uninit:DayAlarmsJSON = []  ;
                            [...dayAlarms].forEach(reminder => dayAlarms_uninit.push(reminder) )
                            monthAlarms_uninit[monthNum] =  dayAlarms_uninit;
                        }
                    })
                    yearAlarms_uninit[monthNum] = monthAlarms_uninit;
                }

            })
            data_uninit.push([yearNum,yearAlarms_uninit])
        })
        return data_uninit;

    }

    async importAlarms(URL:string):Promise<Alarms>{
        let data_uninit:AlarmsJSON = await fetch(URL).then(string=>string.json());
        let data_init = this.UnSerializeAlarms(data_uninit);
        return data_init;

   }
}