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
const regularuser={
    fullname:{
        firstname:"Anas",
        lastname:"Ansari"
    },
    age:18
}
console.log(regularuser);
console.log(regularuser.fullname.firstname);
console.log(regularuser.fullname.lastname);

//we can access all keys and values of an object via some of comands
console.log("keys of regularuser is :",Object.keys(regularuser));
//obviously we can access all values of an object 
console.log("Values of regularuser is",Object.values(regularuser));
// it returns value as an array




//optional chaining in object: 
/*in most case when value come from backend and you dont confirm that 
either value exist or not , in this case we use optional chaining method(?)


*/
/***************************************************************/ 
//merging object into object
let obj1={1:"a",2:"b",3:"c"}
let obj2={24:"x",25:"y",26:"z"}



//const obj3={obj1,obj2}
//const obj3= Object.assign(obj1,obj2)
//console.log(obj3)

//{ '1': 'a', '2': 'b', '3': 'c', '24': 'x', '25': 'y', '26': 'z' }

//in assign method we use two parameters(object.assign(Target,Source))
//at target place we can hold empty object , on place of Source we have to mention object which we gonna attatch.
const obj3=Object.assign({},obj1,obj2)
console.log(obj3);


/*********************************************************/
//often we use spread operator instead of assign 
const stor={...obj1,...obj2}
console.log(stor);

/*********************************************************/
console.log("***************************************************");
const user=[
    {
        id:1,
        email:"anas@google.com",

    },
    {
        name:"ansari anas mmohd ejaz",
        address:"Bhwandi, Thane , Maharastra"
    }
]
console.log(user[0]);
console.log(user[0].email);
console.log(user[1]);
console.log(user[1].address);

//if i want to know either some property exist or not then we can simply tells to compiler 
console.log(user.hasOwnProperty([].email));
console.log(regularuser.hasOwnProperty('fullname'));







