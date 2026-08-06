// varibles stores the data and value 
// there are many problem with var 

// --> Problem 1 => Redeclaration

var user="Ali";
var user="Ahmad";
console.log(user); // user will return the new assigned value


// -->  Problem 2 => var ignores the block scope

if(true){
    var age=21;
}
console.log(age); // result 21 =>dangerous that can create the overRight and conflict 

//--> Problem 3 =>loop variables leaking out side
for (var i=0 ; i<6;i++){
    console.log(i);
}
console.log(i); // 6 

//--> Problem 4: Hoisting confusion
// var declaretion is hoited and intialized with undefined || no clear error 
console.log(item);

var item="Laptop";

// output => undefined => so the developer suppose that the function not existed 

//--> Problem 5 => global variable with var => become the property of global object that causes naming collision 
// and unintented side effects 
var myName= "shahziab";
console.log(window.myName);



/*  
Note :
     var was the first varible created in 1995 so it have many problem , 
     why js fix var?
     million of websites already using var so the existing websites would break 
     * so later the js resolve this issue by itroducing the modern varibles let and const 
*/