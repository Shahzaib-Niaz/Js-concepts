
// const can't be redeclared 
const a=1;
const a=2;
console.log(a); // redeclaration error 

// const can't be re assigned 
const b=2;
b=4; 
console.log(b) // re assignement error 


// const like let , is funciton scope and block scope 


/*
  note :
        const is safe and senoir developers prefers it where they don't want to reamin the value of 
        variable constant .... can't be changed or redeclared accidently 
        therefore the const is considered safe . Because it solves the hoisting confusion because 
        it is stored as uninitialize . 

*/
