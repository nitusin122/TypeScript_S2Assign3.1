var Greeter = (function () {
    function Greeter(initMsg) {
        this._msg = initMsg;
    }
    Greeter.prototype.greet = function (initMsg) {
        //console.log('Hello ' + this._msg);
        return 'Hello ' + initMsg;
    };
    return Greeter;
}());
var objGreet = new Greeter('Everyone');
objGreet.greet('Everyone');
