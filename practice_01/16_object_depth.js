// two ways to declare object
//1>singleton
//2>non-singleton
//if object make by constructor it is singleton object
//if object define as an literals it not an singleton


//constructor method 
// Object.create

//object literals
//const jsuser={}

const jsuser = {
    name: "anas",
    age: 20,
    location: "Bhiwandi, Thane",
    email: "ansarianas@google.com",
    isloggedIn: "true"
}


//there are two way to access
console.log(jsuser.email)//normal method to access
console.log(jsuser['email']);//special method to access 

//special's reason(if value define in double quotes then you cant access it via normal way , u use special case)

// to change value in obj we use .notation
jsuser.email="ansarianas@chatgpt.com"
console.log(jsuser);//email: 'ansarianas@chatgpt.com',


/*************************************************************************************************************/
//using symbol in object:
let mysym = Symbol("key1")
const user = {
    name: "anas",
    "full name":"Ansari Anas Mohd Ejaz",
    age: 18,
    [mysym]: "my key1",

}
console.log(user)
console.log(user["full name"])

/*************************************************************************************************************/
//to freez further operation in object 
// Object.freeze(jsuser)
// this will freeze the object and further ooperation cant propagate 


/*************************************************************************************************************/
// add function inside an object 
jsuser.greeting=function(){
    console.log("hello js  user");
}
console.log(jsuser.greeting());
console.log(jsuser);// inside whole object function looks like anonymous function

//inside function we can use object values with help of backticks
jsuser.backtick=function(){
    console.log(`hello ${this.name} your age is:${this.age}`);
}
console.log(jsuser.backtick());

/*************************************************************************************************************/










