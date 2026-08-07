

function coerceCheck(a,b){
    console.log(`${a}==${b}`,a==b)
    console.log(`${a}===${b}`,a===b)
}

coerceCheck(0, "0");
coerceCheck(false, 0);
coerceCheck(false, "");
coerceCheck(null, undefined);
coerceCheck("5", 5);
coerceCheck(true, 1);
coerceCheck([], false);
coerceCheck(NaN, NaN);

// checks the truthy and falsy values

console.log(Boolean({}))
console.log(Boolean([]));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(0n));
console.log(Boolean('0'));
console.log(Boolean(NaN));
console.log(Boolean("user"));



// --------------------------------------------

function safeAdd(a,b){
    if(typeof(a)==="number" && typeof(b)==="number"){
        console.log(a+b);
    }else{
        console.log("invalid input , no implicit coercion allowed")
    }
}

safeAdd(5,5);


//-----------------------------------------------

/*

Q-Why let/const replaced the var in modern era ?
Answere: because there was many issues with var . 
var redeclaration may cause the variable collion or overwrite the veriable .
var is not block scope its value is accessible even outside the scope .
it creates the hoiting confusion because in creation of execution context var is initialized with undefined 
so that makes confusion even the varibale exists it show undefined ;
so let and const solves these issue => they can't be redeclared and both are function scope and block scope and solve the hoiting confusion both stored in memory uninitialized .




*/

//  Write a typeOf(value) function that correctly identifies arrays and null (typeof alone fails on both) without using any library

function typeOf(value) {
    // to conver the type of null from object to null
    if (value === null) {
        return "null";
    }
    // to convert type of array to array
    if (Array.isArray(value)) {
        return "array";
    }

    return typeof value;
}

console.log(typeOf(null));       // null
console.log(typeOf([]));         // array
console.log(typeOf("hello"));    // string
console.log(typeOf(25));         // number
console.log(typeOf(true));       // boolean