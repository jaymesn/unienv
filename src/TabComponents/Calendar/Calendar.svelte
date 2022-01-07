<script lang="ts">
    import type { Alarms } from "../../@types/all";

    console.log("from Calendar")
    export let allReminders:Alarms;


</script>

<div class="Calendar">

    <!-- 
        redo this so that the types corrospond better with the html
        looping through the monthly keys


        i think the typing is correct just change it from looping over the allREminders
        to looping over a list of .. . 
        12 months then . . .
        5 weeks then  . . .
        31,30 or 29 days  
    -->
    {#each Object.keys(allReminders) as month}
        <div class="item-month">
            <!-- looping through the daily keys-->
            <button>MONTH</button>

            {#each Object.keys(allReminders[month]) as week}
                <div class="item-week">
                    <button>WEEK</button>

                        {#each Object.keys(allReminders[ month ][ week ]) as day}
                            <div class="item-day">
                                <button>DAY</button>
                            </div>
                        {/each}

                </div>
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