//ES06 come in 2015
// arrow function introduce arrow function and THIS keyword 
//this also known as current context
// context=> kiske baare mein baat ho rahi hai 

const { ADDRGETNETWORKPARAMS } = require("dns");


const user={
    username:"Anas",
    prize:100,
    WelcomeMessage: function(){
console.log(`${this.username}, Welcome to our website `);
//console.log(this);// if we print only this inside the scope it give us current context from start where value got change outside and it return whole context change after 
    }
}

//console.log(this );// here after we consoile log in global scope thatswhy it return print statement as Anas and tauseef welcome message


user.WelcomeMessage()//Anas, Welcome to our website
user.username="tauseef"//current context chnage (value )
user.WelcomeMessage()//Tauseef, welcome to our website 

//what if we try to print this outside the function

//console.log(this);//it return empty object becouse frome here no curent context in global scope. 

console.log("*********************************************************");
  function chai(){
    let username="hitesh"
    console.log(this.username);//undefined, this function work in object not in function 
  }
  chai()
  console.log("*************************Arrow function********************************");

  // there is another ways to creat function in js, => Arrow Function
const cofee=()=>{
  let username="Anas"
  console.log(this);
}
cofee();//undefined 
//if we want to print only this inside the function and call the function , then we got empty object 


//()=>{}, Arrow function basic syntax,
// we can store it inside the variable 
const AddNum=(num1, num2)=>{
  return num1+num2
}
console.log(AddNum(3,4));

// above Arrow function is basic function 



// we have second Arrow function which is IMPLICITE RETURN 
const MultNum=(num1,num2)=>  num1*num2
console.log(MultNum(2,2));//4


// we have third way to define function
const DevideNum=(num1,num2)=>(num1/num2)
console.log(DevideNum(9,3));//3


//if we use curliwe braces we have to write return keyword 
// if we have use paranthesis we dont need to write return keyword  
// used when we will use REACT


// case01
// if we want to return a object in js 
const OBJ=()=>({username:"Anas"})
console.log(OBJ());