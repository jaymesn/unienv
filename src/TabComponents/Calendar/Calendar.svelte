<script lang="ts">

    import type { Dates } from "../../@types/Types.svelte";

    console.log("from Calendar")
    export let allReminders:Dates;

</script>

<div class="Calendar">

</div>
<!--<CalendarLegend />-->

<style>
    
    .Calendar {
        width:100%;
        height:100%;
        background-color: blue;
        display:grid;
    }
</style>