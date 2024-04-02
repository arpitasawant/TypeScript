interface UserData {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    startTrail: () => string
    // another way
    // startTrail() : string
    // getCoupon(couponname: string, value: number): number
}

interface UserData {
    githubToken: string
}

interface AdminData extends UserData {
    role: "admin" | "ta" | "learner"
}

const data3: AdminData = {
    dbId: 22,
    role: "admin",
    email: "",
    userId: 0,
    startTrail: function (): string {
        throw new Error("Function not implemented.")
    },
    githubToken: ""
}
   

// diff between interface and type aliases

// Interface:Adding new fields to an existing interface
// Type: A type cannot be changed after being created