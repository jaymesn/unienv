<script lang="ts">
    import Note from "../../WorkspaceComponents/Notes/Note.svelte";

    import type { 
        Workspace, 
    } from "../../@types/all";

    let newWorkspace :Workspace = {

        rootContainer:{
            data:{
                component:Note,
                settings:{},
                child:new Map()
            },
            layout:{
                format:{
                    overflow:{ x: "scroll", y:"expand"},
                    size:{ x:"F", y:"F"},
                    pos:{ x:"M", y:"M"},
                    pad:{
                        left:0,
                        right:0,
                        top:0,
                        bottom:0
                    }
                },
                child:{
                    colums:{ amount:1, size:"F" },
                    rows:{ amount:1, size:"F" },
                    custom:[]
                }
            },
            transition:{}
        },
        colums:{ amount:1, size:"F" },
        rows:{ amount:1, size:"F" },
        
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


<div>
    <p>Hello There .</p>
</div>



<button> workspace </button>
<style>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div > p {
        font-size:30vh;
    }
    /* your styles go here */
</style>