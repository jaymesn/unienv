<script lang="ts">
import type { day29type, day30type, day31type } from "../../@types/all";
    import { range , daysInMonth } from "../../Shared/Utils";
    import Day from "./Day.svelte"

    export let dateNum:number;
    export let monthNum:number;
    export let monthAlarms:day29type|day30type|day31type;

</script>

<div class="view-month">
    {#each range(daysInMonth(monthNum)) as day}
        <Day {day} dayAlarms={monthAlarms[day]}/>
            
    {/each}

</div>

<style>
.view-month {

    --row-size:calc( ( 100vh - 0.6250rem * 5  - 3rem * 2 - 1rem) / 5 );
    /* we take away 1rem for spacing and better content formatting*/

    --column-size:calc(( 90vw - 0.6250rem * 5) / 7  );

    display: grid;
    grid-template-columns: repeat(7, var(--column-size));
    grid-template-rows: repeat(5, var(--row-size) );
    grid-gap:var(--grid-gap);
    width: fit-content;
    margin-bottom:auto;


}
 
</style>