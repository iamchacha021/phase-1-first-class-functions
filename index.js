function receivesAFunction(spy){
    return spy();
}
console.log(receivesAFunction(function (){return 4 + 5}))


var fn = function(){
    return 56 * 30;
}
function returnsANamedFunction(){
    return fn;
}


function returnsAnAnonymousFunction(){
    return function(){return 5347 - 543865}
}