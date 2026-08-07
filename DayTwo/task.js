//Task 1: Write a makeCounter() function using a closure that returns increment(), decrement(), and getValue() methods sharing private state

function makeCounter(){
    let couter=0;
    return{
        increment(){
            return couter=couter+1;
        },
        decrement(){
           return couter=couter-1;
        },
        getValue(){
           return couter;
        }
    }
}

const getCounter=makeCounter();
// console.log(getCounter.increment());
// console.log(getCounter.decrement());
// console.log(getCounter.getValue());

/*

clouser : in this case we can see that the parent function makeCounter execution is finished but the child function 
still calling the parent function how it is possibel .... it is possible due to the children function are store the lexical scope of its parent .... that's reason the outer function still alive and child can call it 

*/


// ----------------------------------------------------------------

// task 2: Write a function once(fn) that returns a new function which can only be called one time — subsequent calls return the first result (classic closure interview question)

function sayHello(){
    console.log("called");
    return 100;
}

function once(fn){
    let called=false;
    let result;
    
    return function(){
        if(!called){
            result=fn();
            called=true;
        }
        return result;
    }
}

const newFunction=once(sayHello);

console.log(newFunction());// return 100 and prints called 
console.log(newFunction());// returns 100 but not prints called becuase the sayHello is not called again just remember the value

/*

Role of clouser:
                as we can see at line 52 the execution of outer function once finishes exection but return
                function can still access the value of result and called variable

*/
// Task 3:Predict and then verify in code: what does a var-based loop log in a setTimeout vs a let-based loop? Write both and explain the output in a comment

//let version

for(var i=0;i<5;i++){
    setTimeout(()=>{
        console.log(i);
    },1000)
} // 5 five times

// const version

for(let j=0;j<5;j++){
    setTimeout(()=>{
        console.log(j);
    },1000)
} // 0,1,2,3,4


