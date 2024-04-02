const User = {
    name:"arpita",
    email:"arpita@gmail.com",
    isActive:true
}

function createUser({name:string , isPaid : boolean}){

}

let newUser = {
name: "arpita",
isPaid:false,
email:"arpita@gmail.com"
}

createUser(newUser);

 //       object :       return type :             defination
function createCourse():{name:string , price:number} {
    return {name:"reactjs",price:399}
}

export {}