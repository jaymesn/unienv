<script lang="ts">
	import Tabs from "./Shared/Tabs.svelte"
	import Tab from "./Shared/Tab.svelte"
	import Calendar from "./Calendar/Calendar.svelte";
	import Thoughts from "./Thoughs/Thoughts.svelte";
	import Workspace from "./Workspace/Workspace.svelte";
</script>

<main>
	<!-- pass in a list of tab components that you can edit from app.svelte -->
	<Tabs TabList={[
		{
			component:Calendar,
			title:"Calendar",
			icon:"\_(^o^)_/"
		}
	]}/>
</main>

<style>
</style>