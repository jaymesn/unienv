<script lang="ts">
    import type { DayAlarms } from "../../@types/all";

    import {getDayNum,daysInMonth,Names} from "../../Shared/Utils"

    export let week:number;
    export let day:number;
    export let dayAlarms:DayAlarms|string; 
    export let style

    let date = new Date();

</script>

<div class="day" {style} >
    {#if getDayNum(week,day) <= daysInMonth(date.getMonth()+1)}
        <div class="day-title">
            <p class="day-number">{ getDayNum(week,day) <= daysInMonth(date.getMonth() + 1) ? getDayNum(week,day) : "" }</p>
            <p class="day-name"> {Names.day[day - 1]} </p>
        </div>

        <div class="alarms">
            <p>test</p>
            <p>test</p>
            <p>test</p>
        </div>
    {:else} 

    {/if}
    
</div>

<style>
    p { color:white; margin:0 0 0 0; padding:0 0 0 0; }    
    .day-title {
        display: flex;
    }
    .day-name{
        --auto:auto;
        margin-left: auto;
        margin-right: auto;
    }
    

    

    .day {
        --black-dark:rgb(29 ,29 ,29,100);
        --black-light:rgb(50 ,48 ,48,100);

        border-bottom-right-radius: 1vh;
        background-color:var(--black-light);
        display:flex;
        flex-direction:column;

    }

    .alarms {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    

</style>