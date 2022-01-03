<script lang="ts" >
import { loop_guard } from "svelte/internal";
import App from "../App.svelte";

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
        <button class="titleButton"> {Button.icon} {Button.title}</button>
    {/each}
</div>
<style>
    :root {
        --btn-size:30%
    }
    .titleButton{
        height: inherit;
        width:calc(30% * var(--btn-size));
    }
    .bar{
        background-color:red;
        height: 50px;
        width:inherit;
        display:flex;
        justify-content: center;
    }
</style>