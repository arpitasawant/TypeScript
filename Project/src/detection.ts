// Narrowing

function detectType(val: number | string) {
    if (typeof val === "string") {
        return val.toLowerCase()
    }
    return val + 3;
}

function provideId(id: string | null) {
    if (!id) {
        console.log("please provide id")
        return
    }

    id.toLowerCase()
}


function printAll(strs: string | string[] | null) {

    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }

        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}

// in operator
interface User {
    username: string,
    email: string
}

interface Admin {
    username: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin
    }
}

// instanceOf


function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}

type Fish={
    swim:()=>void;
}

type Bird={
    swim:()=>void;
}

function isFish(pet : Fish | Bird):pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet:Fish|Bird){
    if(isFish(pet)){
    pet 
    return "fish"
}else{
    pet 
    return "bird"
}

}

// Discriminated Union and Exhaustiveness Checking with never

interface Circle{
    kind:"Circle",
    radius:number
}

interface Square{
    kind:"Square",
    side:number
}

interface Rectangle{
    kind:"rectangle",
    length:number,
    width:number
}

type Shape = Circle | Square

function getShape(shape:Shape){
    if(shape.kind === "Circle"){
       return Math.PI * shape.radius ** 2;
    }

    return shape.side*shape.side
}