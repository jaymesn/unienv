<script lang="ts">

    import Notes from "../../WorkspaceComponents/Notes/Note.svelte";
    import ThoughtGraph from "../../WorkspaceComponents/ThoughtGraph/ThoughtGraph.svelte";
    import type { 
        WSContainer,
        Workspace,
        WSCdata, 
    } from "../../@types/all";

    export let selected:string;
 


</script>

<div class="ws-root">

</div>
<style>
    .ws-root {
        width:100%;
        height:100%;

        display:grid;
        grid-template-columns:1fr ;
        grid-template-rows:1fr;
        grid-gap:1vh;

    } 
</style>