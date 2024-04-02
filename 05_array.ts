const superHeros: string[] = []
// const heroPower : number[] = []

// another way to declare an array

const heroPower: Array<number> = []

type User = {
    name:string,
    isActive:boolean
}

const allUsers: User[] = []

superHeros.push("spiderman");
heroPower.push(1);

allUsers.push({name:'',isActive:true})

// nested Array

const Models : number[][] = [
    [1,2,3],
    [3,2,1]
]