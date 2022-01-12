<script lang="ts">
    import type { DayAlarms, Reminder, workspaceName } from "../../@types/all";

    import { daysInMonth,Names, getNumEnd, dateToDayNum } from "../../Shared/Utils"

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
        {#if dayAlarms}
            {#each [...dayAlarms] as [wsName,wsAlarms]} 
                {#each wsAlarms as alarm}
                    <div class="alarm">
                        <div class="ws-icon"></div> {alarm.name} 
                    </div>
                {/each}

            {/each}
        {/if}
        </div>

    {/if}
    
</div>

<style>
    .day {
        /* the 1 represents bar-height and 5 is the amount of row-gaps*/
        --height:calc( ( 100vh - 0.6250rem * 5  - 3rem * 1 - 1rem) / 1 );
        --black-dark:rgb(29 ,29 ,29,100);
        --black-light:rgb(50 ,48 ,48,100);
        border-bottom-right-radius: 2vh;
        background-color:var(--black-light);
        display:flex;
        flex-direction:column;
        color:white;

    }
    .day-title {
        height: 1.2rem;
        margin-top:0.25rem;
        padding-bottom:0.25rem;
        display: flex;
        overflow-x:scroll;
    }

    .alarms {
        height:100%;
        width: 95%;
        margin-left:auto;
        margin-right:auto;

        overflow: scroll;
    }
    .alarm {
        display: flex;
    }

    .ws-icon {
        width:1rem;
        height:1rem;
        border-radius:1vh;
    }

    
    

    




    /* Hide scrollbar for IE, Edge and Firefox */
    .day-title::-webkit-scrollbar { display: none; }
    .day-title{ -ms-overflow-style: none;  /* IE and Edge */ scrollbar-width: none;  /* Firefox */ }

    .day-number{ margin-left: auto; margin-right:.3rem; }
    .day-name { margin-left:.3rem;}

    /* Hide scrollbar for IE, Edge and Firefox */
    .alarms::-webkit-scrollbar { display: none; }
    .alarms{ -ms-overflow-style: none;  /* IE and Edge */ scrollbar-width: none;  /* Firefox */ }



    p { color:white; margin:0 0 0 0; padding:0 0 0 0; }    

</style>