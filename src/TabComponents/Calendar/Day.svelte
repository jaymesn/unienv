<script lang="ts">
    import type {Alarms, DayAlarms } from "./Calendar/Types";
    import type { Controller } from "./Calendar/Controller"
    import {getDaysInMonth,Names, getNumEnd, dateToDayNum } from "../../Shared/Utils"

    export let ctrl:Controller;
    export let dayNum:number;
    export let monthNum:number
    export let yearNum:number


    let date = new Date();
    
    let dayAlarms:DayAlarms = new Map();
    let state:"loaded"|"loading"|"updating"|"updated";

    // MAKE A CLEAN UP METHOD FOR
    ctrl.listeners.alarms.push(
        ()=>{
            dayAlarms = ctrl.getAlarm(yearNum,monthNum,dayNum);
        }
    )

    const handleClick = () => {
        ctrl.setReminder(yearNum,monthNum,dayNum,"ws3",
        {
            "icon":"white",
            "pathInWorkspace":".",
            "name":`${yearNum}:${monthNum}:${dayNum}`
        })
    }

</script>

<div class="day">
    <div class="day-title">

        <p class="day-number">{  dayNum+getNumEnd(dayNum)}</p>

    </div>
    <div class="alarms">
        {#if typeof dayAlarms !== "string"}
            {#each [...dayAlarms] as [wsName,wsAlarms]} 
                {#each wsAlarms as alarm}

                    <div class="alarm">
                        {#if typeof alarm.icon === "string"}
                            <div class="ws-icon" style="--ws-colour:{alarm.icon};"></div>  
                            <p class="ws-alarm-text">
                                {alarm.name}
                            </p> 
                        {:else}
                            <div class="ws-icon" style="--ws-colour:grey;"></div>  
                        {/if}

                    </div>
                {/each}

            {/each}

        {/if}
        <button on:click={handleClick} class="ws-add-alarm">
            <p>add an <br/>alarm +</p>
        </button>
       
    </div>

    
</div>

<style>
    .place-holder { 
        width:100%; 
        height:100%; 
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items:center;
    }
    .place-holder p { font-size:3vh; }
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
        font-size:max(1.5vw,1.5vh);
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
        display: flex;
        align-items:center;
        margin-top:5px;
    }
    .ws-add-alarm {
        margin-top:5px;
        margin-bottom:5px;
        padding:0 0 0 0 ;
        width: 100%;
        border:solid grey .625vh;
        background-color:grey;
        border-radius: 4px;
    
    }
    

    .ws-icon {
        --size:2.1897810218978103vh;
        min-width:2vh;
        min-height:2vh;
        border-radius:4px;
        background-color:var(--ws-colour) ;
        margin:.5vh;
    }
    .ws-alarm-text {
        margin-top:.2vh;
        margin-bottom:.2vh;
        margin-right:5px;
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