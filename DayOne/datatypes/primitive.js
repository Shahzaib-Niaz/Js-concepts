// Primitve data types stores single and simple value 

// 1-String :string stores the text value written in ""
let name="shahzaib";
console.log(typeof(name));// string 

// 2-Number :  numeric data
let x=10;
console.log(typeof(x)); // numbere

// 3- Boolean : in true or false
const isValue=true;
console.log(typeof(isValue));

// 4- undefined : data which is not defined
let age;
console.log(typeof(age));

// 5-null
let empty=null;
console.log(typeof(empty)); // object ----> bug in js 

// 6- symbol

let id1=Symbol();
console.log(typeof(id1)); // symbol

// 7-bigInt : when working with integers beyong js safe integer range
const big = 123432n;
console.log(typeof(big))


