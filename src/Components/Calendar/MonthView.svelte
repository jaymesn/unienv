<script lang="ts">

    import type { 
        DayAlarms ,YearAlarms
    } from "./Calendar/Types";

    import { range , getDaysInMonth } from "../../Shared/Utils";
    import type { Controller } from "./Calendar/Controller"
    import Day from "./Day.svelte"

    export let ctrl:Controller;
    export let monthNum:number;
    export let yearNum:number;


</script>

<div class="view-month">

    {#each range(getDaysInMonth(monthNum)) as dayNum}
        <Day {ctrl} {yearNum} {monthNum} {dayNum} />
            
    {/each}

</div>

<style>
    .view-month {

    --row-size:calc(  86vh / 4 );
    --column-size:calc(  86vw / 7 );


    display: grid;
    grid-template-columns: repeat(7, var(--column-size));
    grid-template-rows: repeat(4, var(--row-size) );
    grid-row-gap:0.5vh;
    grid-column-gap:0.5vw;


}

</style>