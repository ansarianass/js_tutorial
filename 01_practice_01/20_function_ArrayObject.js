//in further case if we try to make an e commerce website ,
//we gonna make shopping cart , where customer add its fav. items.
// let see how it work with function=>
function AddCart(num1){
return num1
}
console.log(AddCart(20));
// if we have more than one number in AddToCart
console.log(AddCart(20,30,45));
//it print only 20(First value only)
// to tackle these type of problem we have rest operator(...) on function initailizing place 



//case _01
function ShoppingCart(val1,val2,...num1){
    //here we have used rest operator to percieve more than one value as an output
return num1
}
console.log(ShoppingCart(20,23,34,55));
// it provide output in the form of array 


// Case_02
//if two more parameter add to function and provide the value what will be output
console.log(ShoppingCart(20,23,34,55,34,45));//20,23 pass in val1,val2 ,remainig value comes with rest operator




//object in function 
const user={
    username:"Anas",
    prize: 177,

}
//let see how to insert the object inside the function 
function HandleObject(anyObject){
console.log(`usrename is: ${anyObject.username} and price is: ${anyObject.prize }`)
}
//our function doesnt know what value hasbeen called and come , it worked based on parameter ANYOBJECT.
HandleObject(user)

// casae_01
// if we wrote wrong startement by calling a object keys we got error 
//i change prize to prices anyobject.prices
// it return undefined at place of prize 

// Case_02
//we can create object instead of calling it 
HandleObject({
    username:"tauseef",
    prize:200
})

// case_03
const funArray=[2000,5000,8000]
function Array(getArray){
return getArray[1]
}
console.log(Array(funArray));//5000

//Case_04
//here we also can  pass value direct instead of calling 
console.log(Array([20,50,80]));//50





