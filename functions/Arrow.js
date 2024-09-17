const user={
    username:"sandeep",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
    }
}
user.welcomeMessage()


function chai(){
    let username="sandeep"
    console.log(this.username);// undefine o/p
}
chai()

const code=()=>{
    let username="sandeepk"
    console.log(this);
}
code()//return {} objecct 

// Arrow  use  in syntex  by adding  two number 
const addTwoNumber=(num1,num2)=>{
    return num1+num2
}
console.log(addTwoNumber(3,4))