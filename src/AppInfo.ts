type ComponentTypeNamesArray = ["Note","Calendar","Workspace","Img"];

type ComponentTypeNames = "Note"|"Calendar"|"Workspace"|"Img";
type ComponentSubType = "Data"|"Controller"|"UI";

interface debugInfo {
    name:{
        on:boolean
        Component?:ComponentTypeNames
    }
}
interface Data {}
interface Controller {}

interface BaseComponent< T1 extends Data, T2 extends Controller, T3 > { Data:T1, Ctrl:T2, UI:T3 } 

// the purpose of this file is to first define . . 
/*

    what the base of state-share-able compnent should look like

    Data should  . . . 
    save,load,Serialze,Unserialize while communicating its state
    ALSO multiple controllers should be able to controller one Data SubComponent
    [ 
        NOTE:
        so i finished this however. . .
        - HOW TO HANDLE CONSTRUCTOR OVER LOADS is very import becuase i currently don't know if you CAN 
          spend some time figuring that out   
          [REFERENCE: https://stackoverflow.com/questions/12702548/constructor-overload-in-typescript]

        - a working Calendar Data subcomponent implementaion still needs to be writen.
        - how to handle multiple components needs to be addressed.
        would be idea 
    ]
    

    
    Controller should . . .
    handle switching its data subcomponent and manipulating it as well

        ( add stuff u think u need here)


    UI should . . .
    just be ui that inserted into the dom at will 

        ( add stuff u think u need here)

*/

// handle managment of Components and sub components when they load/un-load
/*

    define how and where to make and store them in 
    * this is so that when the component is unloaded or outoff scope we still have access to certain things

*/


// this is definng that actual component not where and how we store and retrive it 
interface Note extends BaseComponent<string,string,string>{}
interface Calendar extends BaseComponent<string,string,string>{}
interface Workspace extends BaseComponent<string,string,string>{}
interface Img extends BaseComponent<string,string,string>{}


type ComponentTypes = Note|Calendar|Workspace|Img;

interface Components {
    Note:Note
    Calendar:Calendar
    Workspace:Workspace
    Img:Img
}

export class AppInfo {
    private data:any
    constructor(){
        let test:Note = {
            Data:"hello",
            Ctrl:"hello",
            UI:"hello"

        }

    }

    // add try catch for runtime error checking
    delete():void {
    }

    create( component:ComponentTypeNames, type:ComponentSubType ):void{
    }
   
    // add other array manipulation methods later
    
}