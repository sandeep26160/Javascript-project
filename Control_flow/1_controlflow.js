//  IF condition,<,>,<=,>=,  == check karo ,!=, === check type 

const isUserLoggedIn=true
const tempracture=41
if(tempracture===50)
{
    console.log("Less than 50");
}else{
console.log("tempracture is greater than 50");
}
console.log("exectued");


if(2==="2"){
    console.log("executed");
}
const score=200
if(score>100){
    const power="fly"
    console.log(`User power:${power}`);
}
//console.log(`User power:${power}`);// power is notdefine in this scope

const balance=1000
if(balance >5000){
        console.log("test");
}
else{
    console.log("return false");
}

// nested looping 
const balance1=1000
if(balance1 < 500){
    console.log("less than 500");
} else if(balance1 < 750){
    console.log("less than 750");
} else if(balance1 < 900){
    console.log("less than 900")
} else{
    console.log("less than 1200")
}

const userLoggedIN=true
const debitCard=true
if(userLoggedIN && debitCard && 2==3){
    console.log("Allow to buy course");
}