<!--    #script    -->
<script lang="ts">
    import type { CalendarState,  WSAlarms, YearAlarms } from "./Calendar/Types";
    import type { Controller } from "./Calendar/Controller"
    import { getNumEnd } from "../../Utils"
    import { Data } from "./Calendar/Data"
    import type { AppInfo } from "../../AppInfo";

    // this is so that we can determine if day alarms
    // and ctrl.alarms is can be accessed

    export let ctrl:Controller;
    export let dayNum:number;
    export let monthNum:number
    export let yearNum:number

   
    let localCtrlState:CalendarState = {'affected':"all","action":"uninit"} 
    let dayAlarms:WSAlarms = new Map();    // the workspace alarms for that day
    ctrl.data.state.alarms.subscribe(newState=>{
        localCtrlState = newState;
      
        if(localCtrlState.action === "update" && localCtrlState.affected === dayNum){
            dayAlarms = ctrl.getAlarm<WSAlarms>(yearNum,monthNum,dayNum);
  
        }else if(localCtrlState.action === "import"){
            dayAlarms = ctrl.getAlarm<WSAlarms>(yearNum,monthNum,dayNum);
        }
    })    

    const handleClick = (e) => {
        console.log('hello click');
    }

    // b4 wiring up clicks to the add alrm button and fixing 
    // setAlarm put some thought into what type of navigation 
    // ths app should have and how it should take shape

    
</script>

<!--    #templates    -->
<div class="day">

    <div class="day-title">

        <p class="day-number">{  dayNum+getNumEnd(dayNum)}</p>

    </div>

    <div class="alarms">
        {#if dayAlarms}
            {#each [...dayAlarms] as [wsName,wsAlarms]}
                {#each wsAlarms as alarm}
                    <div class="alarm"> 
                        <div class="ws-icon" style="--ws-colour:{alarm.icon};"></div> 
                        <p class="ws-alarm-text">{alarm.name}</p>
                    </div> 
                       
                {/each}
                
            {/each}
            {#if Array.from(dayAlarms.values()).length !== 0}
                <button on:click={handleClick} class="ws-add-alarm">+ alarm</button>
            {/if}
        
        {:else} 
            <button on:click={handleClick} class="ws-add-alarm-2">+</button>
        {/if}
    </div>
</div>

<!--    #style  -->
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
