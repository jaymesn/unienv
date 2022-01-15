<script lang="ts">
    
    import type { Alarms } from "../../@types/all";

    
    import MonthView from "./MonthView.svelte";
    import DayView from "./DayView.svelte";
    import { Names ,getNumEnd} from "../../Shared/Utils";
    
    export let allReminders:Alarms;

    let view:"Day"|"Month" = "Month";
    $: view = view;

    let date = new Date();

    let yearNum = date.getFullYear();
    $: yearNum = yearNum;

    let monthNum = date.getMonth() + 1;
    $: monthNum = monthNum;

    let dateNum = date.getDate();
    $: dateNum = dateNum;

    let yearAlarms = allReminders.get(yearNum);

    let dayAlarms = yearAlarms[monthNum][dateNum]

    dateNum=2
    /* {Names.month[monthNum -1] } { Names.day[dateNum].slice(0,3)}, {dateNum+getNumEnd(dateNum)} {yearNum}*/
</script>

<div class="calendar">
    <div class="bar">
        <!-- Redo the bar component since it was dogshit last time -->
        hello

    </div>
    {#if view === "Month"}
        <MonthView {monthNum} {yearAlarms} />
    {:else if view === "Day"}
        <DayView bind:monthAlarms={yearAlarms[monthNum]} {dateNum} />
    {/if}


</div>

<style>
    .bar {
        display: flex;
        justify-content: center;
        align-items: center;
        width:calc(90vw + 0.6250rem) ;
        height: 10vh;
    }
    .calendar {
        --black-dark:rgb(29 ,29 ,29,100);
        width:100vw;
        height:100%;
        background-color:var(--black-dark);

        display: flex;
        flex-direction:column;
        align-items:center;
        overflow-y:scroll;

    }

   

</style>