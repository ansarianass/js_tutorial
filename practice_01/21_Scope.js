//scope in js 
// scope is nothing but the declaration of value inside and outside of paranthesis.
//{}
if(true ){
    let a=10
    const b=20
    var c=30
    
}
//console.log(a);// a is not defined 
// console.log(b);// b is not defined 
console.log(c);// 30

//c show its value outside paranthesis but let and const not showing ;
//it happens becouse let and const are block scope variable 
// and var is global scope variable 
 
    