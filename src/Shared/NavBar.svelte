<script lang="ts" >
    import type { NavItem } from "../@types/Types.svelte"
    export let selected:number;
    export let NavItemList:Array<NavItem>;


</script>
<div class="bar">

    {#each NavItemList as Button,indx  }    
        {#if indx === selected}
            <button> {Button.icon} {Button.title}</button>
        {:else}
            <button> {Button.icon} {Button.title}</button>
        {/if}

    {/each}

</div>
<style>
    :root {
        --var:15%;
    }
    button {
        height:inherit;
        width:var(--var);
    }

    .bar{
        background-color:red;
        height: 50px;
        width:inherit;
        display:flex;
        justify-content: center;
    }
</style>