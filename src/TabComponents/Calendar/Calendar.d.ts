type workspaceName = string;

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


type Alarms = Map<number,YearAlarms>

type day31type = {1?:DayAlarms,2?:DayAlarms,3?:DayAlarms,4?:DayAlarms,5?:DayAlarms,6?:DayAlarms,7?:DayAlarms,8?:DayAlarms,9?:DayAlarms,10?:DayAlarms,11?:DayAlarms,12?:DayAlarms,13?:DayAlarms,14?:DayAlarms,15?:DayAlarms,16?:DayAlarms,17?:DayAlarms,18?:DayAlarms,19?:DayAlarms,20?:DayAlarms,21?:DayAlarms,22?:DayAlarms,23?:DayAlarms,24?:DayAlarms,25?:DayAlarms,26?:DayAlarms,27?:DayAlarms,28?:DayAlarms,29?:DayAlarms,30?:DayAlarms,31?:DayAlarms} // jan
type day30type = {1?:DayAlarms,2?:DayAlarms,3?:DayAlarms,4?:DayAlarms,5?:DayAlarms,6?:DayAlarms,7?:DayAlarms,8?:DayAlarms,9?:DayAlarms,10?:DayAlarms,11?:DayAlarms,12?:DayAlarms,13?:DayAlarms,14?:DayAlarms,15?:DayAlarms,16?:DayAlarms,17?:DayAlarms,18?:DayAlarms,19?:DayAlarms,20?:DayAlarms,21?:DayAlarms,22?:DayAlarms,23?:DayAlarms,24?:DayAlarms,25?:DayAlarms,26?:DayAlarms,27?:DayAlarms,28?:DayAlarms,29?:DayAlarms,30?:DayAlarms} // jan
type day29type = {1?:DayAlarms,2?:DayAlarms,3?:DayAlarms,4?:DayAlarms,5?:DayAlarms,6?:DayAlarms,7?:DayAlarms,8?:DayAlarms,9?:DayAlarms,10?:DayAlarms,11?:DayAlarms,12?:DayAlarms,13?:DayAlarms,14?:DayAlarms,15?:DayAlarms,16?:DayAlarms,17?:DayAlarms,18?:DayAlarms,19?:DayAlarms,20?:DayAlarms,21?:DayAlarms,22?:DayAlarms,23?:DayAlarms,24?:DayAlarms,25?:DayAlarms,26?:DayAlarms,27?:DayAlarms,28?:DayAlarms,29?:DayAlarms} 
export interface YearAlarms {
    1?:day31type, // jan
    2?:day29type, // feb
    3?:day31, // mar
    4?:day30type,  // april
    5?:day31type,// may
    6?:day30type,                // jun
    7?:day31type, // jul
    8?:day31type, // aug
    9?:day30type,               // sep
    10?:day31type, // oct
    11?:day30type,               // nov
    12?:day31type, // dec 
}

type DayAlarms = Map<workspaceName,Array<Reminder>>; 


