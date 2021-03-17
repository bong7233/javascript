const sum = function (...args){
    console.log(args);
    let sum = 0;
    for (let i = 0; i < args; i++){
        sum += args[i];
    }
    return sum;
}

sum(1,2,3);