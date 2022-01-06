<script lang="ts">

	import type { Data } from "./@types/Types.svelte"

    import NavBar from "./Shared/NavBar.svelte"
	import Error from "./Shared/Error.svelte"

	import Calendar from  "./TabComponents/Calendar/Calendar.svelte";
	import ThoughtNotes from  "./TabComponents/ThoughtNotes/ThoughtNotes.svelte";
	import Workspace from "./TabComponents/Workspace/Workspace.svelte";

    let AppData:Data = {

        NavBar:[
			{ title:"Calendar", icon:" (^o^) "},
			{ title:"Workspace", icon:" idk? "},
			{ title:"Thought Graph", icon:" (#_#) "}
		],
        selected:0,

        Workspace:new Map(),
		/*
		:{ 1:new Map(Object.entries({"workspaceName":[
				{
					"date":[0,0,0],
					"name":"",
					"icon":"",
				}
		*/
        ThoughtNote:{},
		Calendar:{
			1:{ 
				1:new Map(Object.entries({"workspaceName":[{"date":[0,0,0],"name":"","icon":"",}]})), 
				2:new Map(Object.entries({"workspaceName":[{"date":[0,0,0],"name":"","icon":"",}]})), 
				3:new Map(Object.entries({"workspaceName":[{"date":[0,0,0],"name":"","icon":"",}]})), 
				4:new Map(Object.entries({"workspaceName":[{"date":[0,0,0],"name":"","icon":"",}]})), 
				5:new Map(Object.entries({"workspaceName":[{"date":[0,0,0],"name":"","icon":"",}]})), 
				6:new Map(Object.entries({"workspaceName":[{"date":[0,0,0],"name":"","icon":"",}]})), 
				7:new Map(Object.entries({"workspaceName":[{"date":[0,0,0],"name":"","icon":"",}]})), 
				8:new Map(Object.entries({"workspaceName":[{"date":[0,0,0],"name":"","icon":"",}]})) 
			}
		},        

    };
	Object.keys(AppData.Calendar)
</script>

<div class="app-root">

    <NavBar selected={AppData.selected} NavItemList = {AppData.NavBar} />
    {#if AppData.selected === 0}
		<Calendar allReminders={AppData.Calendar}/>
    {:else if AppData.selected === 1}
		<Workspace />
    {:else if AppData.selected === 2}
		<ThoughtNotes />
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