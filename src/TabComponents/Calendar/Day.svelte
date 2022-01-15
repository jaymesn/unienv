<script lang="ts">
    import type { DayAlarms, Reminder, workspaceName } from "../../@types/all";

    import { daysInMonth,Names, getNumEnd, dateToDayNum } from "../../Shared/Utils"

    export let day:number;
    export let dayAlarms:DayAlarms; 

    let date = new Date();
    const updateAlarms = ()=>{$:dayAlarms = dayAlarms};

    updateAlarms();
    if(!dayAlarms){
        dayAlarms = new Map();
        dayAlarms.set("ws2",[
            {
                "pathInWorkspace":"",
                "icon":"green",
                "name":"inter-test"
            }
        ]);

        (window as any).days[day] = dayAlarms;
        (window as any).updateAlarms = updateAlarms;
    }


</script>

<div class="day">
    {#if day <= daysInMonth(date.getMonth()+1)}

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

                        {alarm.name}

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
        font-size:2.5vw;
        height:fit-content;
        margin-top:0.25rem;
        padding-bottom:0.25rem;
        display: flex;
        overflow-x:scroll;
    }

    .alarms {
        margin-top:auto;
        margin-bottom:auto;
        height:80%;
        width: 90%;
        margin:auto;
        overflow: scroll;

    }
    .alarm {
        padding-top:3px;
        font-size:1.8vw;
        display: flex;
    }

    .ws-icon {
        width:12px;
        height:12px;
        border-radius:1vw;
        background-color:var(--ws-colour) ;
        margin-right:.5rem;
    }
    

    /* Hide scrollbar for IE, Edge and Firefox */
    .day-title::-webkit-scrollbar { display: none;}
    .day-title { -ms-overflow-style: none;  /* IE and Edge */ scrollbar-width: none;  /* Firefox */ }

    .day-number{ margin-right: auto; margin-left:.3rem; height:fit-content;}
    .day-name { margin-left:.3rem;}

    /* Hide scrollbar for IE, Edge and Firefox */
    .alarms::-webkit-scrollbar { display: none; }
    .alarms{ -ms-overflow-style: none;  /* IE and Edge */ scrollbar-width: none;  /* Firefox */ }



    p { color:white; margin:0 0 0 0; padding:0 0 0 0; }    

</style>