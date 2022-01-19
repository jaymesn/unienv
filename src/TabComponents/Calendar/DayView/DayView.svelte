<script lang="ts">

    import type { day29type, day30type, day31type, DayAlarms } from "../Calendar.d"
    import Day from "../Day.svelte";
    export let dateNum:number;
    export let monthAlarms:day29type<DayAlarms>|day30type<DayAlarms>|day31type<DayAlarms>; 
    let dayAlarms:DayAlarms = new Map();  

    if(monthAlarms){
        if(monthAlarms[dateNum]){
            dayAlarms = monthAlarms[dateNum];
        }
    }
    console.log(dayAlarms)
</script>

<style>

</style>
