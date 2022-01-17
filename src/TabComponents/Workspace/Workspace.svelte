<script lang="ts">

    import Notes from "../../WorkspaceComponents/Notes/Note.svelte";
    import ThoughtGraph from "../../WorkspaceComponents/ThoughtGraph/ThoughtGraph.svelte";
    import type { 
        WSContainer,
        Workspace,
        WSCdata, 
    } from "../../@types/all";

    export let selected:string;

    let container1_wsData:WSCdata<1> = { "generic":1 }
    let container1:WSContainer = {

        title:"this is a title for Container1",

        discription:"discription for Container1",
        component:{
            type:"TG",
            data:container1_wsData
        }
    }

    let newWorkspace: Workspace = {
        rootContainer:{
            component:{
                type:"Note",
                data:{
                    base:"field"
                }
            },
            discription:"",
            title:"",
            child:new Map([
                ["Container",container1]
            ])
        },

        
    }




   
    /*
    this is where u take ur thought graphs and add formatting
    and other forms of content IE panels,imgs,iframes
    */

    /*                     ** REPLACE THE COMPOENT WITH A WORKSPACE MODE NOTE A SEPARATE APP **
    this should a TEXT only component where 
    yes you can nest text into other text 
    but the formatting is done in a different component
    this in a sense is just a Template or interface that you 
    layout the structure of what your thinking about */
    

    /*
    make sure the templateing feature 
    uses naviatgion to when focuesed 
    on a element it display a layout
    */

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