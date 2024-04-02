const score: Array<number> = []

const names: Array<string> = []

function identityOne(val:boolean|number):boolean|number{
    return val;
}

function identityTwo(val:any):any{
    return val;
}

function identityThree<Type>(val:Type):Type{
    return val
}

// identityThree("3");
// identityThree(3);

function identityFour<T>(val:T):T{
    return val
}

interface Bottle{
    brand:string,
    type:number
}

// identityFour<Bottle>({brand:"zara",type:3})

// Generic in array and arrow function
function getSearchProducts<T>(products:T[]):T{

    // some database operations
    const myIndex =3
    return products[myIndex]
}

const getMore = <T,>(products:T[]): T=> {
    const myIndex = 4
    return products[myIndex]
}

interface Datbase{
    connection:string,
    username:string,
    password:string
}
function anotherFun<T,U extends Datbase>(valOne:T,valTwo:U):object{
    return{
        valOne,
        valTwo
    }
}

// anotherFun(3,{});

interface Quiz{
    name:string,
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string
}

// Generic Classes
class Sellable<T>{
    public cart:T[] = []

    addToCart(product:T){
        this.cart.push(product)
    }
}