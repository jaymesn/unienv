<script lang="ts">
    import type { DayAlarms, Reminder} from "./Calendar/Types";
    import type { Controller } from "./Calendar/Controller"
    import {getDaysInMonth,Names, getNumEnd, dateToDayNum } from "../../Shared/Utils"

    export let ctrl:Controller;
    export let day:number;

    let date = new Date();
    let dayAlarms:DayAlarms = new Map();
    ctrl.state = "test3"


</script>

<div class="day">
    {#if day <= getDaysInMonth(date.getMonth()+1)}

        <div class="day-title">

            <p class="day-number">{  day+getNumEnd(day)}</p>

        </div>
        <div class="alarms">
        {#if dayAlarms}
            {#each [...dayAlarms] as [wsName,wsAlarms]} 
                {#each wsAlarms as alarm}

                    <div class="alarm">
                        {#if typeof alarm.icon === "string"}
                            <div class="ws-icon" style="--ws-colour:{alarm.icon};"></div>  
                        {:else}
                            <div class="ws-icon" style="--ws-colour:grey;"></div>  
                        {/if}
                       <p style="margin-top:.2vh;margin-bottom:.2vh;margin-right:5px;">
                        {alarm.name}
                       </p> 

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
        --black-dark:rgb(29 ,29 ,29,100);
        --black-light:rgb(50 ,48 ,48,100);
        background-color:var(--black-light);
        display:flex;
        flex-direction:column;
        color:white;
    }
    .day-title {
        font-size:max(0.5rem,2vh);
        height:fit-content;
        margin-top:0.25rem;
        padding-bottom:0.25rem;
       
        display: flex;
        overflow-x:scroll;
    }

    .alarms {
        font-size:max(1.5vw,18px);
        margin-top:auto;
        margin-bottom:auto;
        height:80%;
        width: 90%;
        margin:auto;
        overflow: scroll;

    }
    .alarm {
        width: fit-content;
        border:solid black .625vh;
        border-radius: 4px;
        white-space: nowrap;
        padding-top:3px;
        display: flex;
        align-items:center;
        margin-top:5px;
        margin-right:5px;
    }

    .ws-icon {
        --size:2.1897810218978103vh;
        min-width:2vh;
        min-height:2vh;
        border-radius:4px;
        background-color:var(--ws-colour) ;
        margin:.5vh;
    }
    

    /* Hide scrollbar for IE, Edge and Firefox */
    .day-title::-webkit-scrollbar { display: none;}
    .day-title { -ms-overflow-style: none;  /* IE and Edge */ scrollbar-width: none;  /* Firefox */ }

    .day-number{ margin-right: auto; margin-left:.3rem; height:fit-content;}

    /* Hide scrollbar for IE, Edge and Firefox */
    .alarms::-webkit-scrollbar { display: none; }
    .alarms{ -ms-overflow-style: none;  /* IE and Edge */ scrollbar-width: none;  /* Firefox */ }



    p { color:white; margin:0 0 0 0; padding:0 0 0 0; }    

</style>