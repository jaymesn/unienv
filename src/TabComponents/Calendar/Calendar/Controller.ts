import type { 

    Alarms,AlarmsJSON, 
    DayAlarms, DayAlarmsJSON,
    Reminder,
    YearAlarms,MonthAlarms, 
} from "./Types"

import { getDaysInMonth, range } from "../../../Shared/Utils"; 

export class Controller {
    private alarms:Alarms
    public state:string

    constructor(){
       this.alarms = new Map();
        this.state = "Loading"
    }

    setReminder(year:number,month:number,day:number,wsName:string,reminder:Reminder,index?:number){
        if(this.alarms.get(year)){
            let dayAlarms = this.getDayAlarms(year,month,day);
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
                console.log(`year:${year},month:${month} or day:${day} `)
                return 
            }
            let yearlyAlarms = this.alarms.get(year);
            yearlyAlarms[month][day] = dayAlarms;
            this.alarms.set(year,yearlyAlarms)
        }else { // if their are no alarms then we add a year and the alarm
            let yearAlarms:YearAlarms<DayAlarms> = {} 
            yearAlarms[month] = new Map([ [ wsName,[reminder] ] ])
            this.alarms.set(year,yearAlarms)
        }
    }
    
    getDayAlarms(year:number,month:number,day:number):DayAlarms|string{
        let yearlyAlarms = this.alarms.get(year)
        if(yearlyAlarms){
            let monthlyAlarms:MonthAlarms<DayAlarms> = yearlyAlarms[month];
            if(monthlyAlarms){
                let dailyAlarms:DayAlarms|undefined = monthlyAlarms[day]
                if(dailyAlarms){
                    return dailyAlarms

                }else {
                    return "day has no alarms"
                }
            }else {
                return "month has no alarms"
            }

        }else {
            return "year has no alarms"
        }
    }
    




    async importString(URL:string):Promise<Alarms>{
        this.state = "Loading";
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
            AlarmData.set(year,yearAlarms);

        })
        this.state = "Loaded";
        return AlarmData;
    }
}