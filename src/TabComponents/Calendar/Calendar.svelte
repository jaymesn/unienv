<script lang="ts">

    import type { Alarms, DayAlarms } from "../../@types/all";

    import { daysInMonth, getDayNum, range } from "../../Shared/Utils";
    
    import MonthBar from "./MonthBar.svelte";
    import MonthDay from "./MonthDay.svelte";
    
    export let allReminders:Alarms;
    let date = new Date();
    let yearAlarms = allReminders.get(date.getFullYear());

    function getDayAlarms(week:number,day:number):DayAlarms|string{

        let monthAlarms = yearAlarms[ date.getMonth() ]
        let dayAlarms:string|DayAlarms = "None This Day";
        if(monthAlarms){
            let weekAlarms = monthAlarms [ week ]
            if(weekAlarms){
                dayAlarms = weekAlarms[ day ]
                if(dayAlarms){
                    return dayAlarms as DayAlarms
                }
            }
        }
        return dayAlarms
    }
    interface Spacing {

    }
    
    let spacing = {
        barHeight:"3rem",
        grid:"0.6250rem"
    }

</script>

<div class="calendar" style="--bar-height:{spacing.barHeight}; --grid-gap:{spacing.grid}">

    <!-- loop through 5 rows worth of content-->

    <MonthBar barHeight={spacing.barHeight}/>
    <div class="days">
        {#each range(5) as week} {#each range(7) as day}

            <MonthDay style={spacing.grid} {week} {day} dayAlarms={getDayAlarms(week,day)}/>

        {/each} {/each}
    </div>
</div>

<style>
    .days {

        --row-size:calc( 
            ( 100vh 
                - var(--grid-gap) * 5  
                - var(--bar-height) * 2
                - 1rem
            ) 
        / 5 );

        --column-size:calc(
            (90vw - var(--grid-gap) * 5)/ 7
        );

        display: grid;
        grid-template-columns: repeat(7, var(--column-size));
        grid-template-rows: repeat(5, var(--row-size) );
        grid-gap:var(--grid-gap);
        width: fit-content;
        margin-top:auto;
        margin-bottom:auto;


    }
    .calendar {
        --col:0;
        --black-dark:rgb(29 ,29 ,29,100);
        width:100vw;
        height:100%;
        background-color:var(--black-dark);

        display: flex;
        flex-direction:column;
        align-items:center;
        overflow-y:hidden

    }

   

</style>