/***************************************************/ 
//ssingleton object
const tinderuser=new Object()
//non singleton object
const tinderuser1={}
console.log(tinderuser);
console.log(tinderuser1);
// both returning same output but one is singleton and anotherone is  not
tinderuser1.id=1228
tinderuser1.name="Anas"
console.log(tinderuser1);

/***************************************************/ 
// lets make object inside an object
