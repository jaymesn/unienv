<script lang="ts">

    import type { day29type, day30type, day31type, YearAlarms } from "../../@types/all";
    import { range , daysInMonth } from "../../Shared/Utils";
    import Day from "./Day.svelte"

    export let monthNum:number;
    export let yearAlarms:YearAlarms;

    let monthAlarms:day29type|day30type|day31type = yearAlarms[monthNum];
    (window as any).days = {}

</script>

<div class="view-month">

    {#each range(daysInMonth(monthNum)) as day}
        <Day {day} dayAlarms={monthAlarms[day]}/>
            
    {/each}

</div>

<style>
    .view-month {

    --row-size:calc(  86vh / 5 );
    --column-size:calc(  86vw / 7 );


    display: grid;
    grid-template-columns: repeat(7, var(--column-size));
    grid-template-rows: repeat(5, var(--row-size) );
    grid-row-gap:0.5vh;
    grid-column-gap:0.5vw;


}

</style>