/*
// let can't be redeclared 

 let a=10;
 let a=20;

console.log(a); // uncaught syntext error 

// let can be reassingned 

let b=2;
b=3;
console.log(b); // b=3

// let is block scope , can't be accessed outside block 

if(true){
    let c ="cat";
}
console.log(c) //refrence error can't be accessed 

//let is function scope 

function history(){
    let subject="history ";
}
console.log(subject);


// let solves the hoisting confusion

console.log(book);  // it simple shows the veriable exists but not initialized 
let book="english"; 

*/