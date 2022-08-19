function receivesAFunction (callback){
    callback();
}
function returnsANamedFunction(){
    const myTown = function (){
    console.log("Nairobi");
    };
    return myTown;
}
function returnsAnAnonymousFunction(){
    return function() {
        console.log ("I don't have a name!");
    };
}