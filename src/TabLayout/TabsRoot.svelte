<script lang="ts">
    import TabBar from "./TabBar.svelte"
    import TabContainer from "./TabContainer.svelte";
    interface TabTemplate{

        /* figure out how to type out a default svelte compoent */
        component:any /* add the actual svelte compnent type later*/
        icon:string   /* add the actuall svg import type later */
        title:string
    }

    export let selected:number;
    export let TabList:TabTemplate[];
    let TabDataList = TabList.map(Tab=> {return {"icon":Tab.icon,"title":Tab.title}})
    let TabComponentList = TabList.map(Tab => Tab.component);

</script>


<div class="wrapper">
    <TabBar {selected} {TabDataList} />
    <TabContainer component = {TabComponentList[selected]} />
    <!-- <svelte:component this={} /> -->
</div>

<style>
    .wrapper{
        width:100vw;
        height:100vh;
        display:flex;
        flex-direction:column;
    }
</style>