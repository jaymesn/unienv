import { writable } from "svelte/store";
import type { 
    YearAlarms,YearAlarmsJSON,
    MonthAlarms,MonthAlarmsJSON,
    DayAlarms,DayAlarmsJSON,
    WSAlarms,WSAlarmsJSON,
    Reminder,
    CalendarState,
    CalendarStateObject,
} from "./Types"

type fileOptions = {
    "loc": "localStorage"|"network"|"app", // where the resource is coming from
    "name":string,                  // link to the file/key for localStorage 
    "type":"JSON"                   // file type( for when we use other stuff like .jmul)
                                    // or when we want dereferenced data from AppData
}

export class Data  {
    public state:CalendarStateObject;
    public alarms:YearAlarms;
    constructor(initFileOptions){
        this.alarms = new Map();
        this.state = { 
            alarms:writable( { "affected":"all", "action":"init" }) 
        }; 
        if(initFileOptions){
            this.load(initFileOptions);
        }
    }
    save(opts:fileOptions){
        switch (opts.loc){
            case "localStorage":
                break;
            case "network":
                break;
            default:
                break;
        }
    }
    load(opts:fileOptions){
        switch (opts.loc) {
            case "localStorage":
                
                break;
            case "network":
                let data_promise = this.networkLoad(opts.name)
                data_promise.then(data_uninit=> {
                    this.alarms = this.UnSerializeAlarm(data_uninit);
                    this.state.alarms.set({ "affected":"all" , "action":"import" })
                })

                break;

            default:

                break;
        }

    }
        
    async networkLoad<T>(URL:string):Promise<YearAlarmsJSON>{
        return await fetch(URL).then(string=>string.json());
    }
     

    UnSerializeAlarm(yearAlarmsJSON:YearAlarmsJSON):YearAlarms{

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




}
