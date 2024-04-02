abstract class TakePhoto{
constructor(
    public cameraMode:string,
    public filter:string
){}

abstract getSepia():void

getReeltime():number{
    return 8;
}
}

class Insta extends TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){
        super(cameraMode,filter);
    }

    getSepia(): void {
        console.log("sepia");
    }
}

const as = new Insta("test","test",3)