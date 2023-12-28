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


