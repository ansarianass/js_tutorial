//ES06 come in 2015
// arrow function introduce arrow function and THIS keyword 
//this also known as current context
// context=> kiske baare mein baat ho rahi hai 


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


