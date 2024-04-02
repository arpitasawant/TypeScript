// Can be use to specify more than one type "|"

let score : number|string;
score = 3;
score = "3";

type UserDetails = {
    name:string,
    id:number
}

type Admin = {
    username :string,
    id:number
}

let arpita: UserDetails | Admin = {
    name:"arpita",
    id:63
}

arpita = {username:"a",id:63}


// function getDbId(id:number | string){
//     // making some API calls
//     console.log(`DB id is: ${id}`);
// }

getDbId(3);
getDbId("3");

function getDbId(id:number | string){
    if(typeof id === "string"){
        id.toLowerCase();
    }
}

const data1 : number[] = [1,2,3]
const data2 : string[] = ["1","2","3"]
// Both types in array

const data: (number | string)[]=["1","2","3",1]