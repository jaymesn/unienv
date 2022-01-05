<script lang="ts">
import Workspace from "../TabComponents/Workspace/Workspace.svelte";

    import TabBar from "./TabBar.svelte"
    import TabContainer from "./TabContainer.svelte";
    interface TabPropTemplate{

        /* figure out how to type out a default svelte compoent */
        component:any /* add the actual svelte compnent type later*/
        icon:string   /* add the actuall svg import type later */
        title:string
    }

    export let selected:number;
    export let TabList:TabPropTemplate[];

    // this is simply the 
    let TabDataList = TabList.map(Tab=> {return {"icon":Tab.icon,"title":Tab.title}})
    let TabComponentList = TabList.map(Tab => Tab.component);
    
    interface Dates {
        0?: {}
        1?: {}
        2?: {}
        3?: {}
        4?: {}
        5?: {}
        6?: {}
        7?: {}
        8?: {}
        9?: {}
        10?:{}
        11?:{}
        12?:{}
    }
    interface WorkspaceData {}
    interface ThoughtGraph {}

    type Data = {

        layout:WorkspaceData,
        notes:ThoughtGraph,
        dates:Dates

        tabLayout:Array<{"icon":string,"title":string}>
        selected:number

        
    }
    
    // this is all of the dynamic data in the application  . . . .
    // figure out how to react to it
    let AppData:Data = {
        "layout":{},
        "tabLayout":TabDataList,
        "notes":{},
        "dates":{},
        "selected":selected
    };




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