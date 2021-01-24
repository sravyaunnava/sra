function prime(n){
    var count=0;
    for(var i=1;i<=n;i++){
     
    if(n%i==0){
        count++
    }
}
    if(count==2){

        return 'this is a prime number';
    }
    else{
        return 'this is not a prime number';
    }
}

    
exports.prime=prime
console.log("done")