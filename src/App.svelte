<script lang="ts">
	
	import Error from "./Shared/Error.svelte"

	import Calendar from  "./TabComponents/Calendar/Calendar/Component.svelte";
	import { Controller as CalendarController } from "./TabComponents/Calendar/Calendar/Controller"

	import Workspace from "./TabComponents/Workspace/Workspace/Component.svelte"
	import { Controller as WorkspaceController } from "./TabComponents/Calendar/Calendar/Controller"

	let calendarCTRL = new CalendarController();	
	let workspaceCTRL = new WorkspaceController();	
	let selected = 0;
	// create the alarms typing 

	(window as any).ctrl = calendarCTRL; 
</script>

<div class="app-root">
	<!-- make this less for navigatio and more like polybar, so a thing to play and customize -->

    {#if selected === 0}
		<Calendar ctrl={calendarCTRL} />
    {:else if selected === 1}
		<Workspace selected={"ws1"}/>
    {:else}
        <Error name="Something Went Wrong"/>
    {/if}

	
</div>

<style>
	.app-root{
        width:100vw;
        height:100vh;
        display:flex;
        flex-direction:column;
    }
</style>