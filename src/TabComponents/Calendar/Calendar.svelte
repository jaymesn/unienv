<script lang="ts">
    import type { DatesObject } from "../../@types/Types.svelte";

    console.log("from Calendar")
    export let allReminders:DatesObject;


</script>

<div class="Calendar">

    <!-- 
        redo this so that the types corrospond better with the html
        looping through the monthly keys
    -->
    {#each Object.keys(allReminders) as val,key }
        <div class="item-month">
            <!-- looping through the daily keys-->

            {#each Object.keys(allReminders[val]) as val2,key2}


                {#if val2 }
                <div class="item-day"></div>

                {console.log( allReminders[ val ][ val2 ].entries()  )}
                {/if}
            
            {/each}
        </div>
    {/each}


</div>

<style>
    
    .Calendar {
        width:100vw;
        height:100%;
        display:grid;
        background-color: blue;
        grid-template-columns:repeat(7,1fr);
    }

</style>