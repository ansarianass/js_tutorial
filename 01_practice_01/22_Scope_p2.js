// nested scope 
//closure 
//DOM


// {} it is scope
// let see nested scope 
function first(){
    const username ="Anas"

    function second(){
        const source="youtube"
        console.log(username);

    }
// console.log(source);

second()// in second we print username => Anas printed 
}
first()// first execute but we dont give any value to pass thatswhy it dont return anything 



// Scope in conditionals 
if(true) {
    const username="Tauseef"
    if (username==="Tauseef") {
        const Source="Youtube"
        console.log(username + Source);
    }
   // console.log(source);// source is not defined=>called outside blockScope
}
//console.log(username); //username is not defined=>called Outside blockScope
//condition are true and pass => TauseefYoutube printed
// ********************************intresting*********************************
// hoisting 
console.log(hoi(5));
function hoi(num){
    return num+1
}



console.log(AddTwo(4))
const AddTwo=function(num){
return num+3
}
;//7
//there is two type of declaration of function we used 
//hoisting is nothing but the "Assign value to variable before initialize it "
// function hoi=give proper result in hoisting 
//but where function is declare inside variable , this gives error
//becouse it doesnt support hoisting 
