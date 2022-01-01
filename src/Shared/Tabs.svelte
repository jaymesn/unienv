<script lang="ts">
    import type { SvelteComponent } from "svelte/internal";
    interface JSONTabTemplate{

        /* figure out how to type out a default svelte compoent */
        component:any /* add the actual svelte compnent type later*/
        icon:string   /* add the actuall svg import type later */
        title:string
    }

    import Tab from "./Tab.svelte";
    export let TabList:JSONTabTemplate[];
</script>

<main>
    {#each TabList as TabJSON}
        <Tab title={TabJSON.title} icon={TabJSON.icon} component={TabJSON.component}  />
    {/each}
</main>

<style>
    
</style>