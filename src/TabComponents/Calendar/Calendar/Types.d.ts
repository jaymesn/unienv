//                    is the alarm           the actual state
type CalendarState = ["all"|number,"static"|"update"|"import"]

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


export type WSAlarms    = Map<string,Reminder[]>;
export type DayAlarms   = Map<number,WSAlarms>; 
export type MonthAlarms = Map<number,DayAlarms>;
export type YearAlarms  = Map<number,MonthAlarms>;

export type WSAlarmsJSON    = [string,Reminder[]][]
export type DayAlarmsJSON   = [number,WSAlarmsJSON][] 
export type MonthAlarmsJSON = [number,DayAlarmsJSON][]
export type YearAlarmsJSON  = [number,MonthAlarmsJSON][]

