<script lang="ts">
	import Tabs from "./Shared/Tabs.svelte"
	import Tab from "./Shared/Tab.svelte"
	import Calendar from "./Calendar/Calendar.svelte";
	import Thoughts from "./Thoughs/Thoughts.svelte";
	import Workspace from "./Workspace/Workspace.svelte";
</script>

<main>
	<Tabs>
		<Tab component={Calendar} title="Calendar" icon="\_(^o^)_/"/>
	</Tabs>
		

</main>

<style>
</style>