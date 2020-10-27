// Original code. Modified to accomodate test 2 onwards. 
// const add = (a,b) => a + b;


// Modified code. 

// const add = (a = 0,b = 0) => {
//     if (typeof a !== 'number' || typeof b !== 'number' ){
//         return  0;
//     }
//     return  a + b;
// }


// Coding the fibonacci sequence
function fibonacci(num){
    if( num = -1){
        return 0
    }
    if(typeof num !== 'number'){
        return 0
    }
    if(num < 2){
        return num
    }
    fibonacci(num-1) + fibonacci(num-2);
}

var number;

function factorial(number){
    if(number < 0){
       return 0
    }
    if(number <= 1){
        return 1
    }
    return number * factorial(number - 1)
}

// console.log(factorial(10));

module.exports = {
    // add,
    fibonacci,
    factorial

};