<script lang="ts" context="module">
import Calendar from "../TabComponents/Calendar/Calendar.svelte";



    type workspaceName = string;


    type Reminder = {
        date:[number,number,number],
        name:"",
        icon:""
    };
    type CalendarDayReminders = Map<workspaceName,Array<Reminder>>; 

    export interface Dates {
        1?: {1?:CalendarDayReminders,2?:CalendarDayReminders,3?:CalendarDayReminders,4?:CalendarDayReminders,5?:CalendarDayReminders,6?:CalendarDayReminders,7?:CalendarDayReminders,8?:CalendarDayReminders,9?:CalendarDayReminders,10?:CalendarDayReminders,11?:CalendarDayReminders,12?:CalendarDayReminders,13?:CalendarDayReminders,14?:CalendarDayReminders,15?:CalendarDayReminders,16?:CalendarDayReminders,17?:CalendarDayReminders,18?:CalendarDayReminders,19?:CalendarDayReminders,20?:CalendarDayReminders,21?:CalendarDayReminders,22?:CalendarDayReminders,23?:CalendarDayReminders,24?:CalendarDayReminders,25?:CalendarDayReminders,26?:CalendarDayReminders,27?:CalendarDayReminders,28?:CalendarDayReminders,29?:CalendarDayReminders,30?:CalendarDayReminders,31?:CalendarDayReminders}, 
        2?: {1?:CalendarDayReminders,2?:CalendarDayReminders,3?:CalendarDayReminders,4?:CalendarDayReminders,5?:CalendarDayReminders,6?:CalendarDayReminders,7?:CalendarDayReminders,8?:CalendarDayReminders,9?:CalendarDayReminders,10?:CalendarDayReminders,11?:CalendarDayReminders,12?:CalendarDayReminders,13?:CalendarDayReminders,14?:CalendarDayReminders,15?:CalendarDayReminders,16?:CalendarDayReminders,17?:CalendarDayReminders,18?:CalendarDayReminders,19?:CalendarDayReminders,20?:CalendarDayReminders,21?:CalendarDayReminders,22?:CalendarDayReminders,23?:CalendarDayReminders,24?:CalendarDayReminders,25?:CalendarDayReminders,26?:CalendarDayReminders,27?:CalendarDayReminders,28?:CalendarDayReminders,29?:CalendarDayReminders}, 
        3?: {1?:CalendarDayReminders,2?:CalendarDayReminders,3?:CalendarDayReminders,4?:CalendarDayReminders,5?:CalendarDayReminders,6?:CalendarDayReminders,7?:CalendarDayReminders,8?:CalendarDayReminders,9?:CalendarDayReminders,10?:CalendarDayReminders,11?:CalendarDayReminders,12?:CalendarDayReminders,13?:CalendarDayReminders,14?:CalendarDayReminders,15?:CalendarDayReminders,16?:CalendarDayReminders,17?:CalendarDayReminders,18?:CalendarDayReminders,19?:CalendarDayReminders,20?:CalendarDayReminders,21?:CalendarDayReminders,22?:CalendarDayReminders,23?:CalendarDayReminders,24?:CalendarDayReminders,25?:CalendarDayReminders,26?:CalendarDayReminders,27?:CalendarDayReminders,28?:CalendarDayReminders,29?:CalendarDayReminders,30?:CalendarDayReminders,31?:CalendarDayReminders}, 
        4?: {1?:CalendarDayReminders,2?:CalendarDayReminders,3?:CalendarDayReminders,4?:CalendarDayReminders,5?:CalendarDayReminders,6?:CalendarDayReminders,7?:CalendarDayReminders,8?:CalendarDayReminders,9?:CalendarDayReminders,10?:CalendarDayReminders,11?:CalendarDayReminders,12?:CalendarDayReminders,13?:CalendarDayReminders,14?:CalendarDayReminders,15?:CalendarDayReminders,16?:CalendarDayReminders,17?:CalendarDayReminders,18?:CalendarDayReminders,19?:CalendarDayReminders,20?:CalendarDayReminders,21?:CalendarDayReminders,22?:CalendarDayReminders,23?:CalendarDayReminders,24?:CalendarDayReminders,25?:CalendarDayReminders,26?:CalendarDayReminders,27?:CalendarDayReminders,28?:CalendarDayReminders,29?:CalendarDayReminders,30?:CalendarDayReminders}, 
        5?: {1?:CalendarDayReminders,2?:CalendarDayReminders,3?:CalendarDayReminders,4?:CalendarDayReminders,5?:CalendarDayReminders,6?:CalendarDayReminders,7?:CalendarDayReminders,8?:CalendarDayReminders,9?:CalendarDayReminders,10?:CalendarDayReminders,11?:CalendarDayReminders,12?:CalendarDayReminders,13?:CalendarDayReminders,14?:CalendarDayReminders,15?:CalendarDayReminders,16?:CalendarDayReminders,17?:CalendarDayReminders,18?:CalendarDayReminders,19?:CalendarDayReminders,20?:CalendarDayReminders,21?:CalendarDayReminders,22?:CalendarDayReminders,23?:CalendarDayReminders,24?:CalendarDayReminders,25?:CalendarDayReminders,26?:CalendarDayReminders,27?:CalendarDayReminders,28?:CalendarDayReminders,29?:CalendarDayReminders,30?:CalendarDayReminders,31?:CalendarDayReminders}, 
        6?: {1?:CalendarDayReminders,2?:CalendarDayReminders,3?:CalendarDayReminders,4?:CalendarDayReminders,5?:CalendarDayReminders,6?:CalendarDayReminders,7?:CalendarDayReminders,8?:CalendarDayReminders,9?:CalendarDayReminders,10?:CalendarDayReminders,11?:CalendarDayReminders,12?:CalendarDayReminders,13?:CalendarDayReminders,14?:CalendarDayReminders,15?:CalendarDayReminders,16?:CalendarDayReminders,17?:CalendarDayReminders,18?:CalendarDayReminders,19?:CalendarDayReminders,20?:CalendarDayReminders,21?:CalendarDayReminders,22?:CalendarDayReminders,23?:CalendarDayReminders,24?:CalendarDayReminders,25?:CalendarDayReminders,26?:CalendarDayReminders,27?:CalendarDayReminders,28?:CalendarDayReminders,29?:CalendarDayReminders,30?:CalendarDayReminders},
        7?: {1?:CalendarDayReminders,2?:CalendarDayReminders,3?:CalendarDayReminders,4?:CalendarDayReminders,5?:CalendarDayReminders,6?:CalendarDayReminders,7?:CalendarDayReminders,8?:CalendarDayReminders,9?:CalendarDayReminders,10?:CalendarDayReminders,11?:CalendarDayReminders,12?:CalendarDayReminders,13?:CalendarDayReminders,14?:CalendarDayReminders,15?:CalendarDayReminders,16?:CalendarDayReminders,17?:CalendarDayReminders,18?:CalendarDayReminders,19?:CalendarDayReminders,20?:CalendarDayReminders,21?:CalendarDayReminders,22?:CalendarDayReminders,23?:CalendarDayReminders,24?:CalendarDayReminders,25?:CalendarDayReminders,26?:CalendarDayReminders,27?:CalendarDayReminders,28?:CalendarDayReminders,29?:CalendarDayReminders,30?:CalendarDayReminders,31?:CalendarDayReminders},
        8?: {1?:CalendarDayReminders,2?:CalendarDayReminders,3?:CalendarDayReminders,4?:CalendarDayReminders,5?:CalendarDayReminders,6?:CalendarDayReminders,7?:CalendarDayReminders,8?:CalendarDayReminders,9?:CalendarDayReminders,10?:CalendarDayReminders,11?:CalendarDayReminders,12?:CalendarDayReminders,13?:CalendarDayReminders,14?:CalendarDayReminders,15?:CalendarDayReminders,16?:CalendarDayReminders,17?:CalendarDayReminders,18?:CalendarDayReminders,19?:CalendarDayReminders,20?:CalendarDayReminders,21?:CalendarDayReminders,22?:CalendarDayReminders,23?:CalendarDayReminders,24?:CalendarDayReminders,25?:CalendarDayReminders,26?:CalendarDayReminders,27?:CalendarDayReminders,28?:CalendarDayReminders,29?:CalendarDayReminders,30?:CalendarDayReminders,31?:CalendarDayReminders},
        9?: {1?:CalendarDayReminders,2?:CalendarDayReminders,3?:CalendarDayReminders,4?:CalendarDayReminders,5?:CalendarDayReminders,6?:CalendarDayReminders,7?:CalendarDayReminders,8?:CalendarDayReminders,9?:CalendarDayReminders,10?:CalendarDayReminders,11?:CalendarDayReminders,12?:CalendarDayReminders,13?:CalendarDayReminders,14?:CalendarDayReminders,15?:CalendarDayReminders,16?:CalendarDayReminders,17?:CalendarDayReminders,18?:CalendarDayReminders,19?:CalendarDayReminders,20?:CalendarDayReminders,21?:CalendarDayReminders,22?:CalendarDayReminders,23?:CalendarDayReminders,24?:CalendarDayReminders,25?:CalendarDayReminders,26?:CalendarDayReminders,27?:CalendarDayReminders,28?:CalendarDayReminders,29?:CalendarDayReminders,30?:CalendarDayReminders}, 
        10?:{1?:CalendarDayReminders,2?:CalendarDayReminders,3?:CalendarDayReminders,4?:CalendarDayReminders,5?:CalendarDayReminders,6?:CalendarDayReminders,7?:CalendarDayReminders,8?:CalendarDayReminders,9?:CalendarDayReminders,10?:CalendarDayReminders,11?:CalendarDayReminders,12?:CalendarDayReminders,13?:CalendarDayReminders,14?:CalendarDayReminders,15?:CalendarDayReminders,16?:CalendarDayReminders,17?:CalendarDayReminders,18?:CalendarDayReminders,19?:CalendarDayReminders,20?:CalendarDayReminders,21?:CalendarDayReminders,22?:CalendarDayReminders,23?:CalendarDayReminders,24?:CalendarDayReminders,25?:CalendarDayReminders,26?:CalendarDayReminders,27?:CalendarDayReminders,28?:CalendarDayReminders,29?:CalendarDayReminders,30?:CalendarDayReminders,31?:CalendarDayReminders},  
        11?:{1?:CalendarDayReminders,2?:CalendarDayReminders,3?:CalendarDayReminders,4?:CalendarDayReminders,5?:CalendarDayReminders,6?:CalendarDayReminders,7?:CalendarDayReminders,8?:CalendarDayReminders,9?:CalendarDayReminders,10?:CalendarDayReminders,11?:CalendarDayReminders,12?:CalendarDayReminders,13?:CalendarDayReminders,14?:CalendarDayReminders,15?:CalendarDayReminders,16?:CalendarDayReminders,17?:CalendarDayReminders,18?:CalendarDayReminders,19?:CalendarDayReminders,20?:CalendarDayReminders,21?:CalendarDayReminders,22?:CalendarDayReminders,23?:CalendarDayReminders,24?:CalendarDayReminders,25?:CalendarDayReminders,26?:CalendarDayReminders,27?:CalendarDayReminders,28?:CalendarDayReminders,29?:CalendarDayReminders,30?:CalendarDayReminders}, 
        12?:{1?:CalendarDayReminders,2?:CalendarDayReminders,3?:CalendarDayReminders,4?:CalendarDayReminders,5?:CalendarDayReminders,6?:CalendarDayReminders,7?:CalendarDayReminders,8?:CalendarDayReminders,9?:CalendarDayReminders,10?:CalendarDayReminders,11?:CalendarDayReminders,12?:CalendarDayReminders,13?:CalendarDayReminders,14?:CalendarDayReminders,15?:CalendarDayReminders,16?:CalendarDayReminders,17?:CalendarDayReminders,18?:CalendarDayReminders,19?:CalendarDayReminders,20?:CalendarDayReminders,21?:CalendarDayReminders,22?:CalendarDayReminders,23?:CalendarDayReminders,24?:CalendarDayReminders,25?:CalendarDayReminders,26?:CalendarDayReminders,27?:CalendarDayReminders,28?:CalendarDayReminders,29?:CalendarDayReminders,30?:CalendarDayReminders,31?:CalendarDayReminders} 
    }

    export interface WorkspaceData {

    }

    export interface ThoughtGraph {

    }

    export type Data = {

        layout:WorkspaceData,
        notes:ThoughtGraph,
        dates:Dates

        tabLayout:Array<{"icon":string,"title":string}>
        selected:number

        
    }


    export interface TabPropTemplate{
        /* figure out how to type out a default svelte compoent */
        component:any /* add the actual svelte compnent type later*/
        icon:string   /* add the actuall svg import type later */
        title:string
    }
</script>

