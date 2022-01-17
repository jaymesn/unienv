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
        <div></div>
        <p class="title">
            {Names.month[monthNum -1] } { Names.day[dateNum].slice(0,3)}, {dateNum+getNumEnd(dateNum)} {yearNum}
        </p>


        <button class="view-toggle">{view}</button>
                <!-- Redo the bar component since it was dogshit last time -->

   </div>
    {#if view === "Month"}
        <MonthView {monthNum} {yearAlarms} />
    {:else if view === "Day"}
        <DayView bind:monthAlarms={yearAlarms[monthNum]} {dateNum} />
    {/if}


</div>

<style>
    .view-toggle {
        padding:0 0 0 0;
        margin:0 0 0 0;
        height:inherit;
    }
    .title {
        font-size:max(0.5rem,2vh);
        color:var(--black-dark);
        font-weight:bold;
        padding:1vh;
        border-radius:1vh;
        background-color: grey;
        align-self:center;
        justify-self:center;
    }
    .bar {
        background-color: red;
        display:grid;
        grid-gap:10px;
        grid-template-columns: .484fr 2fr .484fr;

        color:white;
        width:94vw;   
        height: 5vh;
    }

    .calendar {
        --black-dark:rgb(29 ,29 ,29,100);
        width:100vw;
        height:100vh;
        background-color:var(--black-dark);

        display: flex;
        flex-direction:column;
        align-items:center;

    }

   

</style>