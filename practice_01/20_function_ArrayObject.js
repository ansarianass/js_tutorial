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
console.log(ShoppingCart(20,23,34,55,34,45));//20,23 pass in val1,val2 ,remainig vslue comes with rest operator




