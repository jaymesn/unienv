<script lang="ts">
	import Tabs from "./Shared/Tabs.svelte"
	import Calendar from "./TabComponents/Calendar/Calendar.svelte";
	import Thoughts from "./TabComponents/Thoughs/Thoughts.svelte";
	import Workspace from "./TabComponents/Workspace/Workspace.svelte";
</script>

<main>
	<!-- pass in a list of tab components that you can edit from app.svelte -->
	<Tabs TabList={[
		{
			component:Calendar,
			title:"Calendar",
			icon:"\_(^o^)_/"
		},
		{
			component:Workspace,
			title:"Workspace",
			icon:"idk?"
		},
		{
			component:Thoughts,
			title:"Thought Graph",
			icon:" \ (* .) / "
		}

	]}/>
</main>

<style>
</style>