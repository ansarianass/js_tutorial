//loops are also known as itrations 
//for loops
/*
for (let index = 0; index < 10; index++) {
    const element = index;
   
    console.log(element);
    }

*/
// for loops with conditionals
/*
for (let i = 0; i <12; i++) {
    const element = i;
    if(element==5){
        console.log("5 is stop point Number");
    }
    
}
*/

/********************************************************************* */
//loops inside loop
/*
for (let i = 0; i <=10; i++) {
    console.log(`Outer Value  of i is:${i}`);
    for (let j = 0; j <=10; j++) {
        console.log(`Inner Value  of j  :${j} and Outer value of i is :${i}`);
        
        
    }
    
}
*/
//in above example control flow worls as follow:
//i statement run at 0 number => for loops run 10th time as condition given
//i statement run for 1st value of i => j value run 10 time as condition



/************************************************************************/
//make table with the help of for loops
/*
for (let a = 0; a <=10; a++) {
    if(a==1){
        console.log('table of 1');
    }
    if(a==2){
        console.log('table of 2');
    }
    if(a==3){
        console.log('table of 3');
    }
    if(a==4){
        console.log('table of 4');
    }
    if(a==5){
        console.log('table of 5');
    }
    if(a==6){
        console.log('table of 6');
    }
    if(a==7){
        console.log('table of 7');
    }
    if(a==8){
        console.log('table of 8');
    }
    if(a==9){
        console.log('table of 9');
    }
    if(a==10){
        console.log('table of 10');
    }
    for (let b = 0; b <=10; b++) {
        console.log(a+"*"+b+'='+a*b);
        
    }
    
}
*/
/************************************************************************/

/*
MyArray=['batman','superman','flash']
console.log(MyArray.length);
//we can access array via index values of an array
console.log(MyArray[0]);
console.log(MyArray[1]);
console.log(MyArray[2]);
console.log(MyArray[3]);
for (let index = 0; index < MyArray.length; index++) {
    const element = MyArray[index];
    console.log(element);
    
}
*/
/************************************************************************/
//Break And Continue 
// break
/*
for (let index = 1; index <=20; index++) {
    if(index==10){
        console.log('10 detected ');
        break;
    }
    const element =index;
    console.log(`value of index is${index}`);
}
*/
//continue
/*
for (let index = 1; index <=20; index++) {
    if(index==10){
        console.log('10 detected ');
        continue;
    }
    const element =index;
    console.log(`value of index is${index}`);
    //continue skip that point where it placed and print further action 
    // as here 10 not printed 
}
*/

