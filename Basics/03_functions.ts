function addTwo(num:number){
    return num+2;
}

function getUpper(val:number){
    return val;
}

function signUpUser(name :string, email:string , isPaid:boolean){

}

let loginUser = (name :string, email:string , isPaid:boolean = false)=>{

}

addTwo(4);
getUpper(4);
signUpUser("Arpita","Arpita@gmail",true);
loginUser("h","h@h.com");

// Better way to write functions

function getValue(myVal:number):string{
    if(myVal>5){
        return "true";
    }
    return "200 Ok";
}

const heros = ["spiderman" , "ironman" , "thor"];

heros.map((hero):string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string):void{
    console.log(errmsg);
}
// never -> The never type represents values which are never observed.In a return type,
// this means that the function throws an exception or terminates execution of the program.

/*function handleError(msg:string) : never {
    console.log(msg);
}*/

export {}