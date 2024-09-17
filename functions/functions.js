function myName(){
    console.log("S");
    console.log("A");
    console.log("N");
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("p");
}
//myName()

function addTwoNumber(number1,nummber2){
   // console.log(number1+nummber2)
   let result=number1+nummber2
   return result
   console.log("sandeep")// does not exect it 
}
const result=addTwoNumber(3,5)
console.log("Result",result);// undefine result 

// 2nd functions
function LoginUserMessage(username){
    return`${username} just logged in`
}
console.log(LoginUserMessage("sandeep"))
//console.log(loginUserMessage(....))  ->result resturn undefine


//shoping cart  and price in shop
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,600));

//object  ko kasha pass karta hai awer use karta hai

const user={
 username:"sandeep",
 price:"1999"
}
function hadleObject(anyObjecct){
   console.log(`username is${anyObjecct.username} and price is${anyObjecct.price}`);
}
hadleObject(user)

//Array 
const myNewArray=[200,800,900]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
