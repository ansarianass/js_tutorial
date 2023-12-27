const { log } = require("console");

/*****************************convert positive to negative************************************/
let value=123
let Negvalue=-value
console.log(Negvalue);//-123

/*****************************concatination String************************************/
let str1="hello"
let str2=" anas"
console.log(str1+str2);
/*****************************case01************************************/
//Prefrence
console.log("1"+2);//12
console.log(1+"2");//12
console.log("1"+"2");//12

console.log("1"+2+2);//122
console.log(1+2+"2");//32
//reason :when operation start with string , all treates as string in js
            // when operation start from number it adds number then concatinate string after in js

/*****************************concate with Boolean************************************/
console.log(true);
console.log(+true);// 1
//increment to 1 then true thatsway result 1

// console.log(true+);
//error  bcoz we dont add after concatinate
console.log(+"")//0 
// use unary operator + use before empty string , try to convert empty string to number , strin are empty then return 0
console.log(+"anas");//NaN , attempt to convert Number 


/*****************************Increment in number (pre_fix and post_fix)************************************/
let GameCount=100;
 GameCount ++
 console.log(GameCount);// 101
 //value increment by 1
 /*****************************Case2************************************/
 let Gamescore=100
 ++ Gamescore
 console.log(Gamescore);







