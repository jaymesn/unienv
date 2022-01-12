<script lang="ts">
    import type { day29type, day30type, day31type, DayAlarms, YearAlarms } from "../../@types/all";

    import { daysInMonth,Names, getNumEnd, dateToDayNum} from "../../Shared/Utils"

    export let day:number;
    export let dayAlarms:DayAlarms; 

    let date = new Date();
   


</script>

<div class="day">
    {#if day <= daysInMonth(date.getMonth()+1)}

        <div class="day-title">

            <p class="day-name"> { Names.day[dateToDayNum(day) - 1].slice(0,3) } </p>
            <p class="day-number">{  day+getNumEnd(day)}</p>
        </div>
        <div class="alarms">
            {console.log(dayAlarms)}
        </div>

    {/if}
    
</div>

<style>

    p { color:white; margin:0 0 0 0; padding:0 0 0 0; }    
    .day-title {
        margin-top:0.25rem;
        display: flex;
        overflow-x:scroll;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .day-title::-webkit-scrollbar { display: none; }
    .day-title{ -ms-overflow-style: none;  /* IE and Edge */ scrollbar-width: none;  /* Firefox */ }

    .day-number{ margin-left: auto; margin-right:.3rem; }
    .day-name { margin-left:.3rem;}

    /* Hide scrollbar for IE, Edge and Firefox */
    .alarms::-webkit-scrollbar { display: none; }
    .alarms{ -ms-overflow-style: none;  /* IE and Edge */ scrollbar-width: none;  /* Firefox */ }

    .alarms {
        height: inherit;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow-y: scroll;
    }
    

    .day {
        --black-dark:rgb(29 ,29 ,29,100);
        --black-light:rgb(50 ,48 ,48,100);

        border-bottom-right-radius: 1vh;
        background-color:var(--black-light);
        display:flex;
        flex-direction:column;

    }




</style>