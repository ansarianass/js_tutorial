// IIFE =imediately invoked function expressions 


function chai(){
    console.log('DB connected');
}
chai();


// IIFE is ued to when global object variables make some polution in code , for prevent from this polution we have to use IIFE 

(function coffee(){
    console.log('Coffee is ready');
})();// coffee is ready

// we have to use semicolon nescessary , becouse js dont know where IIFE ends, unless after IIFE we got error for another function and code which we have creted after or before ,

//Arrow function with IIFE
//also named as un-named IIFE(Simple IIFE)
(()=>{
    console.log('DB connected without named function');
})
();

// if we want to pass arg. and para in arrow function we just have one step
((name)=>{
    console.log(`${name}, welcome here `);
})("Anas")

