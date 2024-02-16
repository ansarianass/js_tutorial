/***********************************************************************/
//Array specific loops  
//1> for of loops
//2>for in loops
//3>for each loop
//high order function
/************************************************************************/
//in most time we recieve Array with String inside of it 
//['','','','',]
// or even we have objects inside an array 
//[{},{},{}]

// lets see one by one each of this 
const arr=[1,2,3,4,5]
/*******************************************************/
//1> for of loop
///for (const iterator of object) {}
//here , iterator is nothing but the name a swe use i in loop
//object means not a object, here it means that thing(here we can directly use array name or object name by which they have created)

for (const num of arr) {
    console.log(num);
}

//case :01
//for of with String
const Greetings='hello World'

for (const Greet of Greetings) {
    
    console.log(`each char is: ${Greet}`);
}
/************************************************************************/
// 2>map 
//it seems like Array but some iteration are there
const map=new Map()
map.set('IN',"India")
map.set('USA',"United State Of America")
map.set('IOK',"Indian ")

console.log(map);
//output Are Below
/*
Map(3) {
    'IN' => 'India',
    'USA' => 'United State Of America',
    'IOK' => 'Indian '
  }
  */
// case :01
//map with for of loop
// here we use onemore literals for maps 
// [key:value]
//diff:it dont print duplictate values
for (const [keys,value] of map) {//instead of name we can directly access key and values ; it destructure in array
    console.log(keys,':-',value);
} 

//case 02
//object in for of loop
/*
const Mymovies={
'One':'12th Fail',
'Two':'Marvels Iron Man',
'Three':'Avatar'
}
for (const Movie of Mymovies) {
    
}
*/
//got error ; Object is not iterable 
