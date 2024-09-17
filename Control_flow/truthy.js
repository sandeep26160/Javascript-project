//Assume that is true or false  in js 
const userEmail="sandeep.ai"// Assyme it is  true valu in string
if(userEmail){
    console.log("Got the email");
}
else{
    console.log("Not Got the email");
}

// object is empty in js check

const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}
// Nullish Coalescing Operator (??): null undefined

let val1;
val1=5??10  //response of db in null operation 
val1=null ?? 10 // sefety check kara
val1=undefined ?? 15

console.log(val1);
// Terniary Operator
//  condition ? true:false
