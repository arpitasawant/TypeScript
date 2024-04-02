interface UserData{

    readonly dbId : number,
    email:string,
    userId:number,
    googleId?: string,
    startTrail :()=> string
    // another way
    // startTrail() : string
    getCoupon(couponname: string, value: number): number
}

const data3 :UserData = {dbId:22,email:"sg@gmail",userId:1313,googleId:"32"
,
startTrail:()=>{
    return "trail started"
}
,
getCoupon:(name:"arpita",off:10)=>{
    return 10;
}
};



