//function in js 

const { Console } = require("console");

// with the help of function we can easy our work 
function print() {
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("S");
}
print()//here print is refference and parenthesis is execution function


// we can make a function at once and called it instead of writing bulk of code repeatedly
function AddTwoNumber(Number1, Number2) {
    console.log(Number1 + Number2);

}
AddTwoNumber(4, 5)//9 in terminal
console.log(AddTwoNumber(4, 5));//undefined with 9
const result = AddTwoNumber(12, 12)
console.log(result);//undefined Reason:in function initialization we have consile to add number , console only work for print not return any value ; for return value we have to define return inside of  function;

//method1
function Add(Number1, Number2) {
    let result = Number1 + Number2;
    return result;  //if i am trying to write code after return it will not executable

}
const re = Add(50, 5)
console.log(re)//55



console.log("*************************************************");


//method2
function Add(Number1, Number2) {
    return Number1 + Number2;


}
Add(12, 2)//NOT PRINT
res = Add(120, 1)
console.log(res);//121


//case1
function userloggedIn(username){
    return `${username} just logged In`
}
userloggedIn("Anas")//it return nothing becoz you only tell to return a value but not to print a value ; to print the value we have to declare print outside function 
console.log(userloggedIn("Anas"));//Anas just logged In
console.log(userloggedIn());// undefined just logged In

// why undefined occures
// see in Case2

//case2
function userlogged(username){
    if(username===undefined){
console.log("Please enter the username");
return
    }
    return `${username} just logged In`
}
userlogged()//please enter your username : parameter has undefined when it declared
//to escape this we want to give value ddirect to username 

function userlog(username = "Ubaid"){
    if(!username){
console.log("Please enter the username");
return
    }
    return `${username} just logged In`
}
console.log(userlog());//ubaid is just logged in
console.log(userlog("tauseef"));//tauseef is just logged in :if we give argument the value , automatic it overwrite 










