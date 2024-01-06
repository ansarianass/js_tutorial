//ES06 come in 2015
// arrow function introduce arrow function and THIS keyword 
//this also known as current context
// context=> kiske baare mein baat ho rahi hai 


const user={
    username:"Anas",
    prize:100,
    WelcomeMessage: function(){
console.log(`${this.username}, Welcome to our website `);
    }
}
user.WelcomeMessage()//Anas, Welcome to our website
user.username="tauseef"//current context chnage (value )
user.WelcomeMessage()//Tauseef, welcome to our website 


