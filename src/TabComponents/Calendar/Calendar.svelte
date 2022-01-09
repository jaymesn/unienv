<script lang="ts">
    import type { Alarms } from "../../@types/all";

    import { range } from "../../Shared/Utils";
    
    import MonthBar from "./MonthBar.svelte";

    export let allReminders:Alarms;

    let date = new Date();

    console.log("from Calendar");

</script>

<div class="calendar">
    <!-- loop through 5 rows worth of content-->
    <MonthBar />
    {#each range(5) as week}
            <div class="month-days">
                {#each range(7) as day}
                    <p>day</p>
                {/each}
            </div>

    {/each}
</div>

<style>
    .calendar {
        width:100w;
        height:100%;
        background-color: blue;
    }
    .month-days {
        display: flex;
    }

    p {
        margin:auto;
        margin-top:10px;
        margin-bottom:10px;
    }

</style>