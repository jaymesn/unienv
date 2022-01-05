<script lang="ts" >

    //export let TabList:Array<TabTemplate>
    interface BarButtonTemplate {
        icon:string,/* figure out how to type out that it should be a img file or something */
        title:string
    }

    export let selected:number;
    export let TabDataList:Array<BarButtonTemplate>;

    console.log(TabDataList);

</script>
<div class="bar">
    {#each TabDataList as Button,indx  }    
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