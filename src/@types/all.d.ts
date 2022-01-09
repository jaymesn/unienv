/*
redo this so that the types corrospond better with the html
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

export type WorkspaceData = Map<workspaceName,Workspace>

interface Workspace {

}
type workspaceName = string;

type Reminder = {
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


