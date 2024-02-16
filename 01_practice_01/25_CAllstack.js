//javascript execution context
//how does js execute code + call stack?
// callstacks ?



// js EC 
// js execute js by two phase 
// 1> whenever we runs our code first it make global EC,
// and one variable reffered to global EC (Eg.this)
//browser EC are different as comapre to NODE Envirnment
//in browser EC reffer in window object
//js execute code in single thread , becouse it execute as an processed
// 2>function /functional EC
// 3>Eval EC

// code execute in two phse
// 1>memory creation phase , it store value only not perform calculate any action 

let val1=10
let val2=20
function AddValue(num1,num2){
    let total=num1+num2
    return total
}
let result1=AddValue(val1,val2)
let result2=AddValue(11,12)

// val 1, variable created in mnemory , first of all this value assign as undefined , 
// 2> execution phase , inn this phase code execute and perform operation .



