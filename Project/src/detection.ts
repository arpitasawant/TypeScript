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
interface User{
    username:string,
    email:string
}

interface Admin{
    username:string,
    email:string,
    isAdmin:boolean
}

function isAdminAccount(account : User | Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }
}