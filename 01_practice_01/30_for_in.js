/************************************************************************/
//for in loops in Object .js
const Mymovies={
    'One':'12th Fail',
    'Two':'Marvels Iron Man',
    'Three':'Avatar'
    }
    for (const key in Mymovies) {
       console.log(key,':',Mymovies[key]);
    }

    /*****************************************************************/
    //Array in forin loops 
   const progr=['c','c++','python','javascript','node ','React']
for (const lang in progr) {
   console.log(lang);
}
//it works but it returns only keys (index values )
//perhapes in for of loop we got values directly instead of key/index values 
//to access keyvalues we want to do following
const pro=['c++','python','javascript','c#']
for (const lang in pro) {
    console.log(pro[lang]);
}
// here we got values inside array

/***********************************************************************/
//map in forin loops 
const map=new Map()
map.set('IN',"India")
map.set('USA',"United State Of America")
map.set('IOK',"Indian ")
for (const val in map) {
   console.log(val);
}
//code return nothing becouse map is not iterable for forin loops 

