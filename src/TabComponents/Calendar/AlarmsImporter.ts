import type { Alarms,AlarmsJSON } from "./Calendar"

export async function importString(URL:string):Promise<Alarms>{
    let data_uninit:AlarmsJSON = await fetch(URL).then(string=>string.json());
    let AlarmData:Alarms = new Map();

    // first loop through each month
    // then loop through each day(yes selected them based on if they are 31,30 or 29 day months)
    // thats all the maps you have to loop through
    for(let i =0;i<data_uninit.length;i++){
        let [year,yearAlarms] = data_uninit[i];
        for(let j=1;j<13;j++){
            console.log(yearAlarms[j])// j is the monthnum
        }
    }
}