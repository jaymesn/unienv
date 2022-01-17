interface Workspace {
    rootContainer:WSContainer
}

interface WSCdata<T> {
    "generic":T
}

interface WSCdata<T> {
    "generic":T
}

interface WSCchild {
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
    items:Map<string,WSContainer> 
}

interface WSCchild {
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
    items:Map<string,WSContainer> 
}


export type WorkspaceData = Map<workspaceName,Workspace>

