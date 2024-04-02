// // console.log("typescript is here")

// // Classes

// class User{
//     email:string
//     name:string
//     constructor(email:string,name:string){
//         this.email = email;
//         this.name = name
//     }
// }

// const arpita = new User(email:"a@gmail.com",name:"arpita");
// arpita.city = "pune";

// Private and public


class User {
    protected _courseCount = 1;
    readonly city: string = "goa";
    constructor(
        public email: string,
        private name: string
    ) {}

    private deleteToken() {
        console.log("Token deleted");
    }

    get getAppleEmail(): string {
        return `apple${this.email}`;
    }

    
    get courseCount(): number {
        return this._courseCount;
    }

   
    set courseCount(courseNum: number) {
        if (courseNum <= 1) {
            throw new Error("course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}

class SubUser extends User {
    isFamily: boolean = true;
    
    changeCourseCount() {
        this._courseCount = 4; 
    }
}

const arpita = new User("a@gmail.com", "arpita");
