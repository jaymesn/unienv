<script lang="ts">
	
	import Error from "./Shared/Error.svelte"

	import Calendar from  "./TabComponents/Calendar/Calendar.svelte";
	import Workspace from "./TabComponents/Workspace/Workspace.svelte";
    let AppData = {

        NavBar:[
			{ title:"Calendar", icon:" (^o^) "},
			{ title:"Workspace", icon:" idk? "},
		],
        selected:1,

        Workspace:new Map(),

		// redo this so that the types corrospond better with the html
		Calendar:new Map([
			[
				2022,{
					1:{
						2:new Map([
							["ws1",[
								{
									pathInWorkspace:"",
									name:"hello",
									icon:"blue"

								},	
								{
									pathInWorkspace:"",
									name:"hello",
									icon:"blue"

								}
							]],	
							["ws2",[
								{
									pathInWorkspace:"",
									name:"hello2",
									icon:"red"

								},	
								{
									pathInWorkspace:"",
									name:"hello2",
									icon:"red"

								}
							]]
						]),
					}			 
				}
			]]
		)
		        

    };
	$: AppData;
	(window as any).AppData = AppData;
	Object.keys(AppData.Calendar);

</script>

<div class="app-root">
	<!-- make this less for navigatio and more like polybar, so a thing to play and customize -->

    {#if AppData.selected === 0}

		<Calendar allReminders={AppData.Calendar}/>

    {:else if AppData.selected === 1}
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