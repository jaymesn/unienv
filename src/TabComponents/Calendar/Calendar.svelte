<script lang="ts">

    import type { Alarms, DayAlarms, YearAlarms } from "../../@types/all";

    import { range , getDayAlarms }  from "../../Shared/Utils";
    
    import MonthBar from "./MonthBar.svelte";
    import MonthDay from "./MonthDay.svelte";
    
    export let allReminders:Alarms;
    let date = new Date();
    let yearAlarms = allReminders.get(date.getFullYear());

    
    
    let spacing = {
        barHeight:"3rem",
        grid:"0.6250rem"
    }

</script>

<div class="calendar" style="--bar-height:{spacing.barHeight}; --grid-gap:{spacing.grid}">

    <MonthBar barHeight={spacing.barHeight}/>
    <div class="view-month">
        {#each range(5) as week} {#each range(7) as day}

            <MonthDay style={spacing.grid} {week} {day} dayAlarms={getDayAlarms(week,day,yearAlarms)}/>

        {/each} {/each}
    </div>
</div>

<style>
    .view-day{}
    .view-week{}
    .view-month{

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