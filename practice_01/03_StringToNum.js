const { log } = require("console");

/*****************************String conversion************************************/
let num=123;
console.log(num);
console.log(typeof(num));
/*****************************case01************************************/
//if number mix with alphabets
let num1="123abc"
console.log(num1)
console.log(typeof(num1))
//if we want to type coversion to number 
let strTonum=Number(num1)
console.log(strTonum)//NaN
console.log(typeof(strTonum));//number



/*****************************Null************************************/
let score=null
console.log(score)//null
console.log(typeof(score))//object


/*****************************case01************************************/
//if we convert null to number
let scoretoNum=Number(score)
console.log(scoretoNum);//0
console.log(typeof(scoretoNum));//number
//it show 0 which is loophole of js ,
//e.g:when temperature is not efine & WE PUT NULL it will show 0 in number, 0 is high value in case of temp. 


/*****************************undefined ************************************/
let temp=undefined
console.log(temp)// undefined
console.log(typeof(temp))//undefined
/*****************************Case01************************************/
//convert in number
tempNum=Number(temp)
console.log(tempNum)
console.log(typeof(tempNum))

