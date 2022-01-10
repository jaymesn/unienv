<script lang="ts">
	import type { Data } from "./@types/all"

    import NavBar from "./Shared/NavBar.svelte"
	import Error from "./Shared/Error.svelte"

	import Calendar from  "./TabComponents/Calendar/Calendar.svelte";
	import Workspace from "./TabComponents/Workspace/Workspace.svelte";

    let AppData:Data = {

        NavBar:[
			{ title:"Calendar", icon:" (^o^) "},
			{ title:"Workspace", icon:" idk? "},
		],
        selected:0,

        Workspace:new Map(),

		// redo this so that the types corrospond better with the html
		Calendar:new Map([
			[
				2022,{
						1:{  
							1:{
								1:new Map(Object.entries({"workspaceName":[
								{
									"date":[0,0,0],
									"name":"",
									"icon":"",
								}
								]}))
							} 
						}
					}
			]]
		)
		        

    };
	Object.keys(AppData.Calendar);
	(window as any).look = AppData.Calendar;

</script>

<div class="app-root">

    {#if AppData.selected === 0}
		<Calendar allReminders={AppData.Calendar}/>
    {:else if AppData.selected === 1}
		<Workspace />
    {:else}
        <Error name="Something Went Wrong"/>
    {/if}
    <NavBar selected={AppData.selected} NavItemList = {AppData.NavBar} />
	
</div>

<style>
	.app-root{
        width:100vw;
        height:100vh;
        display:flex;
        flex-direction:column;
    }
</style>