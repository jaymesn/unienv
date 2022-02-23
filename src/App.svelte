<script lang="ts">
	

	import Calendar from  "./Components/Calendar/Calendar/Component.svelte";
	import { Controller as CalendarController } from "./Components/Calendar/Calendar/Controller"
	import { Data as CalendarData } from "./Components/Calendar/Calendar/Data"
	let calendarData = new CalendarData({
            "loc":"network",
            "name":"./@data/Alarms.json",
            "type":'JSON'
        });
	let calendarCtrl = new CalendarController(calendarData);	

	import Workspace from "./Components/Workspace/Workspace/Component.svelte"
	import { Controller as WorkspaceController } from "./Components/Workspace/Workspace/Controller"
	
	let workspaceCtrl = new WorkspaceController();	

	let selected = 0;
	(window as any).ctrl = calendarCtrl; 

</script>

<div class="app-root">
	<!-- make this less for navigatio and more like polybar, so a thing to play and customize -->

    	
</div>

<style>
	.app-root{
        width:100vw;
        height:100vh;
        display:flex;
        flex-direction:column;
    }
</style>