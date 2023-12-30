//destructure object and Json API Intro

obj={
    name:"ansari anas Mohd ejaz",
    id:1232,
    email:"ansarianas@google.com",
    residentialAddress:"Bhiwandi city Thane Maharastra"

}
//if we wanna access adress of obj object 
console.log(obj.residentialAddress);

const {residentialAddress: Add}=obj
console.log(obj.residentialAddress);
console.log(Add);
//each result have same result thats called destructure of object
//now we can call direct as Add




// JSON APIS
/*
Eg.:you go restaurant and see manu card and try to order "vada pao"
Waiter comes and recieve your order=> make that dish=>and give to you
here,
menu is API's Documentation 
vada pao is final Api
{
    "name":"Ansari Anas Mohd Ejaz"
    "rollCall":"406",
    "Std:"SyJc Science"
    "DIv":"D",
    "College":"BNN College Bhiwandi"
}
// This is official structue of json file 
//both value and keys come under String format
*/ 
