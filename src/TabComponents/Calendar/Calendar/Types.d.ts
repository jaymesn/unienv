

type Reminder = {

	/* WS:[name]:[component_name]-[state] */
    /* [state] = focused,hidden or unfocused */

    /* TG:[name]:[node_type]-[state] */
    /* [state] = focused,hidden or unfocused */

    pathInWorkspace:string,
    name:string,
    icon:string|icon, 
};
type icon = any;

type AlarmsJSON = [number,YearAlarms<DayAlarmsJSON>][]
type Alarms = Map<number,YearAlarms<DayAlarms>> 
type day31type<T> = {1?:T,2?:T,3?:T,4?:T,5?:T,6?:T,7?:T,8?:T,9?:T,10?:T,11?:T,12?:T,13?:T,14?:T,15?:T,16?:T,17?:T,18?:T,19?:T,20?:T,21?:T,22?:T,23?:T,24?:T,25?:T,26?:T,27?:T,28?:T,29?:T,30?:T,31?:T} // jan
type day30type<T> = {1?:T,2?:T,3?:T,4?:T,5?:T,6?:T,7?:T,8?:T,9?:T,10?:T,11?:T,12?:T,13?:T,14?:T,15?:T,16?:T,17?:T,18?:T,19?:T,20?:T,21?:T,22?:T,23?:T,24?:T,25?:T,26?:T,27?:T,28?:T,29?:T,30?:T} // jan
type day29type<T> = {1?:T,2?:T,3?:T,4?:T,5?:T,6?:T,7?:T,8?:T,9?:T,10?:T,11?:T,12?:T,13?:T,14?:T,15?:T,16?:T,17?:T,18?:T,19?:T,20?:T,21?:T,22?:T,23?:T,24?:T,25?:T,26?:T,27?:T,28?:T,29?:T} 
export type MonthAlarms<T> = day31type<T>|day30type<T>|day29type<T>
export interface YearAlarms<T> {
    1?:day31type<T>, // jan
    2?:day29type<T>, // feb
    3?:day31<T>, // mar
    4?:day30type<T>,  // april
    5?:day31type<T>,// may
    6?:day30type<T>,                // jun
    7?:day31type<T>, // jul
    8?:day31type<T>, // aug
    9?:day30type<T>,               // sep
    10?:day31type<T>, // oct
    11?:day30type<T>,               // nov
    12?:day31type<T>, // dec 
}

export type DayAlarms = Map<workspaceName,Array<Reminder>>; 
export type DayAlarmsJSON = [workspaceName,Array<Reminder>][];


