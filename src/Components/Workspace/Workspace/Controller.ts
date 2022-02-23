import { component_subscribe, destroy_block, init } from "svelte/internal";
import type { 
    WSContainer, WSContainerJSON,
    Workspace, WorkspaceJSON, 
    WorkspaceData, WorkspaceDataJSON 
} from "./Types"

export class Controller {
    constructor(){}
    async importString(URL:string):Promise<WorkspaceData>{

        function initRecursiveWSC(InputContainer:WSContainerJSON):WSContainer {
            let OutputContainer:WSContainer = {
                title:InputContainer.title,
                component:InputContainer.component,
            }

            if(InputContainer.child){
                OutputContainer.child = {
                    gridLayout:{
                        rows:{ amount:1, size:"1fr"},
                        columns:{ amount:1, size:"1fr"}
                    },
                    items:new Map()
                };
                OutputContainer.child.gridLayout = InputContainer.child.gridLayout;
                for(let j =0; j<InputContainer.child.items.length; j++){
                    let [WSCname,WSC_JSON] = InputContainer.child.items[j]
                    let WSC:WSContainer = initRecursiveWSC(WSC_JSON)
                    OutputContainer.child.items.set(WSCname,WSC)
                }
            }

        

            return OutputContainer;

        }

        let WorkspaceData:WorkspaceData = new Map();
        let data_uninit:any = {};
        data_uninit = await fetch(URL).then(string=>string.json())


        // since workspaces can't container each other we use a for loop instead of function calls to init
        for(let i = 0; i<data_uninit.length;i++){
            let WS:any = {
                rootContainer:{}
            }; 
            let [WSname,WS_JSON] = data_uninit[i];

            WS.rootContainer = initRecursiveWSC(WS_JSON.rootContainer);

            WorkspaceData.set(WSname,WS as Workspace);
        }
        
        return WorkspaceData 
    

    }
}