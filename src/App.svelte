<script lang="ts">
	import TabsRoot from "./TabLayout/TabsRoot.svelte"
	import Calendar from  "./TabComponents/Calendar/Calendar.svelte";
	import Thoughts from  "./TabComponents/Thoughs/Thoughts.svelte";
	import Workspace from "./TabComponents/Workspace/Workspace.svelte";
</script>

	<!-- pass in a list of tab components that you can edit from app.svelte -->
	<TabsRoot 
		selected={0}
		TabList={[
			{ 
				component:Calendar, 
				title:"Calendar",
				icon:" (^o^) "
			},
			{
				component:Workspace,
				title:"Workspace",
				icon:" idk? "
			},
			{
				component:Thoughts,
				title:"Thought Graph",
				icon:" (#_#) "
			}

	]}/>
<style>
</style>