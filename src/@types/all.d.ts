/* redo this so that the types corrospond better with the html
looping through the monthly keys
*/
type Alarms = Map<number,YearAlarms>
export interface YearAlarms {
    1?: {1?:{1?:DayAlarms,2?:DayAlarms,3?:DayAlarms,4?:DayAlarms,5?:DayAlarms,6?:DayAlarms,7?:DayAlarms,},2?:{8?:DayAlarms,9?:DayAlarms,10?:DayAlarms,11?:DayAlarms,12?:DayAlarms,13?:DayAlarms,14?:DayAlarms,},3?:{15?:DayAlarms,16?:DayAlarms,17?:DayAlarms,18?:DayAlarms,19?:DayAlarms,20?:DayAlarms,21?:DayAlarms,},4?:{22?:DayAlarms,23?:DayAlarms,24?:DayAlarms,25?:DayAlarms,26?:DayAlarms,27?:DayAlarms,28?:DayAlarms,},5?:{29?:DayAlarms,30?:DayAlarms,31?:DayAlarms,}}, // jan
    2?: {1?:{1?:DayAlarms,2?:DayAlarms,3?:DayAlarms,4?:DayAlarms,5?:DayAlarms,6?:DayAlarms,7?:DayAlarms,},2?:{8?:DayAlarms,9?:DayAlarms,10?:DayAlarms,11?:DayAlarms,12?:DayAlarms,13?:DayAlarms,14?:DayAlarms,},3?:{15?:DayAlarms,16?:DayAlarms,17?:DayAlarms,18?:DayAlarms,19?:DayAlarms,20?:DayAlarms,21?:DayAlarms,},4?:{22?:DayAlarms,23?:DayAlarms,24?:DayAlarms,25?:DayAlarms,26?:DayAlarms,27?:DayAlarms,28?:DayAlarms,},5?:{29?:DayAlarms,}},                             // feb
    3?: {1?:{1?:DayAlarms,2?:DayAlarms,3?:DayAlarms,4?:DayAlarms,5?:DayAlarms,6?:DayAlarms,7?:DayAlarms,},2?:{8?:DayAlarms,9?:DayAlarms,10?:DayAlarms,11?:DayAlarms,12?:DayAlarms,13?:DayAlarms,14?:DayAlarms,},3?:{15?:DayAlarms,16?:DayAlarms,17?:DayAlarms,18?:DayAlarms,19?:DayAlarms,20?:DayAlarms,21?:DayAlarms,},4?:{22?:DayAlarms,23?:DayAlarms,24?:DayAlarms,25?:DayAlarms,26?:DayAlarms,27?:DayAlarms,28?:DayAlarms,},5?:{29?:DayAlarms,30?:DayAlarms,31?:DayAlarms,}}, // mar
    4?: {1?:{1?:DayAlarms,2?:DayAlarms,3?:DayAlarms,4?:DayAlarms,5?:DayAlarms,6?:DayAlarms,7?:DayAlarms,},2?:{8?:DayAlarms,9?:DayAlarms,10?:DayAlarms,11?:DayAlarms,12?:DayAlarms,13?:DayAlarms,14?:DayAlarms,},3?:{15?:DayAlarms,16?:DayAlarms,17?:DayAlarms,18?:DayAlarms,19?:DayAlarms,20?:DayAlarms,21?:DayAlarms,},4?:{22?:DayAlarms,23?:DayAlarms,24?:DayAlarms,25?:DayAlarms,26?:DayAlarms,27?:DayAlarms,28?:DayAlarms,},5?:{29?:DayAlarms,30?:DayAlarms,}},               // apr
    5?: {1?:{1?:DayAlarms,2?:DayAlarms,3?:DayAlarms,4?:DayAlarms,5?:DayAlarms,6?:DayAlarms,7?:DayAlarms,},2?:{8?:DayAlarms,9?:DayAlarms,10?:DayAlarms,11?:DayAlarms,12?:DayAlarms,13?:DayAlarms,14?:DayAlarms,},3?:{15?:DayAlarms,16?:DayAlarms,17?:DayAlarms,18?:DayAlarms,19?:DayAlarms,20?:DayAlarms,21?:DayAlarms,},4?:{22?:DayAlarms,23?:DayAlarms,24?:DayAlarms,25?:DayAlarms,26?:DayAlarms,27?:DayAlarms,28?:DayAlarms,},5?:{29?:DayAlarms,30?:DayAlarms,31?:DayAlarms,}}, // may
    6?: {1?:{1?:DayAlarms,2?:DayAlarms,3?:DayAlarms,4?:DayAlarms,5?:DayAlarms,6?:DayAlarms,7?:DayAlarms,},2?:{8?:DayAlarms,9?:DayAlarms,10?:DayAlarms,11?:DayAlarms,12?:DayAlarms,13?:DayAlarms,14?:DayAlarms,},3?:{15?:DayAlarms,16?:DayAlarms,17?:DayAlarms,18?:DayAlarms,19?:DayAlarms,20?:DayAlarms,21?:DayAlarms,},4?:{22?:DayAlarms,23?:DayAlarms,24?:DayAlarms,25?:DayAlarms,26?:DayAlarms,27?:DayAlarms,28?:DayAlarms,},5?:{29?:DayAlarms,30?:DayAlarms}},                // jun
    7?: {1?:{1?:DayAlarms,2?:DayAlarms,3?:DayAlarms,4?:DayAlarms,5?:DayAlarms,6?:DayAlarms,7?:DayAlarms,},2?:{8?:DayAlarms,9?:DayAlarms,10?:DayAlarms,11?:DayAlarms,12?:DayAlarms,13?:DayAlarms,14?:DayAlarms,},3?:{15?:DayAlarms,16?:DayAlarms,17?:DayAlarms,18?:DayAlarms,19?:DayAlarms,20?:DayAlarms,21?:DayAlarms,},4?:{22?:DayAlarms,23?:DayAlarms,24?:DayAlarms,25?:DayAlarms,26?:DayAlarms,27?:DayAlarms,28?:DayAlarms,},5?:{29?:DayAlarms,30?:DayAlarms,31?:DayAlarms,}}, // jul
    8?: {1?:{1?:DayAlarms,2?:DayAlarms,3?:DayAlarms,4?:DayAlarms,5?:DayAlarms,6?:DayAlarms,7?:DayAlarms,},2?:{8?:DayAlarms,9?:DayAlarms,10?:DayAlarms,11?:DayAlarms,12?:DayAlarms,13?:DayAlarms,14?:DayAlarms,},3?:{15?:DayAlarms,16?:DayAlarms,17?:DayAlarms,18?:DayAlarms,19?:DayAlarms,20?:DayAlarms,21?:DayAlarms,},4?:{22?:DayAlarms,23?:DayAlarms,24?:DayAlarms,25?:DayAlarms,26?:DayAlarms,27?:DayAlarms,28?:DayAlarms,},5?:{29?:DayAlarms,30?:DayAlarms,31?:DayAlarms,}}, // aug
    9?: {1?:{1?:DayAlarms,2?:DayAlarms,3?:DayAlarms,4?:DayAlarms,5?:DayAlarms,6?:DayAlarms,7?:DayAlarms,},2?:{8?:DayAlarms,9?:DayAlarms,10?:DayAlarms,11?:DayAlarms,12?:DayAlarms,13?:DayAlarms,14?:DayAlarms,},3?:{15?:DayAlarms,16?:DayAlarms,17?:DayAlarms,18?:DayAlarms,19?:DayAlarms,20?:DayAlarms,21?:DayAlarms,},4?:{22?:DayAlarms,23?:DayAlarms,24?:DayAlarms,25?:DayAlarms,26?:DayAlarms,27?:DayAlarms,28?:DayAlarms,},5?:{29?:DayAlarms,30?:DayAlarms,}},               // sep
    10?:{1?:{1?:DayAlarms,2?:DayAlarms,3?:DayAlarms,4?:DayAlarms,5?:DayAlarms,6?:DayAlarms,7?:DayAlarms,},2?:{8?:DayAlarms,9?:DayAlarms,10?:DayAlarms,11?:DayAlarms,12?:DayAlarms,13?:DayAlarms,14?:DayAlarms,},3?:{15?:DayAlarms,16?:DayAlarms,17?:DayAlarms,18?:DayAlarms,19?:DayAlarms,20?:DayAlarms,21?:DayAlarms,},4?:{22?:DayAlarms,23?:DayAlarms,24?:DayAlarms,25?:DayAlarms,26?:DayAlarms,27?:DayAlarms,28?:DayAlarms,},5?:{29?:DayAlarms,30?:DayAlarms,31?:DayAlarms,}}, // oct
    11?:{1?:{1?:DayAlarms,2?:DayAlarms,3?:DayAlarms,4?:DayAlarms,5?:DayAlarms,6?:DayAlarms,7?:DayAlarms,},2?:{8?:DayAlarms,9?:DayAlarms,10?:DayAlarms,11?:DayAlarms,12?:DayAlarms,13?:DayAlarms,14?:DayAlarms,},3?:{15?:DayAlarms,16?:DayAlarms,17?:DayAlarms,18?:DayAlarms,19?:DayAlarms,20?:DayAlarms,21?:DayAlarms,},4?:{22?:DayAlarms,23?:DayAlarms,24?:DayAlarms,25?:DayAlarms,26?:DayAlarms,27?:DayAlarms,28?:DayAlarms,},5?:{29?:DayAlarms,30?:DayAlarms}},                // nov
    12?:{1?:{1?:DayAlarms,2?:DayAlarms,3?:DayAlarms,4?:DayAlarms,5?:DayAlarms,6?:DayAlarms,7?:DayAlarms,},2?:{8?:DayAlarms,9?:DayAlarms,10?:DayAlarms,11?:DayAlarms,12?:DayAlarms,13?:DayAlarms,14?:DayAlarms,},3?:{15?:DayAlarms,16?:DayAlarms,17?:DayAlarms,18?:DayAlarms,19?:DayAlarms,20?:DayAlarms,21?:DayAlarms,},4?:{22?:DayAlarms,23?:DayAlarms,24?:DayAlarms,25?:DayAlarms,26?:DayAlarms,27?:DayAlarms,28?:DayAlarms,},5?:{29?:DayAlarms,30?:DayAlarms,31?:DayAlarms,}}, // dec 
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
    rootContainer:Container
    colums:{ amount:1 ,size:"F"}
    rows:{ amount:1 ,size:"F"}
} 
interface Container {   
    data:{

        component:any // THIS IS THE SVELTE APP TYPE THAT YOU MUST REPLACE BECAUSE U DON"T KNOW WHAT IT IS
        settings:{}

        child?:Map<string,Container> // you order the components by putting x-index as char 0 and y-index as char 1 
    },

    layout:{
        format:{
            overflow:Vec2<("scroll"|"expand"),("scroll"|"expand")>,  
            pos:PosFormat,
            size:SizeFormat,
            pad?:{
                left:number
                right:number
                top:number
                bottom:number
            }
        },
        child?:GridFormat

    }
    transition:{}
}

export type WorkspaceData = Map<workspaceName,Workspace>

type workspaceName = string;

type Reminder = {
    pathInWorkspace:string,
    date:[number,number,number],
    name:string,
    icon:string,
};

export interface NavItem { icon:string, title:string }

export type Data = {

    Workspace:WorkspaceData,
    Calendar:Alarms

    NavBar:Array<NavItem>
    selected:number

        
}


