/*
all commetn lines that start with //** needs to have their types replaced by 
the type actually described in the comment
*/
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


type AlignHorizontal = "L"|"M"|"R";
type AlignVertical = "T" |"M"|"B";

type FormatOptions = 
    "F"| // "F" means fill available space ASSIGNEND BY THE PARENT 
    "C"  // "C" size of content (when smaller than available space)
    ; 
type SizeNumberFormat = number|FormatOptions;

interface Vec2<T1,T2> { x:T1, y:T2 }
interface PosFormat extends Vec2<AlignHorizontal,AlignVertical>{};
interface SizeFormat extends Vec2<SizeNumberFormat,SizeNumberFormat>{};

interface GridVec2{  amount:number,  size:SizeNumberFormat  }
interface GridFormat {  
    colums:GridVec2,  
    rows:GridVec2
    custom:Array<{ row:number, colum:number , size:SizeFormat }> // allows for custom sizing of element selected by ROW and COLUM
}
interface Workspace {
    rootContainer:WSContainer
} 

interface Note {

}

interface ThoughtGraph {
    layout:{
        tree:"spread"|"tiled"|"board"
    }

}
interface WSCdata<T> {
    "generic":T
}
interface WSCchild {
    gridLayout:{
        rows:{
            amount:number
            size:string|string[]
        }
        columns:{
            amount:number
            size:string|string[]
        }
    }
    items:Map<string,WSContainer> 
}

interface WSContainer {   
    title?:string
    discription?:any //** THIS AMOUNTS TO A REACTIVE TEXT VALUE 
    component:{
        type:"TG"|"Note"|"Root"
        data:WSCdata //** THIS IS THE SVELTE APP data specific to each type 
    }

    child?:WSCchild
    // you order the components by putting x-index as char 0 and y-index as char 1 



}

export type WorkspaceData = Map<workspaceName,Workspace>

type workspaceName = string;

type Reminder = {

	/* WS:[name]:[component_name]-[state] */
    /* [state] = focused,hidden or unfocused */

    /* TG:[name]:[node_type]-[state] */
    /* [state] = focused,hidden or unfocused */

    pathInWorkspace:string,
    name:string,
    icon:string|icon, //** PUT THE TYPE OF AN SVG IN HERE
};
type icon = any;
export interface NavItem { icon:string, title:string }

export type Data = {

    Workspace:WorkspaceData,
    Calendar:Alarms

    selected:number

        
}


