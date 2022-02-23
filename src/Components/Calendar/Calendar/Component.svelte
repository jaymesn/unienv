<script lang="ts">

    import MonthView from "../MonthView.svelte";
    import DayView from "../DayView.svelte";
    import { dateToDayNum, Names ,getNumEnd, getDayNum} from "../../../Utils";
    import type { Controller } from "./Controller"
    export let ctrl:Controller;

    let view:"Day"|"Month" = "Month";
    $: view = view;

    let date = new Date();

    let yearNum = date.getFullYear();
    $: yearNum = yearNum;

    let monthNum = date.getMonth() + 1;
    $: monthNum = monthNum;

    let dateNum = date.getDate();
    $: dateNum = dateNum;

    let dayNum = date.getDay();
    $: dayNum = dayNum; // makes it so that 0-7 is mon-sun

    /* {Names.month[monthNum -1] } { Names.day[dateNum].slice(0,3)}, {dateNum+getNumEnd(dateNum)} {yearNum}*/
    const handleViewChange = (event) => {
        if(view === "Month"){
            view = "Day"
        }else {
            view = "Month"
        }

    }
</script>

<div class="calendar">
    <div class="bar">
    <div></div>
       <p class="title">
            {Names.month[monthNum -1] } { Names.day[dayNum].slice(0,3)}, {dateNum+getNumEnd(dateNum)} {yearNum}
        </p>


        <button class="view-toggle" on:click={handleViewChange}>{view === "Month" ? "Day view":"Month view"}</button>
                <!-- Redo the bar component since it was dogshit last time -->
  
    </div>
    {#if view === "Month"}
        <MonthView {ctrl} {yearNum} {monthNum}  />
    {:else if view === "Day"}
        <DayView {ctrl} {dateNum} />
    {/if}
    

</div>

<style>
    .view-toggle {
        overflow:hidden;
        padding:0 0 0 0;
        margin:0 0 0 0;
        height:inherit;
        font-size:max(1.5vw,18px);
    }
    .title {
        white-space: nowrap;
        padding:0 0 0 0;
        margin:0 0 0 0;
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