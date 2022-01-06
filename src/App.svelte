<script lang="ts">
	import type { Data } from "./@types/Types.svelte"

    import NavBar from "./Shared/NavBar.svelte"
	import Error from "./Shared/Error.svelte"

	import Calendar from  "./TabComponents/Calendar/Calendar.svelte";
	import Thoughts from  "./TabComponents/Thoughs/Thoughts.svelte";
	import Workspace from "./TabComponents/Workspace/Workspace.svelte";

    
    let AppData:Data = {

        NavBar:[
			{ title:"Calendar", icon:" (^o^) "},
			{ title:"Workspace", icon:" idk? "},
			{ title:"Thought Graph", icon:" (#_#) "}
		],
        selected:0,

        Workspace:{},
        ThoughtNote:{},
		Calendar:{},        
    };

</script>

<div class="root">

    <NavBar selected={AppData.selected} NavItemList = {AppData.NavBar} />
    {#if AppData.selected === 0}
        <!-- render calendar -->
    {:else if AppData.selected === 1}
        <!-- render Workspace-->
    {:else if AppData.selected === 2}
        <!-- render Notes-->
    {:else}
        <Error name="Something Went Wrong"/>
    {/if}

</div>

<style>
	.root{
        width:100vw;
        height:100vh;
        display:flex;
        flex-direction:column;
    }
</style>