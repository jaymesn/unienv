// is the alarm           the actual state

// uninit 
// means that the controller will not run methods correctly 
// because a mutable change has corrupted it IE: bad JSON imports and other errors 

// init 
// means that methods will run but data isn't present 

// static means,
// and is self defining in that it just is the 
// state of controller when nothing is happending or when everything stays static

// update 
// means a reminder or other mutable operation occured in the controller class

// import 
// means some Controller data type was unserialzed SUCCEFULLY 

// PS: feel free to change this as demands surface

type CalendarState = {
    affected:"all"|number
    action:"uninit"|"init"|"static"|"update"|"import"
}

import type { Writable } from "svelte/store";
export interface CalendarStateObject {
    alarms:Writable<CalendarState>
}

type Reminder = {

	/* WS:[name]:[component_name]-[state] */
    /* [state] = focused,hidden or unfocused */

    /* TG:[name]:[node_type]-[state] */
    /* [state] = focused,hidden or unfocused */
    pathInWorkspace:string,
    name:string,
    time:string,     /* in HH-MM format */
    icon:string|icon, 
    duration?:string,/* in HH-MM format */


};

type icon = any;

                            // ws
export type WSAlarms    = Map<string,Reminder[]>;

                              // day
export type DayAlarms   = Map<number,WSAlarms>; 

                              // month
export type MonthAlarms = Map<number,DayAlarms>;

                              // year
export type YearAlarms  = Map<number,MonthAlarms>;

export type WSAlarmsJSON    = [string,Reminder[]][]
export type DayAlarmsJSON   = [number,WSAlarmsJSON][] 
export type MonthAlarmsJSON = [number,DayAlarmsJSON][]
export type YearAlarmsJSON  = [number,MonthAlarmsJSON][]

