class Greeter{
    private _msg : string;
    constructor(initMsg: string){
        this._msg = initMsg; 
    }
    greet(initMsg: string): string{
        //console.log('Hello ' + this._msg);
        return 'Hello ' + initMsg;
    }
}

let objGreet = new Greeter('Everyone');
objGreet.greet('Everyone');
