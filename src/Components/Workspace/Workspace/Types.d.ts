export interface Workspace {
    rootContainer:WSContainer
}
export interface WorkspaceJSON {
    rootContainer:WSContainerJSON
}
export interface WSContainerJSON {
    title?:string
    component:{
        type:"TG"|"Note"|"Root"
        data:WSCdata<null>
    },
    child?:WSCchildJSON
}

interface WSCdata<T> {
    "generic":T
}


interface WSContainer {   
    title?:string
    component:{
        type:"TG"|"Note"|"Root"
        data:WSCdata<null> //** THIS IS THE SVELTE APP data specific to each type 
    },
    child?:WSCchild
       
    // you order the components by putting x-index as char 0 and y-index as char 1 



}
interface WSCchildJSON {
    gridLayout:{
        rows:{
            amount:number
            size:string|string[]
        }
        columns:{
            amount:number
            size:string|string[]
        }
    }
    items:[string,WSContainerJSON][] 
}
interface WSCchild {
    gridLayout:{

        // the sizes of multiple grid elements 
        // is an array because the repeat() function in css
        // only "repeats" once  
        rows:{
            amount:number
            size:string|string[] 
        }
        columns:{
            amount:number
            size:string|string[]
        }
    }
    items:Map<string,WSContainer> 
}


export type WorkspaceData = Map<workspaceName,Workspace>
export type WorkspaceDataJSON = [workspaceName,WorkspaceJSON][]

