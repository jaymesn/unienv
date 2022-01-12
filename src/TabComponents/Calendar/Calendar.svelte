<script lang="ts">

    import type { Alarms, DayAlarms, YearAlarms } from "../../@types/all";
    import Error from "../../Shared/Error.svelte";

    import { range, daysInMonth }  from "../../Shared/Utils";
    
    import MonthBar from "./MonthBar.svelte";
    import DayView from "./DayView.svelte";
    import MonthView from "./MonthView.svelte";
    
    export let allReminders:Alarms;
    export let view:"Day"|"Month";

    let date = new Date();

    let yearNum = date.getFullYear();
    let monthNum = date.getMonth() + 1;
    let dateNum = date.getDate();

    let yearAlarms = allReminders.get(yearNum);


    /*

    update the types so that its a linear list of from 1 to <month-end> 
    make it easeir to query dates with the calendar that way too


    after fooling around with the gride last night i realize that im gonna have to roll my own
    css repeat function that updates from javascript since it doesn't mesh so well with svelte

    */

    $: view = "Month";
    $: rowAmount = 5;
    $: columnAmount = 7;

   
    
    let spacing = {
        barHeight:"3rem",
        grid:"0.6250rem"
    }
   

</script>

<div class="calendar" style="--bar-height:{spacing.barHeight}; --grid-gap:{spacing.grid}">

    <MonthBar  barHeight={spacing.barHeight}/>
    
    <!-- make a month and day view MAKE THINGS INTERACTABLE ALREADY-->
    {#if view === "Month"}
        <MonthView {dateNum} {monthNum} monthAlarms={yearAlarms[monthNum]}/>
    {:else if view === "Day"}
        <DayView />
    {:else}
        <Error name="Couldn't decide what alarms to Show u D:"/>
    {/if}
</div>

<style>
    .view-day{}
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