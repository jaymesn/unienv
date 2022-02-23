import { writable } from "svelte/store"
import type { Writable } from "svelte/store"
type fileOptions = {
    // where the resource is coming from not its relative location
    "loc": "localStorage"|"network"|"app", 

    // link to the file/key for localStorage 
    "name":string,                  

    // file type
    // ( for when we use other stuff like .jmul)
    // or when we want dereferenced data from AppData
    "type":"JSON"                   
}
export class BaseDataSubComponent<DataTypeInit,DataTypeUninit,StateType> { 
    public state:Writable<StateType>;
    public data:DataTypeInit;
    constructor(initFileOptions?:fileOptions){

        this.state = writable( this.createState(`
        Overide the createState method so that
        this message isn't returned and a empty/initail 
        state object of the type StateType is returned 
        `) );
        /* if u see this message you still need to do this */

        this.data = this.createData(`
        Overide the createData method so that
        this message isn't returned and a empty/initail 
        state object of the type DataType is returned 
        `);
        /* if u see this message you still need to do this */

        if(initFileOptions){
            this.load(initFileOptions)
        }
    }
    //don't overide these
    save(opts:fileOptions){
        switch (opts.loc){
            case "localStorage":
                break;
            case "network":
                break;
            default:
                break;
        }
    }
    load(opts:fileOptions){
        switch (opts.loc) {
            case "localStorage":
                
                break;
            case "network":
                let data_promise = this.networkLoad(opts.name)
                data_promise.then(data_uninit=> {
                    this.data = this.UnSerializeData(data_uninit);
                    // trigger a state update here that
                    // communicates a succefful init 
                })
                break;

            default:

                break;
        }
    }

    async networkLoad<T>(URL:string):Promise<string>{
        return await fetch(URL).then(string=>string.text());
    }

    // methods to be overiden

    /*THIS ONE*/createState(message:string):StateType{
        console.log(message);
        let emptyState = message; 
        return ( emptyState as unknown as StateType )
    }

    /*THIS ONE*/createData(message:string):DataTypeInit{
        console.log(message);
        let emptyData = message; 
        return ( emptyData as unknown as DataTypeInit )
    }

    /*THIS ONE*/SerializeData(){
        // copy what u did for UnSerialize here 

    }

    /*THIS ONE*/UnSerializeData(dataString:string ):DataTypeInit {

        // might wanna put this in the implementation
        // or overide function instead of leaving it here

        let data_uninit:DataTypeUninit = JSON.parse(dataString) 
        return this.createData(`
        Overide the UnSerializeData method so that
        this message isn't returned and that the intended
        code used to Unserialize and fully initailize
        data being stored here is returned instead 
        `); 
    }


}
