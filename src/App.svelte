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
						1:new Map([
							["ws1",[
								{
									pathInWorkspace:"",
									date:[2022,1,(new Date).getDate()],
									name:"hello",
									icon:"|^ ^|"

								},	
								{
									pathInWorkspace:"",
									date:[2022,1,(new Date).getDate()+1],
									name:"hello",
									icon:"|^ ^|"

								}
							]],	
							["ws2",[
								{
									pathInWorkspace:"",
									date:[2022,1,(new Date).getDate()],
									name:"hello2",
									icon:"|^ ^| * 2"

								},	
								{
									pathInWorkspace:"",
									date:[2022,1,(new Date).getDate()+1],
									name:"hello2",
									icon:"|^ ^| * 2"

								}
							]]
						]),
					}			 
				}
			]]
		)
		        

    };
	Object.keys(AppData.Calendar);
	(window as any).look = AppData.Calendar;
	let view:"Day"|"Month" = "Day"

</script>

<div class="app-root">
	<!-- make this less for navigatio and more like polybar, so a thing to play and customize -->
    <NavBar selected={AppData.selected} NavItemList = {AppData.NavBar} />

    {#if AppData.selected === 0}
		<Calendar allReminders={AppData.Calendar} {view} />
    {:else if AppData.selected === 1}
		<Workspace />
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