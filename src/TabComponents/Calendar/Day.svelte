<script lang="ts">
    import type { CalendarState,DayAlarms } from "./Calendar/Types";
    import type { Controller } from "./Calendar/Controller"
    import { getNumEnd } from "../../Shared/Utils"
    import { state } from "./Calendar/Controller"
    import { onDestroy } from "svelte";
import App from "../../App.svelte";
import Browser from "../Workspace/Browser.svelte";
import Component from "./Calendar/Component.svelte";

    export let ctrl:Controller;
    export let dayNum:number;
    export let monthNum:number
    export let yearNum:number

    let date = new Date();
    let dayAlarms:DayAlarms = new Map();
    
    let addAlarmToggle:boolean = false;
    $: addAlarmToggle = addAlarmToggle;

    state.alarms.subscribe( (newState:CalendarState)=> { 
        if(newState[0] === dayNum || newState[1] === "import"){
            if(ctrl.getAlarm(yearNum,monthNum,dayNum) !== "day has no alarms "){
                $: dayAlarms = ctrl.getAlarm(yearNum,monthNum,dayNum);
                console.log(dayAlarms);
            }
        }
    })

    function handleClick(e){
        ctrl.setReminder(
            yearNum,
            monthNum,
            dayNum,
            "ws3",
            {
                "icon":"red",
                "name":`${dayNum}:${(new Date()).getMilliseconds()}`,
                "pathInWorkspace":"."
            }
        )
    }
    
  
</script>
<div class="day" >
    <div class="day-title">

        <p class="day-number">{  dayNum+getNumEnd(dayNum)}</p>

    </div>
    <div class="alarms">
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
            {#if [...dayAlarms].length !== 0}
                    <button on:click={handleClick} class="ws-add-alarm">+ alarm</button>
            {:else}
                    <button on:click={handleClick} class="ws-add-alarm-2">+</button>
            {/if}
    <div/>

</div>
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
        display:flex;
        flex-direction:column;
        font-size:max(1.5vw,2vh);
        margin-top:auto;
        margin-bottom:auto;
        height:80%;
        width: 90%;
        margin:auto;
        overflow: scroll;
        --alarm-border-width:.625vh;

    }
    
    .alarm {
        width: fit-content;
        border:solid black var(--alarm-border-width);
        border-radius: 4px;
        white-space: nowrap;
        display: flex;
        align-items:center;
        margin-top:3px;
    }
    .ws-add-alarm {
        border:solid grey var(--alarm-border-width);
        background-color:var(--black-light);
        
        color:white;
        margin-top:5px;
        margin-bottom:5px;
        padding:0 0 0 0 ;
        width: 100%;
        border-radius: 4px;
    
    }

    .ws-add-alarm-2 {
        border:solid grey var(--alarm-border-width);
        background-color: var(--black-light);

        padding: 0 0 0 0;
        margin: 0 0 0 0;
        border: 0 0 0 0;
        justify-self:center;
        align-self:center;
        width:100%;
        height:95%;
        font-size:6vh;
        color:white;
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